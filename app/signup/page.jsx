"use client"
import { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  InputLabel
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Image from 'next/image';
import axios from 'axios';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    gender: '',
    country: '',
    birthday: null
  });

  const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setFormData(prev => ({
      ...prev,
      birthday: date
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/auth/signup", 
      { 
        email: formData["username"],
        password: formData["password"]
      },
      { 
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(res=>console.log(res.data))
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box 
        component="form" 
        onSubmit={handleSubmit}
        sx={{
          maxWidth: '500px',
          margin: '0 auto',
          padding: 3,
          borderRadius: 2,
          backgroundColor: 'transparent'
        }}
      >
        <div className='h-dvh flex flex-col justify-center pb-28'>
          <div className='flex flex-col'>
            <div className='w-full flex justify-center'>
              <Image src="/logo.png" width={200} height={100} alt="Company Logo" />
            </div>

            <div className='m-3'>
              <TextField
                fullWidth
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{
                  style: { color: 'white' },
                }}
                required
                sx={{
                  borderColor:"white",
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    '&.Mui-focused': {
                      color: 'white',
                    },
                  },
                }}
              />
            </div>

            <div className='m-3'>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{
                  style: { color: 'white' },
                }}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    '&.Mui-focused': {
                      color: 'white',
                    },
                  },
                }}
              />
            </div>

            <div className='m-3'>
              <FormControl component="fieldset">
                <FormLabel component="legend" sx={{ color: 'white' }}>Gender</FormLabel>
                <RadioGroup
                  row
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <FormControlLabel 
                    value="female" 
                    control={<Radio sx={{ color: 'white' }} />} 
                    label="Female" 
                    sx={{ color: 'white' }}
                  />
                  <FormControlLabel 
                    value="male" 
                    control={<Radio sx={{ color: 'white' }} />} 
                    label="Male" 
                    sx={{ color: 'white' }}
                  />
                  <FormControlLabel 
                    value="other" 
                    control={<Radio sx={{ color: 'white' }} />} 
                    label="Other" 
                    sx={{ color: 'white' }}
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <div className='m-3'>
              <FormControl fullWidth>
                <InputLabel sx={{ color: 'white' }}>Country</InputLabel>
                <Select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  label="Country"
                  sx={{
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '& .MuiSvgIcon-root': {
                      color: 'white',
                    },
                  }}
                >
                  {countries.map((country) => (
                    <MenuItem key={country} value={country}>
                      {country}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className='m-3'>
              <DatePicker
                label="Birthday"
                value={formData.birthday}
                onChange={handleDateChange}
                sx={{
                  width: '100%',
                  color:"wheat",
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white',
                    '&.Mui-focused': {
                      color: 'white',
                    },
                  },
                  '& .MuiSvgIcon-root': {
                    color: 'white',
                  },
                }}
              />
            </div>
          </div>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              py: 1.5,
              backgroundColor: 'black',
              color: 'white',
              '&:hover': {
                backgroundColor: '#333'
              }
            }}
          >
            Register
          </Button>
        </div>
      </Box>
    </LocalizationProvider>
  );
}