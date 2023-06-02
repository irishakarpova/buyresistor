import { Typography, Box, CircularProgress, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Confirmation = ({ order }) => {
  return order.customer ? (
    <>
      <Box sx={{ py: 4 }}>
        <Typography variant="subtitle2" align="center">
          {order.customer.firstname}, thank you for your purchase!
        </Typography>

        <Typography variant="subtitle2" align="center">
          We sent you an email receipt.
        </Typography>
        {/* <Typography variant="subtitle2"> Order {order.ref}</Typography> */}
      </Box>
      {/* <Divider /> */}
      <br />
      <Button component={Link} to="/" variant="outlined" type="button">
        Back to Products
      </Button>
    </>
  ) : (
    <Box sx={{ display: 'flex', justifyContent: 'center', pt: 3 }}>
      <CircularProgress />
    </Box>
  );
};

export default Confirmation;
