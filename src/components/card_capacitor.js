import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Description from './table_capacitors';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function Resistor({ resistor, handleAddToCart }) {
  console.log('resistor1', resistor);
  return (
    <>
      <Card
        sx={{
          mt: 10,
          width: '100%',
          maxWidth: 450,
          mr: 4,
          '@media (max-width: 950px)': {
            mr: 0,
            width: 450,
          },
          background: '#F8F8F8',
        }}
      >
        <CardMedia
          sx={{
            height: 100,
            backgroundSize: 'contain',
            backgroundRepeat: 'space',
            backgroundPosition: 'center',
            backgroundColor: '#454a4e',
          }}
          image={resistor.image.url}
          title="green iguana"
        />

        <CardContent
          component="div"
          sx={{
            paddingLeft: '10px',
            paddingRight: '10px',
            mt: 4,
            display: 'flex',
          }}
        >
          <Box
            sx={{
              mr: 1,
              width: '100px',
              borderRadius: 0.3,
              border: '1px solid #dadada',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{ fontWeight: 600 }}
              variant="subtitle1"
              textAlign="center"
              component="div"
            >
              {resistor.name}
            </Typography>
          </Box>
          <Description resistor={resistor} />
          <Button
            onClick={() => handleAddToCart(resistor.id, 1)}
            sx={{
              ml: 1,
              p: 1,
              borderRadius: 0.3,
              border: '1px solid #dadada',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography
                variant="subtitle2"
                textAlign="center"
                component="div"
              >
                {resistor.price.formatted_with_symbol}
              </Typography>

              <Box>
                <AddShoppingCartIcon sx={{ fontSize: '20px' }} />
              </Box>
            </Box>
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
