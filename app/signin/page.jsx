"use client"
import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import Image from 'next/image';
import FullWidthTextField from '@/components/Input';
export default function CustomForm() {
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
    console.log('Form submitted:', formData);
  };

  return (
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
<FullWidthTextField label={"E-mail"}></FullWidthTextField>
</div>

<div className='m-3'>
<FullWidthTextField label={"Password"}></FullWidthTextField>
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
  );
}