import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

import { Container } from './styles';

const RegisterCompleted: React.FC = () => {
  return (
    <Container>
      <FiCheckCircle />
      <h1>Cadastro concluído!</h1>
    </Container>
  );
};

export default RegisterCompleted;
