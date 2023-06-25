import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.dark,
}));


export default function Home() {

  return (
    <Box>
        <Grid container sx={{ flexGrow: 1 }}>

        <Grid sx={{ flexGrow: 1 }}>
            <Typography sx={{ flexGrow: 1 }} variant='h1' color='primary'>
                Home Page
            </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item className='bg-color-blue'>xs=6 md=4</Item>
        </Grid>
        <Grid >
           <Button variant="outlined" color="primary">Login</Button>
        </Grid>
      </Grid>
    </Box>
  )
}



