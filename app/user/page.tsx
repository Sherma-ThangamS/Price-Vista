'use client'

import { useRouter } from 'next/navigation';
import React from 'react';

const page = () => {
    const router=useRouter();

  return (
    <div>
        <button onClick={()=>router.push('login')}>
            Login
        </button>
        <button onClick={()=>router.push("login")}>
            Register
        </button>
    </div>
  )
}

export default page