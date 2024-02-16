import HeroCarousel from "@/components/HeroCarousel"
import Searchbar from "@/components/Searchbar"
import Image from "next/image"

const Home = () => {
  return (
    <>
      <section className="px-6  md:px-20 py-20 ">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
          <p className="small-text">
            Smart Shop Starts Here
            <Image
              src="/assets/icons/arrow-right.svg"
              alt="arrow right"
              height={16}
              width={16}
            />
          </p>
          <h1 className="head-text">
            Unleash the Power of   <br />
            <span className="text-primary">PriceVista</span>
          </h1>
          <p  className="mt-6">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
          </p>
          <Searchbar/>
          </div>
          <HeroCarousel/>
        </div>
      </section>
      <section className="trending-section">
        <h1 className="section-text">Trending</h1>
        <div className="flex flex-wrap gap-y-16 gap-x-8">
          {['apple', 'book', 'dress'].map
          ((pro)=>(
              <div key={pro}>{pro}</div>
          )
          )}
        </div>
      </section>
    </>
  )
}

export default Home