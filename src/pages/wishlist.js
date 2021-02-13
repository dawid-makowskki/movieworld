import React, { useContext } from 'react';
import styled from 'styled-components';
import { WishlistContext } from 'hooks/useWishlist';
import { LargeHeading, Heading } from 'components/heading';
import { Link } from 'react-router-dom';
import Results from 'components/results';

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

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.color.bg};
  background-color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.fontSize.desktop.s};
  border-radius: 25px;
  padding: 20px 40px;
  text-decoration: none;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: transform 100ms ease-in;
  @media (max-width: 700px) {
    font-size: ${({ theme }) => theme.fontSize.mobile.s};
    padding: 10px 20px;
    border-radius: 15px;
  }
`;

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);
  return (
    <Wrapper>
      <NavLink to="/">Search</NavLink>
      <Hero>
        <header>
          <LargeHeading h1>Your Wishlist</LargeHeading>
          <Heading>There are some movies you like</Heading>
        </header>
      </Hero>
      {wishlist.length > 0 && <Results wishlist={wishlist}></Results>}
      {wishlist.length === 0 && <Heading>Add some movies first</Heading>}
    </Wrapper>
  );
};

export default Wishlist;
