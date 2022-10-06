import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from "styled-components"

const Flex = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 80px 320px 0;
    row-gap: 78px ;
`
const Image = styled.img`
   width: 380px;
height: 380px;   
`
const StoreName = styled.div`
    font-weight: 400;
    color: #767676;
    font-size: 16px;
    line-height: 22px;
    margin-top: 16px;
`
const ItemName = styled.div`
    font-weight: 400;
    color: #000000;
    font-size: 18px;
    line-height: 22px;
    margin-top: 10px;
`
const Price = styled.div`
    font-weight: 700;
    color: #000000;
    font-size: 24px;
    line-height: 30px;
    margin-top: 10px;
`
const LoadItem = () => {
    const [item,setItem] = useState([]);

    useEffect(()=>{
     axios.get('https://openmarket.weniv.co.kr/products/')
     .then((data)=>{setItem(data.data.results)
    
     })
         .catch(()=>{console.log('실패!')})
    })

  return (
    <Flex>
    {item.map(item=>{
        return(<div key={item.id}>
            <Image src={item.image}/>
            <StoreName>{item.store_name}</StoreName>
            <ItemName>{item.product_name}</ItemName>
            <Price>{item.price} 원</Price></div>)
    })}
    </Flex>
  )
}

export default LoadItem