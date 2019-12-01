import React, { useState } from 'react';
import styled from 'styled-components';

export const Otameshi: React.FC = () => {
  const [text, changeText] = useState('');
  return (
    <Wrapper>
      <Body>
        <Title>Otameshi Component</Title>

        <TextArea placeholder='テキストを入力してね！' onChange={(event): void => changeText(event.target.value)} />

        <TextResult>{text}</TextResult>
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Body = styled.div``;

const Title = styled.h1`
  text-align: center;
`;

const TextArea = styled.textarea`
  display: block;
  margin: 0 auto;
  box-sizing: border-box;
  width: 200px;
`;

const TextResult = styled.p`
  width: 200px;
  padding: 10px;
  margin: 20px auto;
  border: 1px solid blue;
  white-space: pre-wrap;
  box-sizing: border-box;
`;
