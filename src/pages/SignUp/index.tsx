import React from 'react';
import {FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './style';
import logo from '../../assets/logo.svg';

const SignUp: React.FC = () => (
  <Container>
    <Background />

    <Content>
      <img src={logo} alt="GoBarber"/>

      <form>
        <h1>Faça seu cadastro</h1>

        <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
        <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
        <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="ddd">
        <FiArrowLeft/>
        Voltar para login
      </a>
    </Content>
  </Container>
);

export default SignUp;
