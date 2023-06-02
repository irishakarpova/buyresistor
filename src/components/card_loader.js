import React from 'react';
import Card from '@mui/material/Card';

export default function Resistor({ resistor, handleAddToCart }) {
  return (
    <>
      <Card
        sx={{
          mt: 10,
          height: 200,
          width: 450,
          mr: 4,
          '@media (max-width: 950px)': {
            mr: 0,
            width: 450,
          },
          boxShadow: 'none',
          background: '#ededed',
        }}
      ></Card>
    </>
  );
}
