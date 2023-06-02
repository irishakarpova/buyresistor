import React, { useState } from 'react';
import { AppBar, Chip, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { LinearProgress, Typography, Avatar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../logo.png';
import LogoCardsV from '../visa.png';
import LogoCardsA from '../amex.png';
import LogoCardsM from '../master.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { ContactUs } from './contactUs';
import { Hidden } from '@mui/material';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 10,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export const MainBar = ({ totalItems, loading }) => {
  const [state, setState] = useState(false);
  const toggleDrawer = () => (event) => {
    setState(false);
  };

  return (
    <>
      <ContactUs toggleDrawer={toggleDrawer} state={state} />
      <AppBar>
        <Box
          sx={{
            position: 'absolute',
            zIndex: 100,
            height: '4px',
            width: '100%',
            mt: '86px',
          }}
        >
          {loading && <LinearProgress />}
        </Box>
        <Toolbar
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
          disableGutters={true}
        >
          <Box display="flex" justifyContent="flex-start" alignItems="center">
            <Link to="/">
              <Box
                component="img"
                sx={{
                  height: 40,
                  '@media (min-width: 1060px)': {
                    height: 60,
                  },
                }}
                alt="Resistor logo"
                src={Logo}
              />
            </Link>
            <Hidden only={['xs', 'sm']}>
              <Box
                sx={{
                  mx: 3,
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <Typography
                  sx={{
                    lineHeight: '40px',
                    color: '#707070',
                    fontSize: '14px',
                  }}
                >
                  Payments:
                </Typography>
                <Avatar sx={{ ml: 1, width: 54 }} alt="Visa" src={LogoCardsV} />
                <Avatar
                  sx={{ ml: 2, width: 54, borderRadius: 0 }}
                  alt="Visa"
                  src={LogoCardsM}
                />
                <Avatar
                  sx={{ ml: 2, width: 54, borderRadius: 0 }}
                  alt="Visa"
                  src={LogoCardsA}
                />
              </Box>
            </Hidden>
            {/* <Hidden only={['xs', 'sm']}>
              <List
                sx={{
                  display: 'inline-flex',
                  justifyContent: 'space-start',
                  alignItems: 'center',
                  px: 3,
                }}
              >
                <ListItem>
                  <ListItemAvatar sx={{ minWidth: '30px' }}>
                    <Avatar
                      sx={{
                        width: 16,
                        height: 16,
                        background: 'rgb(253, 126, 151)',
                        fontSize: 20,
                      }}
                    >
                      <Box sx={{ fontSize: '12px' }}>1</Box>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    sx={{
                      color: 'rgb(253, 126, 151)',
                    }}
                    // primary="Payment"
                    secondary="Payments: "
                  />
                </ListItem>
                <Box
                  sx={{
                    width: '30px',
                    height: '1px',
                    background: 'rgb(253, 126, 151)',
                  }}
                ></Box>

                <ListItem>
                  <ListItemAvatar sx={{ minWidth: '30px' }}>
                    <Avatar
                      sx={{
                        width: 16,
                        height: 16,
                        background: 'rgb(253, 126, 151)',
                        fontSize: 20,
                      }}
                    >
                      <Box sx={{ fontSize: '12px' }}>2</Box>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText secondary="USPC for shipping." />
                </ListItem>
              </List>
            </Hidden> */}
            <Chip
              sx={{
                color: 'rgb(253, 126, 151)',
                borderColor: 'rgb(253, 126, 151)',
                ml: 3,
                p: 0,
              }}
              variant="outlined"
              label="Shipping only $3.80"
            />
          </Box>
          <Box>
            <Button
              sx={{ py: '5px' }}
              size="small"
              variant="contained"
              endIcon={<ContactSupportIcon />}
              onClick={() => setState(true)}
            >
              Buyer Help
            </Button>

            <IconButton
              sx={{ marginLeft: 2 }}
              component={Link}
              to="/cart"
              color="secondary"
              aria-label="add to shopping cart"
            >
              <StyledBadge badgeContent={totalItems} color="primary">
                <ShoppingCartIcon color="action" />
              </StyledBadge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
