import { useState } from 'react';
import s from './NabBar.module.css'
//import { Link } from 'react-router-dom'; // Si vas a utilizar React Router

const NavBar = () => {
  const [links, setLinks] = useState('home');

  const selectLink =(e)=>{
    setLinks(e);
  }

  return (
    <div className={s.NavBar}>
      {/* <div className={s.NavBarContent}> */}
      <div className={s.NavBarLeft}>
        <div className={s.LogoContent}>
            <h1>LOGO</h1>
        </div>
      </div>
      <div className={s.NavBarRight}>
        <div className={s.LinksContent}>
          <div className={s.LinkHome} onClick={()=>selectLink('home')}>
            <h3 className={links==='home'? s.LinkActive : s.LinkDisabled}>Home</h3>
            <div className={links==='home'? s.barraOn : s.barraOff}></div>
          </div>
          <div className={s.LinkFoods} onClick={()=>selectLink('foods')}>
            <h3 className={links==='foods'? s.LinkActive : s.LinkDisabled}>Foods</h3>
            <div className={links==='foods'? s.barraOn : s.barraOff}></div>
          </div>
          <div className={s.LinkOfferts} onClick={()=>selectLink('offerts')}>
            <h3 className={links==='offerts'? s.LinkActive : s.LinkDisabled}>Offerts</h3>
            <div className={links==='offerts'? s.barraOn : s.barraOff}></div>
          </div>
          <div className={s.LinkContact} onClick={()=>selectLink('contact')}>
            <h3 className={links==='contact'? s.LinkActive : s.LinkDisabled}>Contact</h3>
            <div className={links==='contact'? s.barraOn : s.barraOff}></div>
          </div>
        </div>
        <div className={s.UserContent}>
            <h3 className={s.sing}>Sign In</h3>
            <h3 className={s.log}>Log In</h3>
        </div>
      </div>
    </div>
  );
};

export default NavBar