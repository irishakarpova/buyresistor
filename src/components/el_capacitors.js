import React, { useState, useEffect } from 'react';
import ElCapacitor from './card_el_capacitor';
import ResistorLoader from './card_loader';
import { Grid, Box, Chip } from '@mui/material';
import Typography from '@mui/material/Typography';
import { commerce } from '../lib/commerce';

function Resistors_k({ handleAddToCart, categories }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ['radial-electrolytic-capacitors'],
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
          <ElCapacitor handleAddToCart={handleAddToCart} resistor={product} />
        </div>
      );
    });
  };
  const getListOfProductsEmpty = () => {
    return [11, 12, 13, 14].map((index) => {
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
                    <div key={item.id}>
                      <Chip
                        sx={{ mr: 1, mb: 1, borderRadius: '5px' }}
                        size="small"
                        key={item.id}
                        label={item.name}
                        component="a"
                        clickable
                        href={item.slug}
                        variant={
                          item.slug === 'radial-electrolytic-capacitors'
                            ? 'filled'
                            : 'outlined'
                        }
                      />
                    </div>
                  );
                })
              : [1, 2, 3, 4, 5, 6, 7].map((index) => {
                  return (
                    <div key={index}>
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
                    </div>
                  );
                })}
          </Box>
          {!loading ? (
            <Typography variant="h5">
              Aluminum Electrolytic Capacitors
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

export default Resistors_k;
