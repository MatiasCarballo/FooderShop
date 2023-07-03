import { useEffect } from 'react'
import s from './Menu.module.css'
import { useDispatch, useSelector } from "react-redux";
import {getPrduct} from '../../Redux/actions/actions'
// import { Route, Routes } from "react-router-dom";

import SearchBar from './SearchBar/index'
import CardProduct from './CardProduct/index';

const Menu = () => {

  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPrduct())
  }, [dispatch]);

  return (
    <div className={s.Menu}>
      <div className={s.Derroche}></div>
      <SearchBar/>
      <div className={s.Derroche2}></div>
      <div className={s.CardProduct}>
        {product ? (
          product?.map((c)=>{
            return (
              <CardProduct key={c._id} name={c.name} price={c.price}/>
            )
          }))
        :
        (
          <h1>No hay</h1>
        )}
      </div>
    </div>
  )
}

export default Menu