import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
  const [ nftList, setNftList ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(0);

  useEffect(() => {
    axios.get(`/nfts?page=${currentPage}`)
      .then(res => {
        console.log(res.data);
        // setNftList(res.data);
      });

    return () => setNftList([]);
  }, [ currentPage ]);

  return <h1>hello from ListView</h1>
};