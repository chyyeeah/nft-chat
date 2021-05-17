import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListItem from './ListItem.jsx';

export default () => {
  const [ nftList, setNftList ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);

  useEffect(() => {
    axios.get(`/nfts?page=${currentPage}`)
      .then(res => {
        setNftList(res.data);
      })
      .catch(err => {
        console.error(err);
      });

    return () => setNftList([]);
  }, [ currentPage ]);

  return (
    <div>
      {
        nftList.length > 0
        ? nftList.map(nft => {
          return <ListItem
            key={nft.id}
            name={nft.name} />
        })
        : null
      }
    </div>
  )
};