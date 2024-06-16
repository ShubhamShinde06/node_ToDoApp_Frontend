import React,{ useEffect, useState} from 'react'
import { server } from '../..';
import axios from 'axios';

const TextCard = () => {

  const [show,setHide] = useState(true);
  const toggle = () => {
    setHide(!show)
    
  }

  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  // const [loading,setLoading] = useState(false);

  const CloseHandle = async (e) => {
    e.preventDefault();
    // setLoading(true)
    try{
      await axios.post(`${server}/task/new`,{
        title,
        description,
      },{
        withCredentials: true,
        headers: {
          "content-Type":"application/json",
        },
      }
    );
      alert("Add note")
      setTitle("");
      setDescription("");
      // setLoading(false);
    }
    catch (err){
      alert(err.response.data.message);
      // setLoading(false);
    }
 };



 
  return (
    <>
    {show && <div className='w-[100%] h-[100vh] bg-[#191b1fa0] absolute top-0 left-0 flex justify-center items-center'>
            <form onSubmit={CloseHandle} className='max-w-[800px] min-h-[250px] bg-[#191B1F] rounded-xl z-40 p-5'>
              <div  className='flex p-1 items-center justify-end  text-2xl font-bold '>
                <button  onClick={toggle} className='cursor-pointer' >&#10005;</button>
              </div>
              <input 
                type="text" 
                name='title' 
                placeholder='Title..' 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='w-[100%] font-bold bordre-none outline-none bg-transparent text-[20px] mb-8' 
              />
               <textarea 
                type="text" 
                name='title' 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Description..' 
                className='w-[100%] min-h-[300px] bordre-none outline-none bg-transparent text-[18px]' 
              />
              <button type='submit' className=' w-[100%] h-[50px] rounded-lg mt-5 bg-[#ffffff] text-black hover:text-white hover:bg-[#000] '>Add Note</button>
            </form>
        </div> 
    }
    </>    
  )}

export default TextCard