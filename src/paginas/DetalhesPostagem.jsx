import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Paper, CircularProgress } from '@mui/material';

const DetalhesPostagem = () => {
  const { id } = useParams();
  const [postagem, setPostagem] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setPostagem(data);
        setCarregando(false);
      });
  }, [id]);

  if (carregando) {
    return (
      <Container sx={{ mt: 4, textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h4">{postagem.title}</Typography>
        <Typography variant="body1" mt={2}>{postagem.body}</Typography>
        <Typography variant="caption" display="block" mt={2}>ID do Post: {postagem.id}</Typography>
        <Typography variant="caption">ID do Usuário: {postagem.userId}</Typography>
      </Paper>
    </Container>
  );
};

export default DetalhesPostagem;
