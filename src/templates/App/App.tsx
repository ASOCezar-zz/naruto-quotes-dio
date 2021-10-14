import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './styles';
import Quotes from '../../components/Quotes';
import justsoSound from '../../assets/sounds/src_sounds_jutso.mp3';

import narutoImg from '../../assets/images/naruto.png';
import { loadQuotes } from '../../services/load-quotes';

const audio = new Audio(justsoSound);

function App() {
  const isMounted = useRef(true);
  const [response, setResponse] = useState<{ quote: string; speaker: string }>();

  async function load() {
    const quote = await loadQuotes();
    setResponse(quote);
  }

  useEffect(() => {
    if (isMounted) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
    //eslint-disable-next-line
  }, []);

  const handleClick = async () => {
    if (isMounted) {
      audio.play();
      load();
    }
  };

  return (
    <Styled.Main>
      <Quotes quotes={response?.quote} speaker={response?.speaker} handleClick={handleClick} />
      <Styled.NarutoImg src={narutoImg} alt="imagem do personagem naruto" />
    </Styled.Main>
  );
}

export default App;
