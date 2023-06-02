import React from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  CardActionArea,
} from '@mui/material';

export const Categories = ({ categories, loading }) => {
  const getCategorys = () => {
    return (
      categories &&
      categories.map((category) => {
        return (
          <Card
            key={category.id}
            sx={{
              m: 3,
              ml: 0,
              width: '100%',
              '@media (min-width: 600px)': {
                width: '345px',
                m: 3,
                ml: 0,
              },
            }}
          >
            <CardActionArea sx={{ height: '100%' }} href={category.slug}>
              <CardMedia
                component="img"
                sx={{
                  height: 140,
                }}
                image={category.assets[0].url}
                alt="resistor"
              />
              <Box
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <CardContent
                  sx={{
                    pb: 3,
                  }}
                >
                  <Typography
                    sx={{
                      color: '#707070',
                      fontWeight: 500,
                    }}
                    variant="h5"
                    component="div"
                  >
                    {category.name.substring(0, category.name.indexOf('.'))}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#909090',
                      fontWeight: 500,
                    }}
                    variant="h6"
                  >
                    {category.description}
                  </Typography>
                </CardContent>
              </Box>
            </CardActionArea>
          </Card>
        );
      })
    );
  };
  return (
    <Grid
      sx={{
        p: 6,
      }}
    >
      <Grid
        container
        sx={{
          display: 'flex',
          mt: 13,
        }}
      >
        {!loading && getCategorys()}
      </Grid>
    </Grid>
  );
};
