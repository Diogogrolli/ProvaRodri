import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const BarraTopo = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Prova - Diogo, Professor - Rodrigo, Terça Feira 10/06.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default BarraTopo;
