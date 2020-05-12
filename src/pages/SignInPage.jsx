import React from 'react';
import SignIn from '../components/SignIn'
export default function SignInPage() {
  return (
    <div className="flex items-center h-full">
    <div className="w-full h-full" style={{'background-image': 'url("https://patterncooler.com/gen/downloaded/jpg/_s_a12Cb104c12Cd104e0f0g64hF4D9CA23937F207A80275D76294468262E55iE9j39k64l1F4m1F4.jpg")', 
    'opacity': '0.3', 'position':'absolute', 'zIndex':'-1'}}></div>

    <div className="flex bg-white mx-auto shadow-lg w-11/12 sm:w-9/12 md:w-6/12 lg:w-1/3">
      <div class="text-center rounded overflow-hidden py-10 w-full">
        <div class="px-6">
          <div class="text-xl mb-2 text-left">시작하기</div>
        </div>
        <div class="px-6">
          <SignIn></SignIn>
        </div>
      </div>          
    </div>
    
  </div>
);
}