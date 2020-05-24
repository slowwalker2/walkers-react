import React, { useState, useEffect } from 'react';
import LinkArticleCard from './LinkArticleCard';
import axios from 'axios';

export default function LinkArticleCardsComponent() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_JETS_URI}/user_links`, {})
      .then((results) => {
        setLinks(results.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div class='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-4'>
      {links.map((link) => (
        <LinkArticleCard data={link}></LinkArticleCard>
      ))}
    </div>
  );
}
