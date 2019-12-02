import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header>React Tutorial</Header>
        <Body>{children}</Body>
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

const Wrapper = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  color: #fff;
  background-color: #09d3ac;
  font-size: 20px;
  font-weight: bold;
  padding: 0 20px;
`;

const Body = styled.div``;
