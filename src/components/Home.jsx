import React, { useContext, useState } from 'react';
import logo from './img/logo.png';
import { NavLink } from "react-router-dom";
import { Context, server } from '..';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Header from './Header';



const Home = () => {

  const[show,setShow] = useState(false);

  const toggle = () => {
    setShow(!show)
  }

  const {isAuth,setisAuth,loading,setLoading} = useContext(Context);

  const logoutHandler = async () => {
    setLoading(true);
    try{
      await axios.get(
      `${server}/users/logout`,
      {
        withCredentials: true,  
      });
      alert("Logged Out Successfully");
      setisAuth(false);
      setLoading(false);
    } 
    catch (err) {
      alert(err.response.data.message);
      setisAuth(true);
      setLoading(false);
    }
  };


  return (
    <>
      <header className='w-[100%] bg-[#191B1F] absolute top-0 flex items-center justify-between p-5 pl-8 pr-8 '>
        <div className='flex items-center'>
          <img src={logo} alt="logo" className='w-[50px] h-[50px]'/>
          <h1 className='ml-3 font-bold text-2xl'>ADD Notes</h1>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex w-[250px] justify-between '>
            <li><NavLink to="/me"><div className='p-2 pl-8 pr-8 rounded-lg text-black tracking-2 font-bold text-1xl cursor-pointer bg-[#FFBF11]'><p>Profile</p></div></NavLink></li>
            {
              isAuth ? 
              <li><NavLink to="/"><div disabled={loading} onClick={logoutHandler} className='p-2 pl-8 pr-8 rounded-lg text-black tracking-2 font-bold text-1xl cursor-pointer bg-[#FFBF11]'><p>Logout</p></div></NavLink></li>
              :
              <li><NavLink to="/login"><div className='p-2 pl-8 pr-8 rounded-lg text-black tracking-2 font-bold text-1xl cursor-pointer bg-[#FFBF11]'><p>Login</p></div></NavLink></li>
            }
          </ul>
        </div>
          <div class="md:hidden">
                <div class="text-4xl font-bold cursor-pointer" onClick={toggle}>
                    {
                        show === true? <FontAwesomeIcon icon={faXmark} /> : <div>&#8801;</div>
                    }
                </div>
            </div>
            {
                show && <Header/>
            } 
      </header>
    </>
  )
}

export default Home