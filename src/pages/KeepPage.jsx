import React from 'react';
export default function KeepPage() {
  return (
  <div className="flex items-center">
    <div className="flex bg-white mx-auto w-11/12 sm:w-9/12 md:w-8/12 lg:w-2/3">
      <div class="rounded overflow-hidden py-16 w-full">
        <div class="font-black">
          <div class="text-3xl mb-3 text-left text-blue-800">Keep Url</div>
        </div>
        <div class="p-2">
          <form class="w-full">
            <div class="flex md:items-center mb-6 w-full">
              <div className="w-full">
                <input class="appearance-none border rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="inline-full-name" type="text" placeholder="https://"/>
              </div>
              <div className="w-24 ml-2">
                <button class="shadow bg-blue-800 hover:bg-yellow-700 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded" type="button">
                  +
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>          
    </div>
  </div>
);
}