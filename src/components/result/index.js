import React from 'react';
import styled from 'styled-components';
import ImageWrapped from 'components/imageWrapped';
import MovieInfo from '../movieInfo';

const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 100vw;
  height: 600px;
  padding: 0 25% 0 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1700px) {
    padding: 0 10% 0 10%;
  }
  @media (max-width: 1300px) {
    padding: 0 5% 0 5%;
  }
  @media (max-width: 700px) {
    padding: 0;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: inherit;
  }
`;

const Result = ({ movie }) => {
  const {
    Poster,
    imdbRating,
    Title,
    Year,
    Genre,
    Director,
    Writer,
    Country,
    Plot,
  } = movie;

  return (
    <CenterWrapper>
      <Wrapper>
        <ImageWrapped Poster={Poster} imdbRating={imdbRating} />
        <MovieInfo
          Title={Title}
          Year={Year}
          Genre={Genre}
          Director={Director}
          Writer={Writer}
          Country={Country}
          Plot={Plot}
        />
      </Wrapper>
    </CenterWrapper>
  );
};

export default Result;
