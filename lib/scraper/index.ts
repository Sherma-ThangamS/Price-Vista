import axios from 'axios';
import * as cheerio from 'cheerio';
import { extractPrice } from '../utils';

export async function scrapeAmazonProduct(url:string) {
    if(!url) return;
    // curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_0afa34cf-zone-unblocker:q46z33ijcuyi -k https://lumtest.com/myip.json
    const username=String(process.env.BRIGHT_DATA_USERNAME)
    const password=String(process.env.BRIGHT_DATA_PASSWORD)
    const port=22225;
    const session_id = (1000000 * Math.random()) | 0;

    const options = {
        auth: {
        username: `${username}-session-${session_id}`,
        password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false,
    }
    try {
        const res=await axios.get(url,options);
        const $ = cheerio.load(res.data);
        const title = $('#productTitle').text().trim();
        const price=extractPrice(
            $('.priceToPay span.a-price-whole'),
            $('.a.size.base.a-color-price'),
            $('.a-button-selected .a-color-base'),
        )
        console.log(title,price)
    } catch (error:any) {
        console.log("hi")
        throw new Error(`Failed to scrape product: ${error.message}`)
    }
    
}