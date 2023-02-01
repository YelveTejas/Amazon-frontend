import { Divider } from '@mui/material';
import React from 'react'
//import { products } from './Product';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './slide.css'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
     // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const Slide = ({title,products}) => {
  const loading_array=  new Array(5).fill('loading')
  //console.log(loading_array)
 // console.log(products)
//   const dispatch = useDispatch()
// const {products} = useSelector(store=>store.Appreducer)
   return (
    <div className='products_section'>
        <div className='products_deal'>
            <h3>{title}</h3>
            <button className='view_btn'>View All</button>
        </div>
        <Divider/>
        <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        showDots={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={4000}
         keyBoardControl={true}
        removeArrowOnDeviceType={['tablet','mobile']}
        dotListClass='custom-dot-list-style'
        itemClass='Carousel-item-padding-40-px'
       // containerClass="carousel-container"
        >
          {
            // loading_array.map((e,index)=>(
            //      <div key={index} className='products_items'>
                  
            //       <p className='products_explore'>{e}</p>
            //     </div>
            
            //    ))
            products.length?products.map((e,index)=>(
              <NavLink to={`/getproducts/${e.id}`}>
                <div key={index} className='products_items'>
                    <div  className='product_img' >
                        <img src={e.url} alt='loading'></img>
                    </div>
                    <p className='products_name'>{e.title.shortTitle}</p>
                    <p className='products_offer'>{e.discount}</p>
                    <p className='products_explore'>{e.tagline}</p>
                </div>
                </NavLink>
            )):loading_array.map((e,index)=>(
              <div key={index} className='products_items'>
                  <p className='products_explore'>{e}</p>
              </div>
          
            ))
          }
            
        </Carousel>
    </div>
  )
}

export default Slide