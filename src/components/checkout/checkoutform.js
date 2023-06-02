import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CircularProgress,
  Paper,
  Typography,
  Stepper,
  Box,
  Container,
  StepLabel,
  Step,
} from '@mui/material';

import { AddressForm } from './AddressForm';
import { PaymentForm } from './PaymentForm';
import { commerce } from '../../lib/commerce';
import Confirmation from './confirmation';

const steps = ['Shipping address', 'Payment details'];
export const Checkout = ({
  cart,
  errorMessage,
  handleCaptureCheckout,
  order,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});

  const navigate = useNavigate();

  const bodyHeight = {
    minHeight: 'calc(100vh - 150px)',
  };

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: 'cart',
          });

          setCheckoutToken(token);
        } catch {
          if (activeStep !== steps.length) navigate('/');
        }
      };
      generateToken();
    }
  }, [cart]);

  const nextStep = () => setActiveStep((activeStep) => activeStep + 1);
  const backStep = () => setActiveStep((activeStep) => activeStep - 1);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  if (errorMessage) {
    <Typography variant="h5">Error: {errorMessage}</Typography>;
  }

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        backStep={backStep}
        checkoutToken={checkoutToken}
        shippingData={shippingData}
        order={order}
        handleCaptureCheckout={handleCaptureCheckout}
        error={errorMessage}
        nextStep={nextStep}
      />
    );

  return (
    <Container style={bodyHeight} maxWidth="sm">
      <Paper
        sx={{
          mt: 15,
          p: 5,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            pb: 5,
          }}
          variant="h6"
          align="center"
        >
          Checkout
        </Typography>
        <Stepper activeStep={activeStep}>
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length ? (
          <Confirmation order={order} />
        ) : checkoutToken ? (
          <Form />
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}>
            <CircularProgress />
          </Box>
        )}
      </Paper>
    </Container>
  );
};
