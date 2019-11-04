import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import logo from './logo.svg';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />

      <Wrapper>
        <Header>
          <Logo src={logo} className='App-logo' alt='logo' />
          <Text>
            Edit <CodeText>src/App.tsx</CodeText> and save to reload.
          </Text>
          <OfficialLink className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
            Learn React
          </OfficialLink>
        </Header>
      </Wrapper>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

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

const Text = styled.p``;

const CodeText = styled.code``;

export default App;
