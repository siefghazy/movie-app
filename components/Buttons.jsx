import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({ button }) {
    return (
      <Stack spacing={2} direction="row">
        <Button 
          variant="outlined"
          sx={{
            color: 'white',        // White text
            backgroundColor: 'black',  // Black background
            borderColor: 'white',  // White border
            '&:hover': {
              backgroundColor: '#333',  // Darker on hover
              borderColor: 'white',    // Keep white border on hover
            },
          }}
        >
          {button}
        </Button>
      </Stack>
    );
  }