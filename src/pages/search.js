import React from 'react';
import styled from 'styled-components';
import useSearch from 'hooks/useSearch';
import { Link } from 'react-router-dom';

import { LargeHeading, Heading } from 'components/heading';
import SearchInput from 'components/searchInput';
import Error from 'components/error';
import Result from 'components/result';

const Wrapper = styled.div`
  width: 100vw;
`;
const Hero = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const InputWrapper = styled.div`
  height: 300px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.color.red};
  text-decoration: none;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: ${({ theme }) => theme.fontSize.desktop.m};
  transition: transform 100ms ease-in;

  @media (max-width: 700px) {
    font-size: ${({ theme }) => theme.fontSize.mobile.m};
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Search = () => {
  const { movie, searchValue, searchingStatus, handleSearch } = useSearch();

  return (
    <Wrapper>
      <NavLink to="/wishlist">Wishlist</NavLink>
      <Hero>
        <header>
          <LargeHeading h1>Movieworld</LargeHeading>
          <Heading>Search movies you like to watch</Heading>
        </header>
        <InputWrapper>
          <SearchInput
            value={searchValue}
            onChange={handleSearch}
            placeholder="Szukaj filmu"
          />
          {searchingStatus === 'notFound' && <Error>Movie not found</Error>}
          {searchingStatus === 'error' && <Error>Problem with request</Error>}
        </InputWrapper>
      </Hero>
      {searchingStatus === 'success' && <Result movie={movie} />}
    </Wrapper>
  );
};

export default Search;
