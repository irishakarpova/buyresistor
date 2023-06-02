import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ProductInCart from './product';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';

export const Cart = ({ cart, handleRemoveFromCart, handleUpdateCartQty }) => {
  if (!cart.line_items) {
    return <p>Loading...</p>;
  }

  const newSubtotal = cart.line_items.length
    ? (cart.subtotal.raw + 3.8).toFixed(2)
    : cart.subtotal.raw;

  return (
    <Box sx={{ minHeight: '95vh' }}>
      <Grid
        sx={{
          p: 6,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            pt: 15,
            pb: 2,
          }}
          component="div"
        >
          My Cart
        </Typography>

        {cart.line_items.length ? (
          cart.line_items.map((product) => {
            return (
              <div key={product.id}>
                <ProductInCart
                  product={product}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleUpdateCartQty={handleUpdateCartQty}
                />
              </div>
            );
          })
        ) : (
          <Typography
            variant="h6"
            sx={{
              pt: 2,
              pb: 2,
            }}
            component="div"
          >
            You have no items in shopping cart
          </Typography>
        )}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            mt: 5,
          }}
        >
          <Typography variant="h6" component="div">
            Order Summary:
          </Typography>

          <Typography
            sx={{
              pl: 3,
              pr: 3,
            }}
            variant="h6"
            component="div"
          >
            {cart.subtotal.formatted_with_code}
          </Typography>
        </Box>

        <Typography variant="h6" component="div">
          {cart.line_items.length ? 'Shipping: 3.80 USD' : ''}
        </Typography>

        <Typography variant="h6" component="div">
          Order Total: {newSubtotal} USD
        </Typography>

        <Button
          component={Link}
          to="/checkout"
          sx={{
            borderRadius: 5,
            mt: 5,
            width: '100%',
            '@media (min-width: 1060px)': {
              width: 550,
            },
          }}
          disabled={cart.line_items.length ? false : true}
          variant="contained"
        >
          Checkout
        </Button>
      </Grid>
    </Box>
  );
};
