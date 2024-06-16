import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart, faUser, faHome } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <>
        <div className='w-full h-[100px] bg-[#ffffff] absolute left-0 top-[80px] text-black '>
            <ul className='p-5 pl-10 font-bold text-1xl'>
                <Link to={'/me'}><li className='mt-2'>Profile<FontAwesomeIcon className='ml-2' icon={faShoppingCart} /></li></Link>
                <Link to={'/login'}><li className='mt-2'>Login/Signup<FontAwesomeIcon className='ml-2' icon={faUser} /></li></Link>
            </ul>
        </div>
    </>
  )
}

export default Header