import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    let baseUrl='https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies'
    let url = `${baseUrl}/${currency}.json`

    const[data,setData]=useState({})
    
    useEffect(()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((res)=>setData(res[currency]))
    },[currency])
    return data

}

export default useCurrencyInfo;