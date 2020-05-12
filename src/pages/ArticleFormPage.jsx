import React from 'react';
import ArticleForm from '../components/ArticleForm'
export default function SignInPage() {
  return (
    <div className="flex items-center">
    <div className="flex bg-white mx-auto w-11/12 sm:w-9/12 md:w-8/12 lg:w-2/3">
      <div class="rounded overflow-hidden py-16 w-full">
        <div class="font-black">
          <div class="text-3xl mb-3 text-left text-blue-800">새 글쓰기</div>
        </div>
        <div class="">
          <ArticleForm></ArticleForm>
        </div>
      </div>          
    </div>
  </div>
);
}