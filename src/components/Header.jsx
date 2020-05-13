import React from 'react';
import { Link } from 'react-router-dom';
export default function HeaderComponent() {
  const menuClick = () => {
    document.getElementById('menu').classList.toggle('hidden');
  };
  return (
    <nav className='flex items-center justify-between flex-wrap bg-blue-900 p-1 fixed top-0 inset-x-0 z-50'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <svg
          className='fill-current h-8 w-8 mr-2'
          width='54'
          height='54'
          viewBox='0 0 54 54'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z' />
        </svg>
        <span className='font-semibold text-xl tracking-tight'>4terminal</span>
      </div>
      <div className='block sm:hidden'>
        <button
          onClick={() => menuClick()}
          className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div
        id='menu'
        className='w-full block flex-grow sm:flex sm:items-center sm:w-auto sm:block hidden'>
        <div className='text-sm sm:flex-grow'>
          <Link
            to='/keep'
            className='block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4'>
            Keep
          </Link>
          <Link
            to='/read'
            className='block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4'>
            Read
          </Link>
          <Link
            to='/trend'
            className='block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4'>
            Trend
          </Link>
          <Link
            to='/new'
            className='block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white'>
            Post
          </Link>
        </div>
        <div>
          <Link
            to='/signin'
            className='inline-block text-sm px-4 py-2 mx-2 leading-none border rounded border-transparent text-white bg-blue-800 hover:bg-yellow-700 mt-4 sm:mt-0'>
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
}
