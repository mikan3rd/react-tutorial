import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Path } from 'routes';

export const App: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <Logo src='/logo.svg' className='App-logo' alt='logo' />
        <Text>
          Edit <CodeText>src/App.tsx</CodeText> and save to reload.
        </Text>
        <OfficialLink className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </OfficialLink>
        <OtameshiLink to={Path.otameshi}>おためしページへのリンク</OtameshiLink>
      </Header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Logo = styled.img`
  height: 40vmin;
`;

const OfficialLink = styled.a`
  color: #09d3ac;
`;

const OtameshiLink = styled(Link)`
  color: #fff;
  margin-top: 30px;
`;

const Text = styled.p``;

const CodeText = styled.code``;
