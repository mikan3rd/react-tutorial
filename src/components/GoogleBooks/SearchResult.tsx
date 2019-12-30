import React from 'react';
import styled from 'styled-components';

import { VolumeList } from 'models/Volume';

export const SearchResult: React.FC<{ volumeList: VolumeList }> = ({ volumeList }) => {
  return (
    <ResultContent>
      <TotalNum>検索結果: {volumeList.totalItems}件</TotalNum>
      {volumeList.items.map(item => {
        const {
          id,
          volumeInfo: { title, canonicalVolumeLink },
        } = item;
        return (
          <VolumeWrapper key={id} href={canonicalVolumeLink} target='_blank'>
            <VolumeInfoTitle>{title}</VolumeInfoTitle>
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

const VolumeWrapper = styled.a`
  display: block;
  border: 1px solid;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
  color: black;
  text-decoration: none;
`;

const VolumeInfoTitle = styled.div`
  padding: 10px 0;
`;
