import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.aside`
  height: 100vh;
  width: 440px;
  background: linear-gradient(329.54deg, #3b89d3 0%, #c1ffda 100%);

  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    width: 300px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    height: 120px;
    padding: 24px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    height: 80px;
    align-items: center;
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #3b89d3;

  margin-bottom: 124px;

  @media (max-width: 768px) {
    margin: 0;

    > h1 {
      display: none;
    }
  }

  h1 {
    > span {
      color: #39d552;
    }
  }
`;

export const Img = styled.img`
  max-width: 190.5px;
  height: 72px;
  margin-right: 10px;

  @media (max-width: 768px) {
    height: 24px;
  }
`;

export const Text = styled.h2`
  font-size: 36px;
  font-weight: 800;
  line-height: 42px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Span = styled.p`
  font-weight: 300;
  line-height: 28px;
  margin-top: 24px;
  font-size: 18px;

  @media (max-width: 768px) {
    margin: 0;
    font-weight: bold;
  }
`;

export const Button = styled.button`
  width: 48px;
  height: 48px;

  border: 0;

  background: #39d552;
  border-radius: 16px;

  cursor: pointer;

  transition: background-color 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s;

  :hover {
    background: ${darken(0.1, '#39D552')};
  }
`;
