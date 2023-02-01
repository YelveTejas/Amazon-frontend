import { Divider } from '@mui/material'
import React from 'react'
import './buynow.css'
import Option from './Option'
import Right from './Right'
const Buynow = () => {
  return (
    <div className='buynow_section'>
          <div className='buynow_container'>
            <div className='left_buy'>
                <h1>Shopping Cart</h1>
                <p>Select all items</p>
                <span className='leftbuyprice'>Price</span>
                <Divider/>
                <div className='item_containert'>
                    <img src='https://m.media-amazon.com/images/I/81SX2WeKnUL._UX575_.jpg' alt=''></img>

                    <div className='item_details'>
                    <h3>Adidas Mens Orion Men's Running Shoes</h3>
                    <h3>Adidas's Shoes</h3>
                    <h3 className='diffrentprice'>$4,44</h3>
                    <p className='unusuall'>Usually dispatched in 8 days</p>
                    <p>Eligible for FREE Shipping</p>
                    <img src='https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png' alt='image'></img>
                    <Option/>
                    </div>
                    <h3 className='item_price'>$4049.00</h3>
                </div>
                <Divider/>

            </div>
            <Right/>
          </div>
    </div>
  )
}

export default Buynow