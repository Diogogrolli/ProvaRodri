import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CircularProgress,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ListaPostagens = () => {
  const [posts, setPosts] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {  // começa vazio, só 
    fetch('https://jsonplaceholder.typicode.com/posts') // É uma requesição HTTP do tipo GET
      .then(res => res.json()) //converte a resposta para JSON e armazena
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
      <Typography variant="h4" gutterBottom>
        Lista de Postagens
      </Typography>
      <Grid container spacing={3}>
        {posts.map(post => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card>
              <CardActionArea onClick={() => navigate(`/dados/${post.id}`)}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {post.body}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ListaPostagens;
