import React from 'react'
import Link from 'next/link'
import Nav from './Nav';
import { Button } from './ui/button';
import MobileNav from './MobileNav';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title = "Portfolio"}) => {
  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/' legacyBehavior>
          <h1 className='text-4xl font-semibold'>
            Portfolio <span className='text-accent'>.</span>
          </h1>
        </Link>

        <div className='hidden xl:flex items-center gap-8'>
          <Nav />
          <Link href='contact'>
            <Button>Hire me</Button>
          </Link>
        </div>

        <div className='xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
