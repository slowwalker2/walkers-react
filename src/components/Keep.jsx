import React, { useState, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import axios from 'axios';

export default function Keep() {
  const { addToast } = useToasts();
  const [link, setLink] = useState('');

  useEffect(() => {}, []);

  const addLink = () => {
    if (invalid()) {
      warnPopup('Url is required.');
      return;
    }
    axios
      .post(`${process.env.REACT_APP_JETS_URI}/user_links`, {
        user_link: { url: link },
      })
      .then((results) => {
        successPopup('Saved.');
        setLink('');
      })
      .catch((e) => {
        errorPopup('Failed');
      });
  };

  const invalid = () => {
    return link === null || link.trim().length === 0;
  };

  const successPopup = (message) => {
    addToast(message, {
      appearance: 'success',
      transitionDuration: 0,
      autoDismissTimeout: 2000,
      autoDismiss: true,
    });
  };

  const errorPopup = (message) => {
    addToast(message, {
      appearance: 'error',
      transitionDuration: 0,
      autoDismissTimeout: 2000,
      autoDismiss: true,
    });
  };

  const warnPopup = (message) => {
    addToast(message, {
      appearance: 'warning',
      transitionDuration: 0,
      autoDismissTimeout: 2000,
      autoDismiss: true,
    });
  };

  return (
    <div class='flex md:items-center mb-6 w-full'>
      <div className='w-full'>
        <input
          class='appearance-none border rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500'
          id='url'
          type='text'
          placeholder='https://'
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              addLink();
            }
          }}
        />
      </div>
      <div className='w-24 ml-2'>
        <button
          class='shadow bg-blue-800 hover:bg-yellow-700 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded'
          type='button'
          onClick={() => addLink()}
          disabled={false}>
          +
        </button>
      </div>
    </div>
  );
}
