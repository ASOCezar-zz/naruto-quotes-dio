import styled from 'styled-components';
import bg from '../../assets/images/bg.jpeg';

export const Main = styled.main`
  height: 100vh;
  width: 100%;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-inline: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;
