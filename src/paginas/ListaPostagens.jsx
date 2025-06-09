import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItemButton, ListItemText, CircularProgress } from '@mui/material';

const ListaPostagens = () => {
  const [posts, setPosts] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return (
      <Container sx={{ mt: 4, textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Lista de Postagens</Typography>
      <List>
        {posts.map(post => (
          <ListItemButton
            key={post.id}
            onClick={() => window.open(`/dados/${post.id}`, '_blank')}
          >
            <ListItemText primary={post.title} />
          </ListItemButton>
        ))}
      </List>
    </Container>
  );
};

export default ListaPostagens;
