import React from 'react';
import styled from 'styled-components';

const Rating = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50px;
  line-height: 100%;
  color: ${({ theme }) => theme.color.bg};
  font-size: ${({ theme }) => theme.fontSize.desktop.m};
  text-align: center;
  position: absolute;
  left: -47px;
  top: -47px;
  background-color: ${({ theme }) => theme.color.red};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const ImageWrapper = styled.div`
  width: 400px;
  position: relative;

  @media (max-width: 700px) {
    width: 300px;
  }
`;

const ImageWrapped = ({ Poster, imdbRating }) => (
  <ImageWrapper>
    <Image src={Poster} />
    <Rating>
      <span>{imdbRating}</span>
    </Rating>
  </ImageWrapper>
);

export default ImageWrapped;
