import React from 'react';

import { Container } from '../../styles/GlobalStyles';

import { Title, Paragraph } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isGray={false}>
        Login <small>Olá</small>
      </Title>
      <Paragraph>Bla bla bla bla bla bla</Paragraph>
    </Container>
  );
}
