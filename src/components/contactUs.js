import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Box,
  Grid,
  TextField,
  InputLabel,
  Input,
  Button,
  Drawer,
  ListItem,
  ListItemText,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const ContactUs = ({ toggleDrawer, state }) => {
  console.log(state);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <Drawer anchor={'right'} open={state} onClose={toggleDrawer()}>
      <ListItem sx={{ pt: 3, pl: 3 }}>
        <ListItemText
          sx={{ fontSize: '15px', color: '#41B6FF' }}
          primary="Contact Buyer"
        />
        <Button onClick={toggleDrawer()}>
          <CloseIcon />
        </Button>
      </ListItem>
      <Box
        sx={{
          mt: 9,
          p: 5,
        }}
      >
        <form ref={form} onSubmit={sendEmail}>
          <Grid container spacing={1}>
            <Grid item xs={12} sx={{ pb: 5 }}>
              <InputLabel required>Name</InputLabel>
              <Input fullWidth name="name" required />
            </Grid>
            <Grid item xs={12} sx={{ pb: 5 }}>
              <InputLabel required>Email</InputLabel>
              <Input fullWidth name="email" required />
            </Grid>
            <Grid item xs={12} sx={{ pb: 5 }}>
              <TextField
                multiline={true}
                rows={4}
                fullWidth
                name="message"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                sx={{ width: '100%' }}
                type="submit"
                variant="contained"
                value="Send"
              >
                SEND
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Drawer>
  );
};
