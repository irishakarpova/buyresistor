import React, { useState, useEffect } from 'react';
import Resistor from './card';
import ResistorLoader from './card_loader';
import { Grid, Box, Chip } from '@mui/material';
import Typography from '@mui/material/Typography';
import { commerce } from '../lib/commerce';

function Resistors_k({ handleAddToCart, categories }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ['1w-carbon-film-resistors'],
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
          <Resistor handleAddToCart={handleAddToCart} resistor={product} />
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
                          item.slug === '1w-carbon-film-resistors'
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
              Pack (10 pcs) of 1/4W Metal Film Resistors
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
