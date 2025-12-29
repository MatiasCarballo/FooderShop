// import img from '../../assets/fondoHome.jpg'
import Carruzel from '../../components/Carruzel'
import s from './Home.module.css'

const Home = () => {
  return (
    <>
      <div className={s.Home}>
        <div className={s.image}>
          {/* <img src={img} alt="#"  /> */}
        </div>
      </div>
      <Carruzel/>
    </>
  )
}

export default Home