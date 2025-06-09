import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Paper,
  CircularProgress,
  Button,
  Stack,
} from '@mui/material';

const DetalhesPostagem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
      <Stack spacing={2} mb={2}>
        <Button variant="contained" onClick={() => navigate(-1)}>
          Voltar
        </Button>
      </Stack>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          {postagem.title}
        </Typography>
        <Typography variant="body1" mb={2}>
          {postagem.body}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          ID do Post: {postagem.id}
        </Typography>
        <Typography variant="caption">ID do Usuário: {postagem.userId}</Typography>
      </Paper>
    </Container>
  );
};

export default DetalhesPostagem;
