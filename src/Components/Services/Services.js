import React from 'react'
import './Services.css'
const Services = () => {
    return (
        <div className="services-container">
            <div className="services-list-container">
                {/* desc */}
                <div className="services-desc-container">
                    <h1>My Awesome <span>Services</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aspernatur architecto rem dignissimos sed debitis sequi, libero iusto nostrum modi doloribus culpa cumque vel id voluptate dolore quibusdam dolores vitae?
                    </p>
                    <button>Hire Me</button>
                </div>
                {/* item */}
                <div className="service-item-container">
                    <div className="services-item">
                        <i className='fa-solid fa-code'></i>
                        <div className="item-desc">
                            <h3>Web Development</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita totam, fugiat quam enim consequuntur soluta vitae quos! Reiciendis, numquam! Repellendus voluptates id architecto ipsam laborum sunt necessitatibus recusandae molestias harum?
                            </p>

                        </div>
                    </div>
                    <div className="services-item">
                        <i className='fa-solid fa-desktop'></i>
                        <div className="item-desc">
                            <h3>Desktop Development</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita totam, fugiat quam enim consequuntur soluta vitae quos! Reiciendis, numquam! Repellendus voluptates id architecto ipsam laborum sunt necessitatibus recusandae molestias harum?
                            </p>
                            
                        </div>
                    </div>
                    <div className="services-item">
                        <i className='fa-solid fa-tablet-alt'></i>
                        <div className="item-desc">
                            <h3>Mobile Development</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita totam, fugiat quam enim consequuntur soluta vitae quos! Reiciendis, numquam! Repellendus voluptates id architecto ipsam laborum sunt necessitatibus recusandae molestias harum?
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services