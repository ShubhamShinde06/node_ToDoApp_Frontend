import React, { useContext } from 'react'
import { Context } from '../..';
import Loader from '../../components/Loader'

const ProfileHover = () => {

  const {isAuth,loading,user} = useContext (Context);

  return (
    loading ? <Loader/> :  (
    <div className='w-full h-[100vh] flex items-center justify-center textr-white  '>
      <div className='w-[300px] h[250px] border-2 p-5'>
          <h1>name : {user?.name}</h1>
          <h1>email : {user?.email}</h1>
      </div>
    </div>
    )
  )
}

export default ProfileHover