import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Buttons from './Buttons'
import { BrowserRouter } from 'react-router-dom'
import Context from './Context'


function Main(){

  const[todos,setTodos]=useState([])

  return(
    <BrowserRouter>
    <Context.Provider value={{todos, setTodos}}>
      <Buttons/>
    </Context.Provider>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Main/>,
document.getElementById('root') );
reportWebVitals();