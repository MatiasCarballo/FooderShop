import { useState } from 'react';
import s from './NabBar.module.css'
import { Link } from 'react-router-dom'; // Si vas a utilizar React Router

import Img from '../../assets/LogoPizza1.png'

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
            <img src={Img} alt="" className={s.ImgLogo}/>
            <h1>LOGO</h1>
        </div>
      </div>
      <div className={s.NavBarRight}>
        <div className={s.LinksContent}>
          <div className={s.LinkHome} onClick={()=>selectLink('home')}>
            <Link to='/' >
              <h3 className={links==='home'? s.LinkActive : s.LinkDisabled}>Home</h3>
              <div className={links==='home'? s.barraOn : s.barraOff}></div>
            </Link>
          </div>
          <div className={s.LinkOfferts} onClick={()=>selectLink('offerts')}>
            <Link to='/promos' >
            <h3 className={links==='offerts'? s.LinkActive : s.LinkDisabled}>Promos</h3>
            <div className={links==='offerts'? s.barraOn : s.barraOff}></div>
            </Link>
          </div>
          <div className={s.LinkFoods} onClick={()=>selectLink('foods')}>
            <Link to='/menu' >
            <h3 className={links==='foods'? s.LinkActive : s.LinkDisabled}>Menu</h3>
            <div className={links==='foods'? s.barraOn : s.barraOff}></div>
            </Link>
          </div>
          <div className={s.LinkContact} onClick={()=>selectLink('contact')}>
            <Link to='/contacto'>
            <h3 className={links==='contact'? s.LinkActive : s.LinkDisabled}>Contacto</h3>
            <div className={links==='contact'? s.barraOn : s.barraOff}></div>
            </Link>
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