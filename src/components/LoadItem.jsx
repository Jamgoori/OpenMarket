import React, { useEffect, useState } from 'react'
import axios from 'axios'

const LoadItem = () => {
    const [item,setItem] = useState([]);

    useEffect(()=>{
     axios.get('https://openmarket.weniv.co.kr/products/')
     .then((data)=>{setItem(data.data.results)
    
     })
         .catch(()=>{console.log('실패!')})
    })

  return (
    <>
    {item.map(item=>{
        return(<div key={item.id}>
            <img src={item.image}/>
            <div >{item.store_name}</div>
            <div>{item.product_name}</div>
            {item.price} 원</div>)
    })}
    </>
  )
}

export default LoadItem