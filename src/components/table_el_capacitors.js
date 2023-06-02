import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Description({ resistor }) {
  const resistor_value = resistor.description.toString().split('').splice(3, 3);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Voltage</TableCell>
            <TableCell align="center">Shape</TableCell>
            <TableCell align="center">Material</TableCell>
            <TableCell align="center">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            sx={{
              '&:last-child td, &:last-child th': {
                borderBottom: 0,
                height: 47,
              },
            }}
          >
            <TableCell align="center">
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant="button" textAlign="center" component="div">
                  {resistor_value}
                </Typography>
              </Box>
            </TableCell>

            <TableCell align="center">
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{ fontSize: '12px', fontWeight: 500 }}
                  textAlign="center"
                  component="div"
                >
                  Round
                </Typography>
              </Box>
            </TableCell>
            <TableCell align="center">
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{ fontSize: '12px', fontWeight: 500 }}
                  textAlign="center"
                  component="div"
                >
                  Aluminum
                </Typography>
              </Box>
            </TableCell>
            <TableCell align="center">
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{ fontSize: '12px', fontWeight: 500 }}
                  textAlign="center"
                  component="div"
                >
                  1 item
                </Typography>
              </Box>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
