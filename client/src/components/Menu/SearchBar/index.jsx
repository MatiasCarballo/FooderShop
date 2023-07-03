import s from './SearchBar.module.css'
import {BiSearch} from 'react-icons/bi'


//Buscador por letra (filtra mientra escribis)
//

const SearchBar = () => {
  return (
    <div className={s.SearchBar}>
      <div className={s.Filters}>
        <div className={s.FilterPizza}>
            <h3>Pizzas</h3>
        </div>
        <div className={s.FilterBuggers}>
            <h3>Hamburgesas</h3>
        </div>
        <div className={s.FilterDrinks}>
            <h3>Bebidas</h3>
        </div>
        <div className={s.FilterExtras}>
            <h3>Extras</h3>
        </div>
      </div>
      <div className={s.Search}>
        <div className={s.SearchContent}>
            <input type="text" />
            <BiSearch/>
        </div>
      </div>
    </div>
  )
}

export default SearchBar