import { useEffect } from 'react'
import s from './Menu.module.css'
import { useDispatch, useSelector } from "react-redux";
import {getPrduct} from '../../Redux/actions/actions'
// import { Route, Routes } from "react-router-dom";

import SearchBar from '../../components/SearchBar/index'
import CardProduct from '../../components/CardProduct/index';

const Menu = () => {

  const product = useSelector((state) => state.product);
  console.log(product.length);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPrduct())
  }, [dispatch]);

  return (
    <div className={s.Menu}>
      <div className={s.Derroche0}></div>
      <SearchBar/>
      <div className={s.Derroche2}></div>
      <div className={s.h11}>

        <div className={s.CardProduct}>
          {product.length != 0 ? (
            product?.map((c)=>{
              return (
                <CardProduct key={c._id} name={c.name} price={c.price} description={c.description} image={c.image}/>
              )
            }))
          :
          (
            <h1>No hay</h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default Menu