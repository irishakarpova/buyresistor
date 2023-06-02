import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function ProductInCard({
  product,
  handleUpdateCartQty,
  handleRemoveFromCart,
}) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        mt: 2,
        mr: 0,
        maxWidth: 550,
        background: '#F8F8F8',
        boxShadow: 'none',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 50,
            padding: 1,
          }}
          image={product.image.url}
          title="resistor"
        />

        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{ fontWeight: 600, lineHeight: 2 }}
            component="div"
            variant="subtitle1"
          >
            Metal Film Resistor: {product.name} (Pack of 10)
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Typography variant="subtitle2" component="div">
              Quantity: {product.quantity} packs
            </Typography>
            <ButtonGroup>
              <Button
                sx={{
                  padding: '1px',
                  ml: 3,
                }}
                aria-label="reduce"
                onClick={() =>
                  handleUpdateCartQty(product.id, product.quantity - 1)
                }
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                onClick={() =>
                  handleUpdateCartQty(product.id, product.quantity + 1)
                }
                sx={{
                  padding: '1px',
                }}
                aria-label="increase"
              >
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </Box>

          <Typography variant="subtitle2" component="div">
            Total: ${product.line_total.raw}
          </Typography>
        </CardContent>
      </Box>
      <Divider orientation="vertical" flexItem>
        <Button
          onClick={() => handleRemoveFromCart(product.id)}
          sx={{
            minWidth: '25px',
            padding: '1px',
            borderRadius: '5px',
          }}
          variant="outlined"
          color="secondary"
        >
          <DeleteIcon color="action" />
        </Button>
      </Divider>
    </Card>
  );
}
