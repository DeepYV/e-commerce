import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
function Layout({children}) {
  return (
    <>
      <Head>
        <title>Next.js Ecommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex min-h-screen flex-col justify-between'>
        <header> 
          <nav className='flex h-12 justify-between shadow-md p-4 uppercase font-semibold '>
            <Link href='/'>Ecommerce</Link>
            <div className='flex space-x-4 font-bold '>
              <Link href='/cart'>cart</Link>
              <Link href='/login'>login</Link>
            </div>
          </nav>
          </header>
        <main className='container m-auto mt-4 px-4'> {children}</main>
        <footer className='flex h-20 justify-center items-center shadow-inner p-4 font-bold '>
          <p>
            Copyright &copy; {new Date().getFullYear()} Ecommerce
          </p>
        </footer>
    </div>
    </>
  )
}

export default Layout