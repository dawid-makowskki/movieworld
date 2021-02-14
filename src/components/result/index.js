import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImageWrapped from 'components/imageWrapped';
import MovieInfo from '../movieInfo';

const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 100vw;
  height: 700px;
  padding: 0 20% 0 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  @media (max-width: 1700px) {
    padding: 0 16% 0 15%;
  }
  @media (max-width: 1300px) {
    padding: 0 5% 0 5%;
  }
  @media (max-width: 1100px) {
    padding: 0;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: inherit;
  }
`;

const Result = ({ movie, route }) => {
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
          movie={movie}
          Title={Title}
          Year={Year}
          Genre={Genre}
          Director={Director}
          Writer={Writer}
          Country={Country}
          Plot={Plot}
          route={route}
        />
      </Wrapper>
    </CenterWrapper>
  );
};

Result.propTypes = {
  route: PropTypes.string.isRequired,
  movie: PropTypes.object.isRequired,
};

export default Result;
