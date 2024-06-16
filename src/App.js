import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Main from './components/notes/Main'
import Login from './components/Login_Signup/Login';
import Signup from './components/Login_Signup/Register';
import ProfileHover from './components/Login_Signup/ProfileHover';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { Context, server } from '.';


function App() {

  const {setUser, setisAuth, setLoading} = useContext(Context)

useEffect(() => {

    setLoading(true)
  axios.get(`${server}/users/me`, {
    withCredentials: true,
  }).then(res=> {
    setUser(res.data.user);
    setisAuth(true);
    setLoading(false)
  }).catch((err) => {
    setUser({});
    setisAuth(false);
    setLoading(false)
  })

},[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route> 
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signin" element={<Signup/>}></Route>
        <Route path="/me" element={<ProfileHover/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
