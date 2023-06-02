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
  const resistor_value = resistor.description
    .toString()
    .split(' ')
    .splice(1, 5);
  const resistor_color = resistor.description
    .toString()
    .split(' ')
    .splice(6, 5);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead sx={{ height: '25px' }}>
          <TableRow>
            <TableCell align="center">1st Band</TableCell>
            <TableCell align="center">2nd Band</TableCell>
            <TableCell align="center">3rd Band</TableCell>
            <TableCell align="center">Multiplier</TableCell>
            <TableCell align="center">Tolerance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            sx={{
              '&:last-child td, &:last-child th': {
                borderBottom: 0,
                height: 40,
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
                  {resistor_value[0]}
                </Typography>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    background: resistor_color[0],
                    borderRadius: 1,
                    ml: 0.5,
                  }}
                ></Box>
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
                <Typography variant="button" textAlign="center" component="div">
                  {resistor_value[1]}
                </Typography>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    background: resistor_color[1],
                    borderRadius: 1,
                    ml: 0.5,
                  }}
                ></Box>
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
                <Typography variant="button" textAlign="center" component="div">
                  {resistor_value[2]}
                </Typography>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    background: resistor_color[2],
                    borderRadius: 10,
                    ml: 0.5,
                  }}
                ></Box>
              </Box>
            </TableCell>
            <TableCell
              align="center"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography variant="button" textAlign="center" component="div">
                {resistor_value[3]}
              </Typography>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  background: resistor_color[3],
                  borderRadius: 10,
                  ml: 0.5,
                }}
              ></Box>
            </TableCell>
            <TableCell align="center">
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant="button" textAlign="center" component="div">
                  {resistor_value[4]}%
                </Typography>
                {/* <Box
                  sx={{
                    width: 10,
                    height: 10,
                    background: resistor_color[4],
                    borderRadius: 10,
                    ml: 0.5,
                  }}
                ></Box> */}
              </Box>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
