import React, { useContext } from 'react';
import styled from 'styled-components';
import { WishlistContext } from 'hooks/useWishlist';
import { Heading } from 'components/heading';
import Button from 'components/button';
const Wrapper = styled.div`
  height: 100%;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 5%;
  @media (max-width: 700px) {
    height: 550px;
    width: 360px;
  }
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const StyledTitle = styled(Heading)`
  color: ${({ theme }) => theme.color.red};
`;
const StyledYear = styled(Heading)`
  color: ${({ theme }) => theme.color.lightGrey};
`;

const StyledP = styled.p`
  color: ${({ theme }) => theme.color.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.desktop.s};
`;
const Red = styled.span`
  color: ${({ theme }) => theme.color.red};
`;

const MovieInfo = ({
  Title,
  Year,
  Plot,
  Genre,
  Director,
  Writer,
  Country,
  movie,
  route,
}) => {
  const { addToWishlist, removeFromWishlist, wishlist } = useContext(
    WishlistContext
  );

  const handleClick = () => {
    if (route === 'search') {
      if (wishlist.some((wishlistItem) => wishlistItem.imdbID === movie.imdbID))
        return;
      addToWishlist(movie);
    }
    if (route === 'wishlist') {
      removeFromWishlist(movie);
    }
  };
  return (
    <Wrapper>
      <FlexColumn>
        <StyledTitle>{Title}</StyledTitle>
        <StyledYear>{Year}</StyledYear>
      </FlexColumn>

      <StyledP>{Plot}</StyledP>
      <FlexColumn>
        <StyledP>
          <Red>Genre:</Red> {Genre}
        </StyledP>
        <StyledP>
          <Red>Director:</Red> {Director}
        </StyledP>
        <StyledP>
          <Red>Country:</Red> {Country}
        </StyledP>
        <StyledP>
          <Red>Writer:</Red> {Writer}
        </StyledP>
      </FlexColumn>

      <Button type="button" onClick={handleClick}>
        {route === 'search' && 'Add to wishlist'}
        {route === 'wishlist' && 'Remove'}
      </Button>
    </Wrapper>
  );
};

export default MovieInfo;
