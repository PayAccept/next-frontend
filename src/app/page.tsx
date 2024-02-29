'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';

import Logo from '~/svg/payaccept-icon.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi - This is PayAccept - More you don't need! </title>
      </Head>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <Logo className='w-16' />
          <h1 className='mt-4'>PayAccept</h1>
          <p className='mt-2 text-sm text-gray-800'>
            Currently our website is undergoing an update. Please come back
            later.
          </p>
          <ButtonLink className='mt-6' href='/components' variant='dark'>
            Register for an Account
          </ButtonLink>
          <footer className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()}{' '}
            <UnderlineLink href='https://www.payaccept.net'>
              PayAccept
            </UnderlineLink>{' '}
            - A company of Mach5 A.G.
          </footer>
        </div>
      </section>
    </main>
  );
}
