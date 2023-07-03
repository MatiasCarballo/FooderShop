import s from './Menu.module.css'
// import { Route, Routes } from "react-router-dom";

import SearchBar from './SearchBar/index'

const Menu = () => {
  return (
    <div className={s.Menu}>
      <div className={s.Derroche}></div>
      <SearchBar/>


    </div>
  )
}

export default Menu