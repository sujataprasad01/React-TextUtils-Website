

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


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
    }
    else{
      setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled", "success") 
    }
  }
  return (
    <>
      <Router>
      <Navbar title="Taxtutils" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about"  element={<About  mode={mode}  toggleMode={toggleMode}/>}>
          </Route>
          <Route exact path="/"   element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />}>
          </Route>
      </Routes> 
           </div>
      </Router>     
    </>
  );
}

export default App;
