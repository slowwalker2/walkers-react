import React from 'react';
import { StarRating } from './starRating';
import { Link } from 'react-router-dom';

export default function LinkArticleCardComponent({ data }) {
  return (
    <div class='max-w-sm w-full lg:max-w-full lg:flex'>
      <div
        class='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden border border-gray-400'
        style={{
          'background-image': "url('" + data.userdata.image + "')",
          opacity: '0.9',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
        title='Woman holding a mug'></div>
      <div class='border-r border-b border-l border-gray-400 w-full lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal z-10'>
        <div class='mb-8'>
          <div class='text-gray-900 font-bold text-xl mb-2'>
            <Link to={`/links/${data.id}`}>{data.userdata.title}</Link>
          </div>
          <p class='text-gray-700 text-base'>{data.userdata.description}</p>
        </div>
        <div class='flex items-center'>
          <img
            class='w-10 h-10 rounded-full mr-4'
            src='https://tailwindcss.com/img/jonathan.jpg'
            alt='Avatar of Jonathan Reinink'
          />
          <div class='text-sm'>
            <p class='text-gray-900 leading-none'>Jonathan Reinink</p>
            <p class='text-gray-600'>Aug 18</p>
          </div>
        </div>
        {data.rating && data.rating.length >= 1 ? (
          <div class='flex items-right'>
            <div class='text-sm'>
              <StarRating value={data.rating[0].value} editing={false} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
