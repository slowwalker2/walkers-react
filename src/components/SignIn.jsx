import React from 'react';
import { BlueButton, GreenButton } from './button';

export default function SignInComponent() {
  return (
    <div class='w-full'>
      <form class='w-full'>
        <div class='md:items-center mb-6 w-full'>
          <div className='w-full'>
            <label class='block text-left mb-1 md:mb-0 pr-4' for='inline-full-name'>
              Email
            </label>
          </div>
          <div>
            <input
              class='appearance-none border rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500'
              id='inline-full-name'
              type='text'
              placeholder='your@address.com'
            />
          </div>
        </div>
        <div class='md:items-center mb-6'>
          <div>
            <label class='block text-left right mb-1 md:mb-0 pr-4' for='inline-username'>
              Password
            </label>
          </div>
          <div>
            <input
              class='appearance-none border rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500'
              id='inline-username'
              type='password'
              placeholder='**********'
            />
          </div>
        </div>
        <div class='sm:flex justify-center'>
          <div class='text-center'>
            <GreenButton text='Sign up' onClickEvent={() => {}} />
          </div>
          <div class='text-center my-2 mx-4'>or</div>
          <div class='text-center'>
            <BlueButton text='Sign in' onClickEvent={() => {}} />
          </div>
        </div>
      </form>
    </div>
  );
}
