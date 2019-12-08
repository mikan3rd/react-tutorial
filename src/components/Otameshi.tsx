import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const searchGoogleBooks = async (searchString: string) => {
  const url = 'https://www.googleapis.com/books/v1/volumes';
  const params = { q: searchString };
  try {
    const response = await axios.get(url, { params });
    return { isSuccess: true, data: response.data, error: null };
  } catch (error) {
    return { isSuccess: false, data: null, error };
  }
};

export const Otameshi: React.FC = () => {
  const [searchString, changeSearchString] = useState('');
  const [searchResult, changeSearchResult] = useState<any>(null);

  const handleOnSearchButton = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const result = await searchGoogleBooks(searchString);
    if (result.isSuccess) {
      changeSearchResult(result.data);
    } else {
      window.alert(String(result.error));
    }
  };

  return (
    <Wrapper>
      <Body>
        <Title>Google Books 検索</Title>

        <SearchForm>
          <Input placeholder='検索ワードを入力してね！' onChange={event => changeSearchString(event.target.value)} />
          <SearchButton onClick={event => handleOnSearchButton(event)}>検索</SearchButton>
        </SearchForm>

        {searchResult && (
          <ResultContent>
            {searchResult.items.map((item: any) => {
              return <ResultTitle key={item.id}>{item.volumeInfo.title}</ResultTitle>;
            })}
          </ResultContent>
        )}
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Body = styled.div``;

const Title = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  display: block;
  margin: 0 auto;
  box-sizing: border-box;
  width: 200px;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const SearchButton = styled.button``;

const ResultContent = styled.div`
  margin-top: 20px;
`;

const ResultTitle = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid;
  &:first-of-type {
    border-top: 1px solid;
  }
`;
