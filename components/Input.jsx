import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField({ label }) {
    return (
      <Box sx={{ width: 500, maxWidth: '100%' }}>
        <TextField
          fullWidth
          label={label}
          id="fullWidth"
          type={label=="Password"?label:"text"}
          sx={{
            textAlign: "center",
            // White text color for input
            '& .MuiInputBase-input': {
              color: 'white',
            },
            // White placeholder text
            '& .MuiInputBase-input::placeholder': {
              color: 'white',
              opacity: 1,
            },
            // White outline when focused
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white', // Default border color
              },
              '&:hover fieldset': {
                borderColor: 'white', // Hover state
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white', // Focused state
              },
            },
            // White label
            '& .MuiInputLabel-root': {
              color: 'white',
              '&.Mui-focused': {
                color: 'white',
              },
            },
          }}
          // Additional props for placeholder styling
          InputProps={{
            sx: {
              '&::placeholder': {
                color: 'white',
              },
            },
          }}
        />
      </Box>
    );
  }
