"use client"

import { GET } from '@/app/api/cron/route';
import { EmailContent, EmailProductInfo, NotificationType } from '@/types';
import { scrapeAndStoreProduct } from '@/lib/actions';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react'
import { sendEmail } from '@/lib/nodemailer';

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if(
      hostname.includes('amazon.com') || 
      hostname.includes ('amazon.') || 
      hostname.endsWith('amazon') ||
      hostname.includes('amzn.eu')
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
}

const cronTest = async () => {
  try {
    const response = await fetch('/api/cron', {
      method: 'GET',
    });
    const data = await response.json();
    // console.log(data);
  } catch (error) {
    console.error(error);
  }
}
const TestEmail = async () => {
  try{
    const produt : EmailProductInfo = {
      title: "Test Product",
      url: "https://www.amazon.com",
      THRESHOLD_PERCENTAGE: 10
    }
    const emailContent : EmailContent = {
      subject: "Test Email",
      body: "This is a test email"
    }
    await sendEmail(emailContent,["sshermathangam@gmail.com"]);

  }catch(error){
    console.error(error);
  }
}
const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter(); // Move the hook call inside the component body

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductURL(searchPrompt);

    if (!isValidLink) return alert('Please provide a valid Amazon link');

    try {

      await cronTest();
      
      setIsLoading(true);

      // Scrape the product page
      const product = await scrapeAndStoreProduct(searchPrompt);
      setSearchPrompt("");
      // console.log("Product : ",product);
      setTimeout(()=>{
        router.push(`/products/${product}`);
      },10)
      
      
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      })
    }
  };

  return (
    <form
      className="flex flex-wrap gap-4 mt-12"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Enter product link"
        className="searchbar-input"
      />

      <button
        type="submit"
        className="searchbar-btn"
        disabled={searchPrompt === ''}
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
};

export default Searchbar;
