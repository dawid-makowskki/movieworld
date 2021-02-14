/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export const WishlistContext = React.createContext({});

const WishlistProvider = ({ children }) => {
  const expireTime = new Date(2100);

  const [cookie, setCookie, removeCookie] = useCookies();
  const [wishlist, setWishlist] = useState([]);

  const cookieOptions = {
    path: '/',
    expires: expireTime,
    maxAge: 262800000,
    domain: 'localhost',
    secure: false,
    httpOnly: false,
    sameSite: true,
  };

  useEffect(() => {
    if (Object.entries(cookie).length > 0) {
      setWishlist(Object.values(cookie));
    }
  }, [cookie]);

  const addToWishlist = (movie) => {
    setCookie(`${movie.imdbID}`, movie, cookieOptions);
  };

  const removeFromWishlist = (movie) => {
    removeCookie(movie.imdbID);
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
