import React from 'react';
import styled from 'styled-components';
import { Heading } from 'components/heading';
import Result from 'components/result';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

const Results = ({ wishlist }) => (
  <Wrapper>
    {wishlist.map((wishlistItem) => (
      <Result
        key={wishlistItem.imdbID}
        movie={wishlistItem}
        route="wishlist"
      ></Result>
    ))}
  </Wrapper>
);

export default Results;
