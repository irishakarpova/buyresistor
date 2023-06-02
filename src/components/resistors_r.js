import React, { useState, useEffect } from 'react';
import Resistor from './card';
import ResistorLoader from './card_loader';
import { Grid, Box, Chip } from '@mui/material';
import Typography from '@mui/material/Typography';
import { commerce } from '../lib/commerce';
import ResistorSelected from './card_selected';
import Select from 'react-select';

function Resistors_k({ handleAddToCart, categories }) {
  const [selected, setSelected] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ['1-4w-metal-film-resistors-0-910'],
      limit: 200,
    });
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (selected) => {
    setSelected(selected);
  };

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

  const options = products.map((item) => {
    return {
      id: item.id,
      label: item.name,
      value: item.id,
      description: item.description,
      image: item.image,
      name: item.name,
      available: item.inventory.available,
      price: item.price.formatted_with_symbol,
    };
  });

  const getSElectedListOfProducts = () => {
    return selected.map((product) => {
      return (
        <div key={product.id}>
          <ResistorSelected
            handleAddToCart={handleAddToCart}
            resistor={product}
          />
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
        <>
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
                        item.slug === '1-4w-metal-film-resistors-0-910'
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
        </>
        <Grid
          container
          sx={{
            display: 'flex',
            background: '#f2f2f2',
            borderRadius: '10px',
            p: 1,
            mt: 5,
          }}
        >
          <Box
            sx={{
              width: '100%',
              '@media (min-width: 1060px)': {
                width: '100%',
              },
            }}
          >
            <Select
              isMulti
              value={selected}
              options={options}
              onChange={handleChange}
              name="form-field-select"
            />
            <br />
          </Box>
          <br />
          {selected.length > 0 && (
            <Typography
              sx={{ fontWeight: 600, width: '100%' }}
              variant="subtitle1"
              component="div"
            >
              Selected resistors:
            </Typography>
          )}

          {getSElectedListOfProducts()}
        </Grid>

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
