/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from 'react';
import { debounce } from 'lodash';
import axios from 'axios';

const useSearch = () => {
  const [searchValue, setSearchvalue] = useState('');
  const [searchingStatus, setSearchingStatus] = useState('');
  const [movie, setMovie] = useState({});

  const delayedQuery = useCallback(
    debounce((queryValue) => {
      axios
        .get(`http://www.omdbapi.com/?apikey=abb7e5a9&t=${queryValue}`)
        .then(function (response) {
          if (response.data.Error) {
            setSearchingStatus('notFound');
          } else {
            setMovie(response.data);
            setSearchingStatus('success');
          }
          setSearchvalue('');
        })
        .catch(function (error) {
          setSearchingStatus('error');
        });
    }, 1000),
    []
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchvalue(e.target.value);
    delayedQuery(e.target.value);
  };

  return {
    searchValue,
    searchingStatus,
    movie,
    handleSearch,
  };
};

export default useSearch;
