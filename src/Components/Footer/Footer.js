import React from 'react'
import './Footer.css'
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer>
        <div className="footer-logo">
            <img src={logo} alt="" />
        </div>

        {/* copyright */}
        <div className="footer-cpyright">
            <p>© 2022 Gems Essence Intotech Pvt. Ltd. All right reserved</p>
        </div>

        {/* social media links */}
       <ul className='footer-social-media'>
           <li>
            <a href="">
                <i className='fa-brands fa-facebook-f'></i>
            </a>
           </li>
           <li>
            <a href="">
                <i className='fa-brands fa-twitter'></i>
            </a>
           </li>
           <li>
            <a href="">
                <i className='fa-brands fa-instagram'></i>
            </a>
           </li>
           <li>
            <a href="">
                <i className='fa-brands fa-youtube'></i>
            </a>
           </li>
           <li>
            <a href="">
                <i className='fa-brands fa-linkedin'></i>
            </a>
           </li>
         
       </ul>

    </footer>
  )
}

export default Footer