import React, { useEffect, useState } from 'react';
import {
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { CustomTextField } from './formInput';
import { commerce } from '../../lib/commerce';
import { Link } from 'react-router-dom';

export const AddressForm = ({ cart, next, checkoutToken }) => {
  const [shippingStates, setShippingStates] = useState([]);
  const [shippingState, setShippingState] = useState('');
  const [shippingOption, setShippingOption] = useState(null);

  const fetchShippingStates = async () => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      'US'
    );
    setShippingStates(subdivisions);
  };

  const states = Object.entries(shippingStates).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  const fetchShippingOptions = async (checkoutTokenId) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutToken.id,
      {
        country: 'US',
        region: shippingState,
      }
    );
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchShippingOptions();
    fetchShippingStates();
  }, [cart]);

  const methods = useForm();

  return (
    <Box sx={{ pt: 5 }}>
      <Typography sx={{ p: 1 }} variant="h6">
        Shipping Address
      </Typography>

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({ ...data, shippingState, shippingOption })
          )}
        >
          <Grid sx={{ p: 1 }} container spacing={3}>
            <Grid item xs={12} sm={6}>
              <InputLabel required>First Name</InputLabel>
              <CustomTextField name="firstName" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel required>Last Name</InputLabel>
              <CustomTextField name="lastName" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel required>Address</InputLabel>
              <CustomTextField name="address1" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel required>City</InputLabel>
              <CustomTextField name="city" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel required>Email</InputLabel>
              <CustomTextField name="email" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel required>ZIP</InputLabel>
              <CustomTextField name="zip" required />
            </Grid>

            <Grid item xs={12} sm={6}>
              <>
                <InputLabel required id="select-label">
                  State
                </InputLabel>
                <Select
                  value={shippingState}
                  label="shippingState"
                  variant="standard"
                  fullWidth
                  required
                  onChange={(e) => setShippingState(e.target.value)}
                >
                  {states.map((state) => (
                    <MenuItem key={state.id} value={state.id}>
                      {state.label}
                    </MenuItem>
                  ))}
                </Select>
              </>
            </Grid>
          </Grid>
          <br />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              p: 1,
            }}
          >
            <Button
              sx={{ borderRadius: '5px' }}
              component={Link}
              to="/cart"
              variant="outlined"
            >
              Back to Cart
            </Button>
            <Button
              type="submit"
              sx={{ borderRadius: '5px' }}
              variant="contained"
            >
              Next
            </Button>
          </Box>
        </form>
      </FormProvider>
    </Box>
  );
};
