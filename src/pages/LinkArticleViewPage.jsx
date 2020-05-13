import React from 'react';
import LinkArticleView from '../components/LinkArticleView'
export default function ArticleViewPage() {
  return (
    <div className="flex items-center">
    <div className="flex bg-white mx-auto w-11/12 sm:w-9/12 md:w-8/12 lg:w-2/3">
      <div class="rounded overflow-hidden py-16 w-full">
        <div class="font-black">
          <div class="text-3xl mb-3 text-left text-blue-800">게시물</div>
        </div>
          <LinkArticleView></LinkArticleView>
        
      </div>          
    </div>
  </div>
);
}