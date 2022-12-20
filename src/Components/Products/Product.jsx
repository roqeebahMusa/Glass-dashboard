import React from 'react'
import "./Product.css"
import Image from "./Sneaker.jpg"
// import {Datas} from './Data'

const Product = () => {
  return (
    <div className='Product_Container'>
        <div className='Product_Wrapper'>
            <div className='Prod_Card'>
               <img src={Image} className="Img"/>
               <h3 className='ProductName'>Product Name</h3>
               <p className='Desc_Contain'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra pharetra massa massa ultricies. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.</p>
               <div className='Done_Prod '> 
               <p>Price</p>
           <button>add</button>
               </div>
            </div>
          
        </div>
     
    </div>
  )
}

export default Product