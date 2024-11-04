import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragraph } from './styled';

import axios from '../../services/axios';

export default function Login() {
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      const { data } = response;
      console.log(data);
    }

    getData();
  }, []);
  return (
    <Container>
      <Title isGray={false}>
        Login <small>Olá</small>
      </Title>
      <Paragraph>Bla bla bla bla bla bla</Paragraph>
      <button type="button">Enviar</button>
    </Container>
  );
}
