import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography, Divider, Chip } from '@mui/material';
import Box from '@mui/material/Box';
import Description from './table';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function CardResistorSelected({ resistor, handleAddToCart }) {
  return (
    <>
      <Card
        sx={{
          mt: 5,
          width: '100%',
          minWidth: 450,
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
          }}
          image={resistor.image.url}
          title="Radial Electrolytic Capacitor"
        />

        <Typography
          sx={{
            fontWeight: 600,
            padding: '10px',
            color: '#a3a3a3',
            fontSize: '12px',
          }}
          variant="subtitle2"
          textAlign="left"
          component="div"
        >
          <Chip
            sx={{ mr: 1, borderRadius: '25px' }}
            size="small"
            label={resistor.available}
            component="a"
            variant="filled"
            color={resistor.available > 0 ? 'primary' : 'warning'}
          />
          packs left
        </Typography>
        <CardContent
          component="div"
          sx={{
            paddingLeft: '10px',
            paddingRight: '10px',
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
              flexDirection: 'column',
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
            disabled={resistor.available < 1 ? true : false}
            onClick={() => handleAddToCart(resistor.id, 1)}
            sx={{
              ml: 1,
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
                {resistor.price}
              </Typography>
              <Divider />
              <Box>
                <AddShoppingCartIcon sx={{ fontSize: '17px', mt: '12px' }} />
              </Box>
            </Box>
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
