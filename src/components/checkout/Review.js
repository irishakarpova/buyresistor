import React from 'react';
import { Typography, List, ListItem, ListItemText, Box } from '@mui/material';

export const Review = ({ checkoutToken }) => {
  const orderTotal = (
    checkoutToken.subtotal.raw + checkoutToken.shipping_methods[0].price.raw
  ).toFixed(2);
  const total_price = checkoutToken.shipping_methods[0].price.raw.toFixed(2);
  return (
    <Box>
      <Typography variant="h4"></Typography>
      <br />
      {checkoutToken.line_items.map((product) => (
        <List sx={{ p: 0 }} key={product.id}>
          <ListItem>
            <ListItemText
              primary={product.name}
              secondary={`Quantity: ${product.quantity}`}
            />
            <Typography variant="body">
              {product.price.formatted_with_symbol}
            </Typography>
          </ListItem>
        </List>
      ))}
      <List>
        <ListItem>
          <ListItemText primary="Shipping" />
          <Typography variant="body">$ {total_price} </Typography>
        </ListItem>
      </List>
      <ListItem sx={{ display: 'flex', justifyContent: 'end' }}>
        <Typography sx={{ fontWeight: 700 }} variant="subtitel1">
          Order Total: {orderTotal} USD
        </Typography>
      </ListItem>
      <br />
    </Box>
  );
};
