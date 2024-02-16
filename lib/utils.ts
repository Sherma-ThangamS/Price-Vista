export function extractPrice(...elements:any){
    for(const ele of elements){
        const priceText=ele.text().trim();
        if(priceText) return priceText.replace(/\D/g,'')
    }
    return ''
}