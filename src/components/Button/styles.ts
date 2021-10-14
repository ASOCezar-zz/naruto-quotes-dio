import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  width: 200px;
  height: 50px;

  background-color: #dc872c;
  color: #fff;
  font-size: 1.5em;
  font-family: 'New Tegomin' serif;

  cursor: pointer;

  padding: 10 20px;
  box-shadow: #333 3px 3px;

  transition: all 0.3 linear;

  :active {
    transform: translateX(2px);
    box-shadow: #333 1px 1px;
  }

  :hover {
    background-color: #a40000;
  }
`;
