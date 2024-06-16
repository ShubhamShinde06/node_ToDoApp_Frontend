import React, { useState, useContext } from 'react'
import logo from '../img/logo.png'
import axios from 'axios'
import { Context, server } from '../../index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../Home';
import { Navigate } from 'react-router';

const Signup = () => {

  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const {isAuth,setisAuth} = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();

    try{
       const {data} = await axios.post(`${server}/users/new`,{
        name,email,password,
      },
      {
        headers: {
          "content-Type":"application/json",
        },
        withCredentials: true,  
      });
      alert(data.message);
      setisAuth(true);
    } 
    catch (err) {
      alert("Some Error");
      alert(err.response.data.message);
      setisAuth(false);
    }
  };

  if(isAuth) return <Navigate to={"/"} />
    
  return (
    <div>
      <Home/>
      <section class="bg-[#2A2D32] h-[90vh]  mx-5 rounded-xl flex items-center md:block lg:block">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 mt-[90px]">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src={logo} alt="logo" />
          ADD Notes  
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#" onSubmit={submitHandler}>
                    <div>
                      <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="name" 
                        placeholder="Joan" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        required />
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        id="email" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="name@company.com" 
                        required />
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input 
                        type="password" 
                        name="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password" 
                        placeholder="••••••••" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        required />
                  </div>
                  <button type="submit" class="w-full text-white bg-[#2563EB] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      You have account? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
<ToastContainer/>
    </div>
  
  )}


export default Signup