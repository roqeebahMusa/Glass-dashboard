import React from 'react'
import './Facebook.css'
import { FaFacebook } from 'react-icons/Fa';
import { AiFillHome } from 'react-icons/ai';
import { IoStorefrontOutline } from 'react-icons/io5';
import { GrGroup } from 'react-icons/gr';
import { SiFacebookgaming } from 'react-icons/si';
import { CgMenuGridR } from 'react-icons/cg'
import { BsMessenger } from 'react-icons/bs';
import { IoNotifications } from 'react-icons/io5';
import { GrSearch } from 'react-icons/gr';
import { FcBusinesswoman } from 'react-icons/fc';

const Facebook = () => {
  return (
    <div className='App'>
      <div className='Header'>
        <div className='logoSearch'>
            <div className='Logo_Contain'>
            <FaFacebook fontSize='60px' color='blue' height='70px'/>
            </div>
            <div className='search_items'>
              <div className='search_box'>
              < GrSearch fontSize="30px"/>
              </div>
              <div className='facebook'>
                <p className='word'>Search Facebook</p>
              </div>
            </div>
        </div>
        <div className='Icons_Contain'>
            <div className='Home_Contain'>
           < AiFillHome color='blue' fontSize='30px'/>
            </div>
            <div className='Market_Contain'>
            <IoStorefrontOutline fontSize='30px'/>
            </div>
            <div className='Group_Contain'>
            < GrGroup fontSize='30px'/>
            </div>
            <div className='Game_Contain'>
              < SiFacebookgaming fontSize='30px'/>
            </div>
        </div>
        <div className='logo_contain'>
        <div className='menu_Contain'>
              < CgMenuGridR fontSize='30px'/>
        </div>
            <div className='message_Contain'>
              < BsMessenger fontSize='30px'/>
            </div>
            <div className='notify_Contain'>
            < IoNotifications fontSize='30px'/>
            </div>
            <button className='profile_Contain'>
        < FcBusinesswoman fontSize='30px'/>
            </button>
        </div>
    </div>
    </div>
  )
}

export default Facebook