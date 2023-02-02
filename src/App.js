import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const[mode,setMode]=useState("light");
  const[alert,setAlert]=useState(null);
  const showAlert= (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
        setAlert(null);
    },1500)

  }
  const toggleModeFunction =()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is enabled","success");
    
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","success");
    }
  }

  return (
    // <Navbar title='TextUtils' about="About Us"/>
    
      <Router>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleModeFunction} />
     < Alert alert={alert}/>
     <div>
        <Routes>
          <Route exact path='/about' element={ <AboutUs/>}/>
           
          <Route path='/' element={ <TextForm heading="Enter the text here to analyze" mode={mode} alert={showAlert}/>}/>
         
        
        </Routes>
     </div>
     </Router>
     
     

   
    
  );
}

export default App;
