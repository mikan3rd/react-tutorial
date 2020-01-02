import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { SearchResult } from './SearchResult';

import { State } from 'reducers';
import { GoogleBooksActions } from 'actions/googleBooks';

export const GoogleBooks: React.FC = () => {
  const [searchString, changeSearchString] = useState('');

  const { volumeList } = useSelector((state: State) => ({ volumeList: state.googleBooks.volumeList }));

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Body>
        <Title>Google Books 検索</Title>

        <SearchForm>
          <Input placeholder='検索ワードを入力してね！' onChange={event => changeSearchString(event.target.value)} />
          <SearchButton
            onClick={event => {
              event.preventDefault();
              dispatch(GoogleBooksActions.getVolumes(searchString));
            }}
            disabled={!searchString}
          >
            検索
          </SearchButton>
        </SearchForm>
        {volumeList.kind && <SearchResult volumeList={volumeList} />}
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Body = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 250px;
  font-size: 18px;
  padding: 10px;
  outline: none;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const SearchButton = styled.button`
  color: #fff;
  background-color: #09d3ac;
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
  font-size: 18px;
  border: none;
  outline: none;
  transition: 0.4s;
  cursor: pointer;
  &:disabled {
    background-color: #bfbfbf;
    cursor: not-allowed;
  }
`;
