import React from 'react';

export default function Component({ text, className, onClickEvent }) {
  return (
    <button
      class={`shadow bg-teal-700 hover:bg-yellow-700 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded ${className}`}
      type='button'
      onClick={() => onClickEvent()}>
      {text}
    </button>
  );
}
