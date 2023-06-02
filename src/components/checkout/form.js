export const Form = () =>
  activeStep === 0 ? <AddressForm /> : <PaymentForm />;
