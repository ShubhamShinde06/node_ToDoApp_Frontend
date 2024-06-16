import React,{useState} from 'react';
import TextCard from './Create';
import ReadNotes from './Read';
import Home from '../Home'

const Note = () => {


  const [show,setHide] = useState(false);

  const toggle = () => {
    setHide(!show)
  }

  return (
    <>
      <Home/>
      <div className='w-[100vw] h-[87vh] m-5 p-3  mt-[100px] bg-[#2A2D32] text-white rounded-xl' >
          <div className='flex items-center pt-5 justify-center '>
              <button onClick={toggle} className='border-2 border-[#5F6368] w-[200px] h-[50px] pl-2 mt-[-20px] bg-[#202124] rounded-xl '>
                <h3 className='font-bold text-[#BDBDBE] '>Take a new notes +</h3>
              </button>
          </div>
          {
             show && <TextCard/>
          }
          <ReadNotes/>
      </div>

    </>
  )
}

export default Note