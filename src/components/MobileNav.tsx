'use client'

import Link from "next/link";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from 'react-icons/ci'
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  path: string;
}

const MobileNav: React.FC = () => {

  const link: NavLink[] = [
    { name: 'home', path: '/' },
    { name: 'services', path: '/services' },
    { name: 'resume', path: '/resume' },
    { name: 'work', path: '/work' },
    { name: 'contact', path: '/contact' },
  ]

  const pathname = usePathname();
  
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle>
          <div className="mt-32 mb-40 text-center text-2x">
            <Link href="/">
              <h1 className="text-4xl font-semibold text-white">
                Portfolio<span className="text-accent">.</span>
              </h1>
            </Link>
          </div>

          <nav className="flex flex-col justify-center items-center gap-8">
            {link.map((links, idx) => {
              return (
                <Link 
                  href={links.path}
                  key={idx}
                  className={`${links.path === pathname && 'text-accent border-b-2 border-accent'} text-xl text-white capitalize hover:text-accent transition-all`}
                >
                  {links.name}
                </Link>
              )
            })}
          </nav>
        </SheetTitle>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav;