import React from 'react'
import './Header.css';
import profileImg from '../../assets/profile.png'
import Typical from 'react-typical'
const Header = () => {
    return (
        <div className="header-container">
            {/* header content */}
            <div className="header-content">
                <h1>Hy! Am</h1>
                <h2 className="fullname">Yogesh Kushwah</h2>
                <h2>I'm a {" "}
                    <Typical
                     loop={Infinity}
                     wrapper="b"
                        steps={[
                            'Full Stack Developer 💻 ',
                            1000,
                            "Frontend Developer 👨‍💻",
                            1000,
                            "Backend Developer 🗄",
                            1000,
                            "React Developer  👨‍💻",
                            1000
                        ]}
                       
                    />
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat corrupti iste assumenda quae nulla voluptas neque debitis eos quasi officiis delectus nobis cumque tenetur, dolores ducimus necessitatibus quibusdam quo architecto.
                </p>
                {/* payment links */}

                <div className="header-payment-container">
                    <button>Hire Me</button>
                    <i className='fa-brands fa-paypal'></i>
                    <i className='fa-brands fa-cc-visa'></i>
                    <i className='fa-brands fa-cc-mastercard'></i>
                    <i className='fa-brands fa-google-pay '></i>
                </div>
            </div>
            {/* image container */}
            <div className="profile-img-container">
            <img src={profileImg} alt='' />
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            </div>
        </div>
    )
}

export default Header