import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <header
        id="landing-header"
        className="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white"
      >
        <div className="ml-14 cursor-pointer" onClick={e => router.push("/")}>
          Logo
        </div>
      </header>
      
    </>
    

    
  )
}

export default Navbar