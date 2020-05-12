import React from 'react';

export default function SignInComponent() {
  return (
    <div class="w-full max-w-xs">
      <form class="w-full max-w-sm">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
              이메일
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="appearance-none border rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="inline-full-name" type="text" placeholder="your@address.com"/>
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
              비밀번호
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="appearance-none border rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="inline-username" type="password" placeholder="**********"/>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button class="shadow bg-yellow-500 hover:bg-yellow-600 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded" type="button">
              로그인
            </button>
          </div>
        </div>
      </form>
    </div>
);
}