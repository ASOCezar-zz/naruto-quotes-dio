import styled from 'styled-components';

export const Wrapper = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Quote = styled.p`
  font-size: clamp(1.5em, 2em, 2.5em);
  margin: 0;
  max-height: 350px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
    background-color: #dc872c;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 4px;
  }
`;

export const Speaker = styled.p`
  text-align: right;
  margin-bottom: 50px;
  font-size: clamp(1.5em, 2em, 2.5em);
  margin: 0;
`;
