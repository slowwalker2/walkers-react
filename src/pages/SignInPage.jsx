import React from 'react';
import SignIn from '../components/SignIn'
import Header from '../components/Header';

export default function SignInPage() {
  return (
  <div className="">
    <Header></Header>
    <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-10 bg-white">
      <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">로그인</div>
        <p class="text-gray-700 text-base">
          아직 회원이 아니면 <u>여기</u>를 클릭하세요.
        </p>
      </div>
      <div class="px-6 py-4">
        <SignIn></SignIn>
      </div>
    </div>        
  </div>
);
}