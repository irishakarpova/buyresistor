import React, { useState, useEffect } from 'react';
import Capacitor from './card_capacitor';
import ResistorLoader from './card_loader';
import { Grid, Box, Chip } from '@mui/material';
import Typography from '@mui/material/Typography';
import { commerce } from '../lib/commerce';

function Capacitors({ handleAddToCart, categories }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ['ceramic-capacitors'],
      limit: 200,
    });
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const getListOfProducts = () => {
    return products.map((product) => {
      return (
        <div key={product.id}>
          <Capacitor handleAddToCart={handleAddToCart} resistor={product} />
        </div>
      );
    });
  };
  const getListOfProductsEmpty = () => {
    return [1, 2, 3, 4].map((index) => {
      return (
        <div key={index}>
          <ResistorLoader />
        </div>
      );
    });
  };

  return (
    <>
      <Grid
        container
        sx={{
          p: 6,
        }}
      >
        <Box>
          <Box
            xs={12}
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            sx={{
              pt: 10,
              pb: 4,
            }}
          >
            {!loading
              ? categories.map((item) => {
                  return (
                    <Chip
                      sx={{ mr: 1, mb: 1, borderRadius: '5px' }}
                      size="small"
                      key={item.id}
                      label={item.name}
                      component="a"
                      clickable
                      href={item.slug}
                      variant={
                        item.slug === 'ceramic-capacitors'
                          ? 'filled'
                          : 'outlined'
                      }
                    />
                  );
                })
              : [1, 2, 3, 4, 5, 6, 7].map((item) => {
                  return (
                    <Chip
                      sx={{
                        width: '220px',
                        height: '22px',
                        mr: 1,
                        mb: 1,
                        borderRadius: '5px',
                        background: '#ededed',
                      }}
                      size="small"
                      variant={'filled'}
                    />
                  );
                })}
          </Box>
          {!loading ? (
            <Typography variant="h5">
              Pack (10 pcs) of Monolithic Ceramic Capacitors
            </Typography>
          ) : (
            <Box
              sx={{
                width: '220px',
                height: '22px',
                mr: 1,
                mb: 1,
                borderRadius: '5px',
                background: '#ededed',
              }}
            ></Box>
          )}
        </Box>
        <Grid
          container
          sx={{
            display: 'flex',
          }}
        >
          {loading ? getListOfProductsEmpty() : getListOfProducts()}
        </Grid>
      </Grid>
    </>
  );
}

export default Capacitors;
