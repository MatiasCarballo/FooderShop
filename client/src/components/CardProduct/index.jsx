import s from './CardProduct.module.css'
import Img from '../../assets/modelo.png'

const CardProduct = ({name, price, description, image}) => {
  console.log(image);
  
  return (
    <div className={s.CardProduct}>
      <img src={image ? image : Img } alt="" className={s.ImgProduct}/>
      <h3 className={s.TitleProduct}>{name}</h3>
      <p className={s.DescrptionProduct}>{description}</p>
      <h4 className={s.PriceProduct}>${price}</h4>
    </div> 
  )
}

export default CardProduct