import React from 'react';
import styled from 'styled-components';

import { VolumeList } from 'models/Volume';

export const SearchResult: React.FC<{ volumeList: VolumeList }> = ({ volumeList }) => {
  return (
    <ResultContent>
      <TotalNum>検索結果: {volumeList.totalItems}件</TotalNum>
      {volumeList.items.map(item => {
        return (
          <VolumeWrapper key={item.id}>
            <VolumeInfoTitle>{item.volumeInfo.title}</VolumeInfoTitle>
          </VolumeWrapper>
        );
      })}
    </ResultContent>
  );
};

const ResultContent = styled.div`
  margin-top: 20px;
`;

const TotalNum = styled.div``;

const VolumeWrapper = styled.div`
  border: 1px solid;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
`;

const VolumeInfoTitle = styled.div`
  padding: 10px 0;
`;
