import React from 'react';
import { FiArrowRightCircle, FiLogIn } from 'react-icons/fi';
import MeuBichinho from '../../assets/logo.svg';
import {
  Button,
  ButtonContainer,
  Container,
  Content,
  Description,
  Dev,
  Img,
  JoinButton,
  Logo,
  Title,
} from './styles';

export function LandingPage() {
  return (
    <Container>
      <div>
        <Logo>
          <Img src={MeuBichinho} alt="eWaste" />
          <Title>
            <span>e</span>Waste
          </Title>
        </Logo>
        <Content>
          <Description>
            Descarte seus eletrônicos de forma correta
          </Description>
        </Content>
        <JoinButton href="/map">
          Visitar <FiArrowRightCircle />
        </JoinButton>
      </div>
    </Container>
  );
}
