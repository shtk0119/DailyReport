import Link from 'next/link';
import React, { useState } from 'react';

const Login = () => {

  const startLogin = () => {

  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-[#313338] h-[460px] w-[483px] text-white rounded-lg'>
        <div className='flex justify-center items-center px-10'>
          <form className='w-full'>
            <h1 className='tracking-tighter text-center font-mono text-4xl py-10'>ログイン</h1>
            <fieldset>
              <fieldset className='pb-5'>
                <p className='text-[#B5BAC1] text-xs pb-1'>メールアドレス</p>
                <input type="text" className='bg-[#1E1F22] w-full h-[42px] rounded-lg' />
              </fieldset>
              <fieldset className='pb-5'>
                <p className='text-[#B5BAC1] text-xs pb-1'>パスワード</p>
                <input type="text" className='bg-[#1E1F22] w-full h-[42px] rounded-lg' />
                <div className='flex justify-end'>
                  <Link href="#" className='text-[#1E90FF]'>パスワードをお忘れですか？</Link>
                </div>
              </fieldset>
              <fieldset>
                <button type="button" className='tracking-tighter bg-[#5865F2] w-full h-[45px] text-2xl font-mono rounded-lg'>
                  ログイン
                </button>
              </fieldset>
              <fieldset className='pt-4 pb-2'>
                <input type="radio" />
                <span className='text-sm'>  次回から自動でログイン</span>
              </fieldset>
              <fieldset>
                <Link href="/register" className='text-[#1E90FF] text-sm'>登録がまだの方はこちら</Link>
              </fieldset>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
