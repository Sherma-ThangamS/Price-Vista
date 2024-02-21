import HeroCarousel from "@/components/HeroCarousel"
import Searchbar from "@/components/Searchbar"
import Image from "next/image"
import { getAllProducts } from "@/lib/actions"
import ProductCard from "@/components/ProductCard"
import Man from "@/components/Man"
export const revalidate=0;
const Home = async () => {
  const allProducts = await getAllProducts();

  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16 bg-ffe6e6">
          <div className="flex flex-col justify-center"> 
            <h1 className="head-text">
            Track. 
              <span className="text-primary"> Save. Shop. </span>
              PriceVista triumphs daily.
            </h1>

            <p className="mt-6">
            Embark on the ultimate shopping journey with PriceVista – where every deal is a discovery, and every price drop is a triumph. Unleash the power of savings and make every purchase a victory!
            </p>
          </div>

          <HeroCarousel />
        </div>
        <section>
        <div className="flex max-xl:flex-col gap-16 bg-ffe6e6">
        <Man/>
        <div className="flex flex-col justify-center"> 
            <p className="small-text">
              Smart Shopping Starts Here:
              <Image 
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>

            <h1 className="head-text">
              Unleash the Power of
              <span className="text-primary"> PriceVista</span>
            </h1>

            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
            </p>

            <Searchbar />
          </div>
            
          </div>
        </section>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16 ">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
