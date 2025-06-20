"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { 
  Box, 
  Typography, 
  Button, 
  TextField, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Avatar,
  IconButton
} from '@mui/material';
import { Star, Share } from '@mui/icons-material';
import Image from 'next/image';
import ProtectedRouter from '@/components/ProtectedRouter';

const Page = () => {
  const { movieid } = useParams();
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);
  const [openReviewDialog, setOpenReviewDialog] = useState(false);
  const [reviewText, setReviewText] = useState('');

  const handlePostReview = () => {
    fetch("/api/movies/reviews", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ review: reviewText })
    })
    .then(res => res.json())
    .then(data => {
      setReviews(data);
      setOpenReviewDialog(false);
      setReviewText('');
    });
  };

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieid}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`)
      .then(res => setMovie(res.data));
  }, [movieid]);

  useEffect(() => {
    fetch("/api/movies/reviews")
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <ProtectedRouter>
<Box sx={{ 
      width: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      pt: 8,
      backgroundColor: 'transparent',
      color: 'text.primary'
    }}>
      {/* Movie Details Section */}
      <Box sx={{ 
        width: '80%', 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        gap: 4,
        mb: 4,
        backgroundColor: 'transparent'
      }}>
        <Card sx={{ 
          width: { xs: '100%', md: '30%' }, // Reduced from 40% to 30%
          maxWidth: { md: '300px' }, // Added maxWidth constraint
          borderRadius: 2,
          backgroundColor: 'transparent',
          boxShadow: 'none'
        }}>
          <CardMedia
            component="img"
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            sx={{ 
              width: '100%', 
              height: 'auto', 
              borderRadius: 2,
              maxHeight: '450px', // Added maxHeight constraint
              objectFit: 'contain' // Ensures proper aspect ratio
            }}
          />
        </Card>

        <Box sx={{ 
          width: { xs: '100%', md: '70%' }, // Adjusted to 70% to compensate
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: 'transparent'
        }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'white' }}>
            {movie.title}
          </Typography>
          <Typography variant="body1" paragraph sx={{ opacity: 0.7, color: 'white' }}>
            {movie.overview}
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
            <Button 
              variant="contained" 
              startIcon={<Star sx={{ color: 'white' }} />}
              onClick={() => setOpenReviewDialog(true)}
              sx={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)'
                }
              }}
            >
              Add Review
            </Button>
            <Button 
              variant="outlined" 
              startIcon={<Share sx={{ color: 'white' }} />}
              sx={{ 
                color: 'white', 
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'rgba(255, 255, 255, 0.7)'
                }
              }}
            >
              Share
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Reviews Section */}
      <Card sx={{ 
        width: '80%', 
        p: 3, 
        border: '2px solid',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)'
      }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ color: 'white' }}>
          Reviews
        </Typography>
        <Divider sx={{ mb: 3, borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        {reviews.map((review, index) => (
          <Box key={index} sx={{ 
            display: 'flex', 
            gap: 3, 
            mb: 3,
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            p: 2,
            borderRadius: 2
          }}>
            <Avatar src="/user.png" sx={{ width: 80, height: 80 }} />
            <Box>
              <Typography variant="h6" component="h3" sx={{ color: 'white' }}>
                User
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                {review.review}
              </Typography>
            </Box>
          </Box>
        ))}
      </Card>

      {/* Add Review Dialog */}
      <Dialog 
        open={openReviewDialog} 
        onClose={() => setOpenReviewDialog(false)}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            minWidth: '400px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)'
          }
        }}
      >
        <DialogTitle variant="h4" sx={{ color: 'white' }}>Add Review</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            sx={{ 
              mt: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
              '& .MuiInputBase-input': {
                color: 'white',
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(255, 255, 255, 0.7)',
              },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button 
            onClick={() => setOpenReviewDialog(false)}
            sx={{ 
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.7)'
              }
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handlePostReview}
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)'
              }
            }}
            disabled={!reviewText.trim()}
          >
            Submit Review
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
    </ProtectedRouter>
    
  );
};

export default Page;