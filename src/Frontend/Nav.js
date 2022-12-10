import React,{useState}from 'react';
import { useEffect } from 'react';
import './Nav.css';
export default function Nav() {
  const[show,setShow]= useState(false);
  const transitionNavbar=()=>{
    if(window.scrollY>100){
      setShow(true);
    }else{
      setShow(false);
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll",transitionNavbar);
    return()=>window.removeEventListener("scroll",transitionNavbar);
  },[])
  return (
    <div className={`nav ${show && "nav_black"}`}>
    <img
      className="nav_logo"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
      alt="Netflix Logo"
    />
    <img
      className="nav_avatar"
      src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
      alt="Avatar"
    />
  </div>
  )
}
