import React from 'react';

import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Page404() {
  return (
    <Container>
      <Title>404</Title>
      <Paragraph>PAGE NOT FOUND</Paragraph>
    </Container>
  );
}
