import React from 'react'
import Link from 'next/link.js'
import HamburgerMenu from './Hamburger.js'

const Index = () => {
  return (
    <div className='flex justify-between px-4 lg:px-[3rem]'>
      <div className="relative w-48 h-24 cursor-pointer mt-8">
        <a href="/">
          <img
            src={"https://braininventory.s3.us-east-2.amazonaws.com/images/Logobg.png"}
            className="cursor-pointer"
            alt="it service company offers web and app design and development"
            layout="fill"
            width="204px"
            height="60px"
          />
        </a>
      </div>
      <div className="w-full hidden lg:flex justify-end items-center -mt-4">
        {/* <Link href="/"><div className="hover:border-b-2 hover:border-white font-Satoshi font-thin uppercase px-8">Home</div></Link>
        <Link href="/projects"><div className="hover:border-b-2 hover:border-white font-Satoshi font-thin uppercase px-8">Projects</div></Link>
        <Link href="/career"><a><div className="hover:border-b-2 hover:border-white font-Satoshi font-thin uppercase px-8 cursor-pointer">Career</div></a></Link>
        <Link href="/contact"><div className="hover:border-b-2 hover:border-white font-Satoshi font-thin uppercase px-8 cursor-pointer">Contacts</div></Link>
        <Link href="/blog"><div className="hover:border-b-2 hover:border-white font-Satoshi font-thin uppercase px-8 cursor-pointer">Blog</div></Link> */}
      </div>
      <div className="mt-12 lg:hidden">
        <HamburgerMenu />
      </div>
    </div>
  )
}

export default Index