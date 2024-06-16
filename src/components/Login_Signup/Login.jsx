import React, { useContext, useState } from 'react'
import logo from '../img/logo.png'
import Home from '../../components/Home'
import { Context, server } from '../..';
import { Navigate } from 'react-router';
import axios from 'axios';

const Login = () => {

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const {isAuth,setisAuth,loading,setLoading} = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try{
       const {data} = await axios.post(`${server}/users/login`,{
        email,password,
      },
      {
        headers: {
          "content-Type":"application/json",
        },
        withCredentials: true,  
      });
      alert(data.message);
      setisAuth(true);
      setLoading(false);
    } 
    catch (err) {
      alert(err.response.data.message);
      setisAuth(false);
      setLoading(false);
    }
  };



  if(isAuth) return <Navigate to={"/"} />

  return (
    <div>
  <Home/>
  <section class="bg-[#2A2D32] h-[90vh]  mx-5 rounded-xl flex items-center md:block lg:block">
  <div class="flex flex-col items-center justify-center rounded-xl mx-auto md:h-screen lg:py-0 mt-[80px]">
    <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
      <img class="w-8 h-8 mr-2" src={logo} alt="logo" />ADD Notes  
    </a>
    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Login to your account
        </h1>
          <form class="space-y-4 md:space-y-6" action="#" onSubmit={submitHandler}>
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
                  <button disabled={loading} type="submit" class="w-full bg-[#2563EB]  text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="/signin" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Login