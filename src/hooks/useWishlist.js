import React from 'react';
import { useCookies } from 'react-cookie';

export const WishlistContext = React.createContext({});

const WishlistProvider = ({ children }) => {
  const expireTime = new Date(2100);
  const [cookie, setCookie] = useCookies(['wishlist']);

  const { wishlist } = cookie;

  const addToWishlist = (item) => {
    setCookie(
      'wishlist',
      JSON.stringify((wishlist) => [...wishlist, item]),
      expireTime
    );
  };

  const removeFromWishlist = (movie) => {
    setCookie(
      'wishlist',
      JSON.stringify(
        cookie.filter((wishlistItem) => wishlistItem.imdbID === movie.imdbID),
        expireTime
      )
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
