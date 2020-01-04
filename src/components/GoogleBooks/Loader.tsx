import React from 'react';
import styled from 'styled-components';

export const Loader: React.FC<{ isSearching: boolean }> = ({ isSearching }) => {
  return (
    <Wrapper isSearching={isSearching}>
      <LoaderWrpper />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isSearching: boolean }>`
  transition: all 1s;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: ${props => (props.isSearching ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  background-color: gray;
  opacity: 0.7;
  color: #fff;
  font-size: 32px;
`;

const LoaderWrpper = styled.div`
  /* https://projects.lukehaas.me/css-loaders/ */
  position: relative;
  color: #ffffff;
  font-size: 11px;
  text-indent: -99999em;
  margin: 55px auto;
  position: relative;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em;
  transform: translateZ(0);

  &,
  &:before,
  &:after {
    border-radius: 50%;
  }
  &:before,
  &:after {
    position: absolute;
    content: '';
  }
  &:before {
    width: 5.2em;
    height: 10.2em;
    background: gray;
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    transform-origin: 5.1em 5.1em;
    animation: load2 2s infinite ease 1.5s;
  }
  &:after {
    width: 5.2em;
    height: 10.2em;
    background: gray;
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 4.9em;
    transform-origin: 0.1em 5.1em;
    animation: load2 2s infinite ease;
  }
  @-webkit-keyframes load2 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes load2 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
