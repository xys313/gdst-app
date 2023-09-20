import React from 'react';
import logo from './logo.svg';
import './App.scss';import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from './pages/homepage'
import TopNav from "./components/topNav";
import {useState} from "react";
import Footer from "./components/footer";
import WhitepaperPage from "./pages/whitepaperpage";

function App() {
    //0是深色模式，1是浅色模式
    const [mode,setMode]=useState(0)
    const darkStyle={
        "--ui-primary-1":'#121212',
        "--ui-primary-2":'#0D0D0D',
        "--app-primary-1":'#D0A02B',
        "--app-primary-2":'#FFD966',

        "--text-primary-1":'#EEEEEE',
        "--text-primary-2":'#DDDDDD',
        "--text-primary-3":'#DDDDDD',

    }
    const lightStyle = {
        "--ui-primary-1":'#EDEDED',
        "--ui-primary-2":'#FDFDFD',
        "--app-primary-1":'#D4B25B',
        "--app-primary-2":'#FFD966',

        "--text-primary-1":'#181818',
        "--text-primary-2":'#282828',
        "--text-primary-3":'#484848',
    }


  return (
    <div style={!mode?darkStyle:lightStyle} className={'App'}>
      <TopNav changeMode={()=>{setMode(pre=>!pre)}}/>
      <Routes>
        <Route path="/" element={<HomePage mode={mode}/>}/>
        <Route path='/whitepaper' element={<WhitepaperPage/>}></Route>
      </Routes>
      <Footer mode={mode}/>
    </div>
  );
}

export default App;
