import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    // console.log('hi');
    try {
      const response = await yelp.get('/search', {
        params: {
          // /search&limit=50'
          limit: 50,
          term: searchTerm,
          location: 'paris'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  // call searchAPI when component fisrt rendered
  // searchApi('pasta');
  useEffect(() => {
    searchApi('pizza');
  }, []); // [] means run ONE time

  return [searchApi, results, errorMessage];
};
