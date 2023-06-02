import React from 'react';
import { Typography, Button, Divider } from '@mui/material';
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Review } from './Review';

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`);

export const PaymentForm = ({
  checkoutToken,
  shippingData,
  backStep,
  nextStep,
  handleCaptureCheckout,
}) => {
  const total = (
    checkoutToken.subtotal.raw + checkoutToken.shipping_methods[0].price.raw
  ).toFixed(2);

  const handleSubmit = async (e, elements, stripe) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    if (error) {
      console.log('[error_payment]', error);
    } else {
      const orderData = {
        line_items: checkoutToken.line_items,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        shipping: {
          name: 'United States',
          street: shippingData.address1,
          town_city: shippingData.city,
          country: 'US',
        },
        billing: {
          name: shippingData.lastName,
          city: shippingData.city,
          country: 'US',
          street: shippingData.address1,
          town_city: shippingData.city,
          state: shippingData.shippingState,
          county_state: shippingData.shippingState,
          postal_zip_code: shippingData.zip,
        },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      handleCaptureCheckout(checkoutToken.id, orderData);
      nextStep();
    }
  };

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography
        variant="h6"
        sx={{ textAlign: 'center' }}
        gutterBottom
        style={{ margin: '20px 0' }}
      >
        Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br /> <br />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                  onClick={backStep}
                  sx={{ borderRadius: '5px' }}
                  variant="outlined"
                >
                  Back
                </Button>
                <Button
                  sx={{ borderRadius: '5px' }}
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!stripe}
                >
                  Pay ${total}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};
