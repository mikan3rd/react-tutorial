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
          volumeInfo: {
            title,
            description,
            canonicalVolumeLink,
            imageLinks: { thumbnail },
          },
        } = item;
        return (
          <VolumeLink key={id} href={canonicalVolumeLink} target='_blank'>
            <VolumeWrapper>
              <Thumbnail src={thumbnail} />
              <RightContent>
                <VolumeInfoTitle>{title}</VolumeInfoTitle>
                <VolumeDescription>{description}</VolumeDescription>
              </RightContent>
            </VolumeWrapper>
          </VolumeLink>
        );
      })}
    </ResultContent>
  );
};

const ResultContent = styled.div`
  margin-top: 20px;
`;

const TotalNum = styled.div``;

const VolumeLink = styled.a`
  display: block;
  border: 1px solid;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
  color: black;
  text-decoration: none;
`;

const VolumeWrapper = styled.div`
  display: flex;
`;

const Thumbnail = styled.img`
  flex: none;
  width: 200px;
`;

const RightContent = styled.div`
  margin-left: 10px;
`;

const VolumeInfoTitle = styled.div`
  font-weight: bold;
`;

const VolumeDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: pre-wrap;
  margin-top: 10px;
`;
