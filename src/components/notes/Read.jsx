import React, {  useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../..';

const ReadNotes = () => {

  const [refresh,setRefresh] = useState();

  const [tasks,setTask] = useState([]);
  useEffect(()=> {
    axios.get(`${server}/task/my`,{
      withCredentials:true,
    }).then(res=> {
      setTask(res.data.tasks);
      console.log(res.tasks)
    }).catch(err => {
      console.log(err)
    })
  },[refresh]);

  const updatehandler = async (id) => {
    try{
      const {data} = await axios.put(`${server}/task/${id}`,
        {},
        {
          withCredentials: true,
        }
      );
      alert(data.message)
      setRefresh(prev => !prev)
    }catch(err){
      alert(err.response.data.message)
    }
  }

  const deletehandler = async (id) => {
    try{
      const {data} = await axios.delete(`${server}/task/${id}`,
        {
          withCredentials: true,
        }
      );
      alert(data.message);
      setRefresh(prev => !prev)
    }catch(err){
      alert(err.response.data.message)
    }
  }


  return (
    <>
      <div className="w-auto h-[90vh] md:h-[95vh] flex flex-col items-center pt-5 overflow-scroll">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
          {
            tasks.map((d) => (
              <div className='w-[300px] max-h-[200px] p-5 rounded-lg bg-[#191B1F] border-2 border-[#5F6368] cursor-pointer overflow-hidden '>
                <h1 className='font-bold mb-3 text-[20px] text-white'>{d.title}</h1>
                <h5 className='h-[90px] overflow-hidden'>{d.description}</h5>
                <div className='w-auto h-[30px] flex gap-10 '>
                  <button onClick={() =>updatehandler(d._id)} className='w-[50%] flex items-center justify-center rounded-xl bg-[#03B20A] font-bold '>
                    <input type="checkbox"  checked={d.isCompleted} className='mr-2'/>
                    <h2>Update</h2>
                  </button>
                  <button  onClick={()=>deletehandler(d._id)}   className='w-[50%] flex items-center justify-center rounded-xl bg-[#E23E32] font-bold'>
                    {/* <input type='checkbox' onChange={()=>deletehandler(d._id)}  /> */}
                    Delete
                  </button>
                </div>
              </div> 
            ))
          }
        </div>
      </div>
      </>
)}

export default ReadNotes