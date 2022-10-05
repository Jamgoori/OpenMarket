import React, { useEffect, useState } from 'react'
import Head from '../components/Head'
import axios from 'axios'
const Home = () => {
    const [item,setItem] = useState([]);

   useEffect(()=>{
    axios.get('https://openmarket.weniv.co.kr/products/')
    .then((data)=>{setItem(data.data.results)
   
    })
        .catch(()=>{console.log('실패!')})
   })
  return (
    <>
    <Head/>
    <div>
    {item.map(item=>{
            return(<div key={item.id}>
                {item.price}</div>)
        })}
    </div>
    </>
  )
}

export default Home