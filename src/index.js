import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createContext } from 'react';

export const server = "https://node-todoapp-9ir6.onrender.com/api/v1"

export const Context = createContext({isAuth:false});

const AppWrapper = () => {

  const [isAuth,setisAuth] = useState(false);
  const [loading,setLoading] = useState(false);
  
  const [user,setUser] = useState({});



  return(
    <Context.Provider 
      value={{
        isAuth,
        setisAuth,
        loading,
        setLoading,
        user,
        setUser
      }}
    >
      <App />
    </Context.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper/>
  </React.StrictMode>
);

