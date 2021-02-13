import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

export const WishlistContext = React.createContext({});

const WishlistProvider = ({ children }) => {
  const expireTime = new Date(2100);

  const [wishlist, setWishlist] = useState([]);
  const [cookie, setCookie] = useCookies(['wishlist']);

  useEffect(() => {
    wishlist?.length &&
      setCookie('wishlist', JSON.stringify(wishlist), expireTime);
  }, [wishlist]);

  useEffect(() => {
    cookie.wishlist?.length && setWishlist(cookie.wishlist);
  }, []);
  const addToWishlist = (item) => {
    setWishlist((wishlist) => [...wishlist, item]);
  };

  const removeFromWishlist = (movie) => {
    setWishlist((state) =>
      state.filter((filterItem) => filterItem.imdbID !== movie.imdbID)
    );
  };

  const contextPayload = {
    addToWishlist,
    removeFromWishlist,
    wishlist,
  };

  return (
    <WishlistContext.Provider value={contextPayload}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
