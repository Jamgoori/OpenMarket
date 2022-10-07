import React, { useEffect, useState } from 'react'
import styled from "styled-components"
const Header = styled.header`
display: flex;
    margin: 26px 320px;
    align-items: center;
`
const Label = styled.label`
  position: relative;
  input {
    border: 2px solid #21BF48;
  border-radius: 50px;
  width: 400px;
  height: 46px;
  margin-left: 30px;
  padding: 0 22px;
  }
  button {
    position: absolute;
    top: 9px;
    right: 22px;
    border: none;
    background-color: white;
    width: 28px;
    height: 28px;
  }
  button:hover{
    cursor: pointer;
  }
  img{
    width: 28px;
    height: 28px;
  }
`

const Nav = styled.nav`
margin-left: auto;
display: flex;
align-items: center;
`
const Icon = styled.img`
  width: 46px;
  height: 50px;
`
const Head = () => {
  return (
    <>
    <Header>
    <img src='../images/Logo-hodu.png'/>
    <Label>
    <input type="text" placeholder='상품을 검색해보세요!'></input><button><img src='../images/search.png'/></button></Label>
    <Nav>
    <Icon src='../images/icon-shopping-cart.svg'></Icon>
    <Icon src='../images/icon-user.svg'></Icon>
    </Nav>
    </Header>
    
    <main>

    </main>
    </>
  )
}

export default Head