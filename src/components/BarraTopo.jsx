import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const BarraTopo = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Prova - Diogo
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default BarraTopo;
