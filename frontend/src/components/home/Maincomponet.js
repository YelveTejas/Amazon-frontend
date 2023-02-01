
import React, { useEffect } from 'react'
import Banner from './Banner'
import Slide from './Slide'
import './home.css'
import { Getproducts } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'
const Maincomponet = () => {
const dispatch = useDispatch()
const products = useSelector(store=>store.Appreducer.products)

useEffect(()=>{
  dispatch(Getproducts())
},[dispatch])

//console.log('products',products)
  return (
    <div className='home_section'>
        <div className='banner_part'>
            <Banner/>
        </div>
        <div className='slide_part'>
          <div className='left_slide'>
            <Slide title='Deal of the day' products={products}/>
          </div>
          <div className='right_slide'>
                <h4>Festive launches</h4>
                <img src='https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/5127aad7-dd20-416f-9909-f49c6ba43c3b.jpg'alt=''></img>
                <a href='#'>Show more</a>         
                </div>
        </div>
        <Slide title="Today's Deals" products={products}/>
        <div className='center_img'>
          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Jan_23/Jan_ART/1150x323_GW-editorial._CB615648357_.jpg' alt=''></img>
        </div>
        <Slide title='Best Seller' products={products}/>
        <Slide title='Up to 80% off' products={products}/>
        
    </div>
  )
}

export default Maincomponet