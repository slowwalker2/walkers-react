import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LinkArticleView from '../components/LinkArticleView';
import { useRouteMatch } from 'react-router-dom';
export default function ArticleViewPage() {
  const [link, setLink] = useState(null);
  const {
    params: { id },
  } = useRouteMatch({
    path: '/links/:id',
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_JETS_URI}/links/${id}`, {})
      .then((results) => {
        setLink(results.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  return (
    <div className='flex items-center'>
      <div className='flex bg-white mx-auto w-11/12 sm:w-9/12 md:w-8/12 lg:w-2/3'>
        <div class='rounded overflow-hidden py-16 w-full'>
          <div class='font-black'>
            <div class='text-3xl mb-3 text-left text-blue-800'>게시물</div>
          </div>
          <div class='p-2'>{link && <LinkArticleView data={link}></LinkArticleView>}</div>
        </div>
      </div>
    </div>
  );
}
