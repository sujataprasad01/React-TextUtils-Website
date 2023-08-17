

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setMode]=useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert]=useState('null'); 

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
     setAlert(null);
    },2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#000000bd';
    showAlert("Dark mode has been enabled", "success")
    document.title="TextUtils - Dark Mode";
    setInterval(()=>{
      document.title="TextUtils - Try premium"
    }, 2000);
    setInterval(()=>{
      document.title="TextUtils - Login Now"
    }, 1500);
    }
    else{
      setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled", "success") 
    document.title="TextUtils - Light Mode";
    }
  }
  return (
    <>
      {/* <Navbar title="Taxtutils" aboutText="About us"></Navbar> */}
      {/* <Navbar></Navbar> */}
      <Navbar title="Taxtutils" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the Text to analyze" mode={mode}></TextForm>
      <About mode={mode}  toggleMode={toggleMode} ></About>
      </div>
    </>
  );
}

export default App;
