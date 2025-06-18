"use client"
import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import Image from 'next/image';
import axios from 'axios';
import { motion } from 'framer-motion';
export default function CustomForm() {
  const[isLoggedin,setIsLoggedIn]=useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/auth/signin",{
      email:formData["email"],
      password:formData["password"]
    },
    {
      headers:{
        "Content-Type":"application/json"
      }
    }
    ).then(res=>{
      if(res.status==200){
       setIsLoggedIn(true)
        localStorage.setItem("Token",res.data.token)
        location.assign("/")
      }
  })
  };

  return (
    <>
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
        <div className='h-dvh flex flex-col justify-center pb-28 '>
      <div className='flex flex-col '>
        <div className='w-full flex justify-center'>
        <Image src={"/logo.png"} width={200} height={100}></Image>
        </div>
       
      <div className='m-3'>
      <Box sx={{ width: 500, maxWidth: '100%' }}>
        <TextField
          fullWidth
          onChange={handleChange}
          label="E-mail"
          id="fullWidth"
          name={"email"}
          type={"text"}
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
</div>

<div className='m-3'>
<Box sx={{ width: 500, maxWidth: '100%' }}>
        <TextField
          fullWidth
          onChange={handleChange}
          label="Password"
          id="fullWidth"
          name="password"
          type="password"
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
        Sign in
      </Button>
      </div>
    </Box>
    
    </>  
  );
}