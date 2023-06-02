import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography, Divider, Chip } from '@mui/material';
import Box from '@mui/material/Box';
import Description from './table';
import Description4 from './table_4band';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function CardResistor({ resistor, handleAddToCart }) {
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
        {/* <Box
          sx={{
            position: 'absolute',
            zIndex: 100,
            background: 'white',
            opacity: '95%',
            width: '450px',
            height: '232px',
            borderRadius: '10px',
          }}
        ></Box> */}
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
            label={resistor.inventory.available}
            component="a"
            variant="filled"
            color={resistor.inventory.available > 0 ? 'primary' : 'warning'}
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
          {(resistor.categories.slag === '1-8w-carbon-film-resistors') |
          'ceramic-capacitors' |
          '1w-carbon-film-resistors' |
          '1-2w-carbon-film-resistors' |
          'radial-electrolytic-capacitors' ? (
            <Description4 resistor={resistor} />
          ) : (
            <Description resistor={resistor} />
          )}
          {resistor.inventory.available < 1 ? (
            <Button
              disabled
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
                  {resistor.price.formatted_with_symbol}
                </Typography>
              </Box>
            </Button>
          ) : (
            <Button
              onClick={() => handleAddToCart(resistor.id, 1)}
              sx={{
                ml: 1,
                p: 0,
                borderRadius: 0.3,
                border: '1px solid #dadada',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                  variant="subtitle2"
                  textAlign="center"
                  component="div"
                >
                  {resistor.price.formatted_with_symbol}
                </Typography>
                <Divider />
                <Box>
                  <AddShoppingCartIcon sx={{ fontSize: '17px', mt: '12px' }} />
                </Box>
              </Box>
            </Button>
          )}
        </CardContent>
      </Card>
    </>
  );
}
