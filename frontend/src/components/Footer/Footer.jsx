import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt='' />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsum laudantium neque tempora, suscipit cumque debitis earum voluptatem itaque odit, alias perspiciatis minus harum nobis.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-123-123-4444</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>

        </div>
        <hr />
        <p className='footer-copyright'>@copyright 2024</p>
      
    </div>
  )
}

export default Footer
