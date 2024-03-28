'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PasswordShowIcon } from '../../_components/passwordShowIcon';
import { PasswordHideIcon } from '../../_components/passwordHideIcon';

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const startLogin = () => {
      //認証用APIに接続
      //成功の場合、HOME画面に遷移
  };

  const pushedShowIcon = () => {
    setShowPassword(!showPassword);
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
                <input
                 type="text"
                 className='bg-[#1E1F22] w-full h-[42px] rounded-lg px-2'
                 onChange={(e) => {setEmail(e.target.value)}}
                />
              </fieldset>
              <fieldset className='pb-5 relative'>
                <p className='text-[#B5BAC1] text-xs pb-1'>パスワード</p>
                <input
                 type={`${showPassword? 'text' : 'password'}`}
                 className='bg-[#1E1F22] w-full h-[42px] rounded-lg px-2'
                 onChange={(e) => {setPassword(e.target.value)}}
                />
                <button onClick={pushedShowIcon} type='button' className='absolute inset-y-0 right-0 flex items-center pr-3 pb-5'>
                  {showPassword? <PasswordHideIcon className='size-5' /> :<PasswordShowIcon className='size-5' /> }
                </button>
                <div className='flex justify-end'>
                  <Link href="#" className='text-[#1E90FF]'>パスワードをお忘れですか？</Link>
                </div>
              </fieldset>
              <fieldset>
                <button
                 type="button"
                 className='tracking-tighter bg-[#5865F2] w-full h-[45px] text-2xl font-mono rounded-lg'
                 onClick={startLogin}
                >
                  ログイン
                </button>
              </fieldset>
              <fieldset className='pt-4 pb-2'>
                <input type="radio" />
                <span className='text-sm'> 次回から自動でログイン</span>
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
