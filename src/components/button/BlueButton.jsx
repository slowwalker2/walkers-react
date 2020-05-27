import React from 'react';

export default function Component({ text, className, onClickEvent }) {
  return (
    <button
      class={`shadow bg-blue-800 hover:bg-yellow-700 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded mx-auto ${className}`}
      type='button'
      onClick={() => onClickEvent()}>
      {text}
    </button>
  );
}
