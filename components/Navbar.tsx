"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const route=useRouter();

function handleUser(){
  route.push("/user")
}

function handleClick(){
  console.log("clicked")
}

const navIcons = [
  { src: '/assets/icons/search.svg', alt: 'search', handleClick:handleClick},
  { src: '/assets/icons/black-heart.svg', alt: 'heart', handleClick:handleClick},
  { src: '/assets/icons/user.svg', alt: 'user', handleClick:handleUser },
]
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image 
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
          />

          <p className="nav-logo">
            Price<span className='text-primary'>Vista</span>
          </p>
        </Link>

        <div className="flex items-center gap-5 cursor-pointer">
          {navIcons.map((icon) => (
            <Image 
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain"
              onClick={icon.handleClick}
            />
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar