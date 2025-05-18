import HeroCarousel from "@/components/HeroCarousel"
import Man from "@/components/Man"
import Navbar from "@/components/Navbar"
import ProductCard from "@/components/ProductCard"
import Searchbar from "@/components/Searchbar"
import { getAllProducts } from "@/lib/actions"
import { Product } from "@/types"
import Image from "next/image"
export const revalidate=0;
const Home =  async() => {
  const allProducts=await getAllProducts()
  return (
    <>
    <Navbar />
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
            product.image?<ProductCard key={product._id as string} product={product as Product} />:""
          ))}
        </div>
      </section>
    </>
  )
}




export default Home;
