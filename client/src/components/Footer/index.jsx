import s from './Footer.module.css'
import {TiSocialInstagram} from 'react-icons/ti'
import {FaTwitter, FaFacebookF} from 'react-icons/fa'
import Img from '../../assets/LogoPizza1.png'

const Footer = () => {
  return (
    <div className={s.Footer}>
      <div className={s.FooterTop}>
        <div className={s.LineaLogo}></div>
        <div className={s.Logo}><h2>LOGO</h2></div>
        <div className={s.LineaLogo}></div>
      </div>
      <div className={s.FooterBottom}>
        <div>
          <div className={s.ContentLogo}>
            <h2>LOGO</h2>
            <img src={Img} alt="" className={s.ImgLogo}/>
            </div>
        </div>
        <div className={s.LineaFooter}></div>
        <div className={s.ContentPeges}>
          <div className={s.Title}><h2>Peges</h2></div>
          <div>
            <ul className={s.ListPages}>
                <li>Home</li>
                <li>Promo</li>
                <li>Menu</li>
                <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className={s.LineaFooter}></div>
        <div className={s.ContentContact}>
          <div className={s.Title}><h2>Cotact</h2></div>
          <div>
            <ul className={s.ListPages}>
              <li>Direccion</li>
              <li>Telefono</li>
              <li>Email</li>
            </ul>
          </div>
        </div>
        <div className={s.LineaFooter}></div>
        <div className={s.ContentRedes}>
          <div className={s.Title}><h2>Redes</h2></div>
          <div className={s.LogosRedes}>
            <div className={s.LogoFacebook}><FaFacebookF/></div>
            <div className={s.LogoTwitter}><FaTwitter/></div>
            <div className={s.LogoInstagram}><TiSocialInstagram/></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer