import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { Text, Container, Img, Span, Button, LogoDiv } from './styles';

export function MapSidebar() {
  const { goBack } = useHistory();

  return (
    <Container>
      <div>
        <LogoDiv>
          <Img src={Logo} alt="eWaste" /> <h1> <span>e</span>Waste</h1>
        </LogoDiv>
        <Text>Dê uma explorada no mapa de Chapecó</Text>
        <Span>Encontre o ponto de coleta mais proximo de você</Span>
      </div>
      <Button type="button" onClick={goBack}>
        <FiArrowLeft size={24} color="rgba(255,255,255,0.7)" />
      </Button>
    </Container>
  );
}
