"use client"
import { scrapeAmazonProduct } from "@/lib/scraper"
import { FormEvent, useState } from "react"

const Searchbar = () => {
    const [searchPrompt, setSearchPrompt] = useState("")
    const [loading, setLoading] = useState(false)
    const isValidLink=(link:string)=>{
        
        try{
            const url=new URL(link);
            const parseURL=url.hostname;
            if(
                parseURL.includes('amazon.com')
                ||parseURL.includes('amazon.')
                ||parseURL.endsWith('amazon')){
                    return true
                }
            }
        catch{
            return false
        }
        return false
    }
    const handleSubmit= async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const valid=isValidLink(searchPrompt)
        if(!valid) return alert("Please entert the valid amazon link")
        try {
            setLoading(true)
            const product= await scrapeAmazonProduct(searchPrompt);
        } catch (error) {
            console.log(error)
        }
        finally{
            setSearchPrompt("")
            setLoading(false)
        }
    }
    
  return (
    <form className='flex flex-wrap mt-12 gap-4' onSubmit={handleSubmit}>
        <input 
        type="text"
        value={searchPrompt}
        onChange={(e)=>setSearchPrompt(e.target.value)}
        placeholder="Enter the link"
        className="searchbar-input"
         />
         <button 
         className="searchbar-btn"
         disabled={searchPrompt===''}

         >{loading? "Searching...":'Search'}
         </button>
    </form>
  )
}

export default Searchbar