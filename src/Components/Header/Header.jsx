// import React,{useState} from 'react'
// import './Header.css'
// import {FaTimes, FaBeer } from 'react-icons/fa';
// import {FiAlignJustify} from 'react-icons/fi';
// import { Link } from 'react-router-dom'
// // import Sidebar from '../Header/Sidebar'

// const Header = () => {

//     const [toggle, setToggle] = useState(true)
//     const handleToggle = () => setToggle(!toggle)

//   //   const FiAlignJustif = (
//   //  )
//     // const FaTime = (
//     // <div>
   
//     // </div>)

//     return (
//       <div className='Header_Container'>
//           <div className='Header_Wrapper'>
//             <div>LOGO</div>

//             <div className='Nav_Contain'>
//               <Link to='/'>HOME</Link>
//               <Link to='/Product'>PRODUCT</Link>
//               <Link to='/Contact'>CONTACT</Link>
          
//             </div>
//           <div className='burger'> 
//           {toggle ? (<FiAlignJustify onClick={handleToggle} fontSize='30px'/>)
//                 :(<FaTimes onClick={handleToggle} fontSize='30px'/>)}  
//           {/* {toggle ? FiAlignJustif : FaTimes }      */}
//           </div>
        
//           </div>
         
//       </div>
//     )
//   }

// export default Header

import React, { useState } from 'react'
import './Header.css'
import { FaTimes, FaBeer } from 'react-icons/fa'
import { FiAlignJustify } from 'react-icons/fi'
import Nav from './nav'


const Header = ({Profile}) => {
    const [toggle, settoggle] = useState(true)
    const handletoggle = () => { settoggle(!toggle) }

    const FiAlignJustif = (<FiAlignJustify onClick={handletoggle} />)
    const FaTime = (<div>
        <FaTimes  onClick={handletoggle} />
    </div>)
    return (
        <div className="Header-Cointainer">
            <div className="Header-Wraper">
                <b>LOGO</b>
                <Nav />
                <div className='Burger'>
                    {toggle ? FiAlignJustif : FaTime}
                </div>

            </div>
            <div className='Burger'>
               {!toggle? Profile:''}
            </div>
        </div>
    )
}

export default Header
