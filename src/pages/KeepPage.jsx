import React, { useState, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import axios from 'axios';

export default function KeepPage() {
  const { addToast } = useToasts();
  const [link, setLink] = useState('');

  useEffect(() => {}, []);

  const addLink = () => {
    axios
      .post(`${process.env.REACT_APP_JETS_URI}/user_links`, {
        user_link: { url: document.getElementById('url').value },
      })
      .then((results) => {
        addToast('Saved.', {
          appearance: 'success',
          transitionDuration: 0,
          autoDismissTimeout: 2000,
          autoDismiss: true,
        });
        setLink('');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className='flex items-center'>
      <div className='flex bg-white mx-auto w-11/12 sm:w-9/12 md:w-8/12 lg:w-2/3'>
        <div class='rounded overflow-hidden py-16 w-full'>
          <div class='font-black'>
            <div class='text-3xl mb-3 text-left text-blue-800'>Keep</div>
          </div>
          <div class='p-2'>
            <form class='w-full'>
              <div class='flex md:items-center mb-6 w-full'>
                <div className='w-full'>
                  <input
                    class='appearance-none border rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500'
                    id='url'
                    type='text'
                    placeholder='https://'
                    value={link}
                    onChange={(e) => setLink(e.value)}
                  />
                </div>
                <div className='w-24 ml-2'>
                  <button
                    class='shadow bg-blue-800 hover:bg-yellow-700 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded'
                    type='button'
                    onClick={() => addLink()}>
                    +
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
