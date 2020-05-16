import React from 'react';
import Editor from './Editor';

export default function ArticleFormComponent() {
  return (
    <form class='w-full max-w-wide'>
      <div class='flex flex-wrap mb-2 sm:mb-0'>
        <div class='w-full mb-1 sm:mb-0'>
          <input
            class='appearance-none text-2xl block w-full border py-3 px-3 mb-2 sm:mb-1 leading-tight focus:outline-none focus:bg-white'
            id='grid-first-name'
            type='text'
            placeholder='제목을 입력하세요'
          />
        </div>
      </div>
      <div class='flex flex-wrap mb-2'>
        <div class='w-full md:w-1/1 mb-6 md:mb-0 md:block sm:hidden hidden'>
          <Editor></Editor>
        </div>
        <div class='w-full md:w-1/1 mb-6 md:mb-0 md:hidden sm:block'>
          <Editor previewStyle='horizon'></Editor>
        </div>
      </div>
      <div class='flex flex-wrap mb-2'>
        <button class="shadow bg-blue-800 hover:bg-yellow-700 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded mx-auto" type="button">
          작성하기
        </button>
      </div>
    </form>
  );
}
