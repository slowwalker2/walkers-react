import React from 'react';

export default function SignInComponent() {
  return (
    <div class="w-full">
      <form class="w-full">
        <div class="md:items-center mb-6 w-full">
          <div className="w-full">
            <label class="block text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
              이메일
            </label>
          </div>
          <div>
            <input class="appearance-none border rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="inline-full-name" type="text" placeholder="your@address.com"/>
          </div>
        </div>
        <div class="md:items-center mb-6">
          <div>
            <label class="block text-left right mb-1 md:mb-0 pr-4" for="inline-username">
              비밀번호
            </label>
          </div>
          <div>
            <input class="appearance-none border rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="inline-username" type="password" placeholder="**********"/>
          </div>
        </div>
        <div class="sm:flex justify-center">
          <div class="text-center">
            <button class="shadow bg-teal-700 hover:bg-yellow-700 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded" type="button">
              회원가입
            </button>
          </div>
          <div class="text-center my-2 mx-4">
            또는
          </div>
          <div class="text-center">
            <button class="shadow bg-blue-800 hover:bg-yellow-700 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded" type="button">
              로그인
            </button>
          </div>
        </div>
      </form>
    </div>
);
}