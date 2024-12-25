"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const Man = () => {
  return (
    <div className="relative sm:px-10 py-5 sm:pt-20 pb-5 max-w-[560px] h-[560px] w-full sm:mx-auto">
      
        <Image
            src={"/assets/images/man.png"}
            alt="Man"
            width={684}
            height={684}
            className="object-cover"
        />
      <Image 
        src="/assets/images/hand-drawn-arrow.png"
        alt="arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute left-[75%] bottom-0 z-0"
      />
    </div>
  )
}

export default Man