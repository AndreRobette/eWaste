import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(155.85deg, #F44A87 45.83%, #FFB930 100%);
`;

export const Main = styled.main`
  flex: 1;
`;

export const Details = styled.div`
  width: 700px;
  margin: 64px auto;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  overflow: hidden;

  > img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

export const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(6 ,1fr);
  column-gap: 16px;

  margin: 16px 40px 0;
`;

export const Button = styled.button`
  border: 0;
  height: 88px;
  background: none;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  outline: none;

  opacity: 0.6;

  :active {
    opacity: 1;
  }

  > img {
    width: 100%;
    height: 88px;
    object-fit: cover;
  }
`;

export const DetailsContent = styled.div`
  padding: 80px;

  > h1 {
    color: #4d6f80;
    font-size: 54px;
    line-height: 54px;
    margin-bottom: 8px;
  }

  > p {
    line-height: 28px;
    color: #5c8599;
    margin-top: 24px;
  }
`;

export const MapContainerDiv = styled.div`
  margin-top: 64px;
  background: #e6f7fb;
  border: 1px solid #b3dae2;
  border-radius: 20px;

  .leaflet-container {
    border-bottom: 1px solid #dde3f0;
    border-radius: 20px;
  }
`;

export const Footer = styled.footer`
  padding: 20px 0;
  text-align: center;

  > a {
    line-height: 24px;
    color: #0089a5;
    text-decoration: none;
  }
`;