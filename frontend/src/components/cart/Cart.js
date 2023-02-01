import { Divider } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './cart.css'
const getdata=(id)=>{
  return axios.get(`http://localhost:4500/getproducts/${id}`)
 }
const Cart = () => {
  const [data,setData]=useState([])
  const {id} = useParams('')
 console.log(id)
  
  useEffect(()=>{
    getdata(id)
    .then((res)=>{
      console.log('cart',res.data)
      setData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
    
  },[id])
  return (
    <div className='cart_section'>
      {data && Object.keys(data).length &&
        <div className='cart_container'>
            <div className='left_cart'>
                <img src={data.detailUrl}alt='iphone'></img>
                <div className='cart_btn'>
               <button className='cart_btn1'>Add to Cart</button>
               <button className='cart_btn2'>Buy Now</button>
                </div>
            </div>
            <div className='right_cart'>
          <h3>{data.title.shortTitle}</h3>
          <h4>{data.title.longTitle}</h4>
          <Divider/>
          <p className='mrp'>M.R.P:₹ {data.price.mrp}</p>
          <p>Deal of the Day:<span style={{color:'#B12704'}}> ₹ {data.price.cost}.00</span></p>
          <p>You save:<span style={{color:'#B12704'}}>₹ {data.price.mrp-data.price.cost}({data.price.discount})</span></p>
          <div className='discount_box'>
            <h5>Discount:<span style={{color:'#111'}}>{data.price.discount}</span></h5>
            <h4>Free Delivery<span style={{color:'#111',fontWeight:600}}>Oct 8-21</span>Details</h4>
            <p>Fastest Delivery:<span style={{color:'#111'}}>Tommorrow 11AM</span></p>
          </div>
          <p className='description'>About the Item :<span style={{color:'#595959',fontSize:'14px',letterSpacing:'0.4px'}}>{data.description}
</span></p>
            </div>
        </div>
}
    </div>
  )
}

export default Cart