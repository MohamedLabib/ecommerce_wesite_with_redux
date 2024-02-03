import React from 'react'
import './Footer.css'; 
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
export default function Footer() {
  return (
    <div className='footer'>
        <div className='columns'>
            <div className='col'>
                <div className='title'>Shop By</div>
                <ul>
                    <li><a>women</a></li>
                    <li><a>men</a></li>
                    <li><a>kids</a></li>
                    <li><a>electronic</a></li>
                    <li><a>home</a></li>
                    <li><a>sports</a></li>
                    <li><a>shoes & Bags</a></li>
                    <li><a>Grocery</a></li>
                    <li><a>Toy & Games </a></li>
                </ul>
            </div>
            <div className='col'>
                <div className='title'>Support</div>
                <ul>
                    <li><a>About Us</a></li>
                    <li><a>Shipping Info</a></li>
                    <li><a>Returns</a></li>
                    <li><a>Refund</a></li>
                    <li><a>how To order</a></li>
                    <li><a>How To track</a></li>
                    <li><a>size Guide</a></li>
                    <li><a>membership</a></li>
                </ul>
            </div>
            <div className='col'>
                <div className='title'>Customer Services</div>
                <ul>
                    <li><a>FAQ's</a></li>
                    <li><a>Contact Us</a></li>
                    <li><a>Connect via whatsApp</a></li>
                    <li><a>Sitemap</a></li>
                    <li><a>stores</a></li>
                    <li><a>home products guide </a></li>
                    <li><a>shoes & Bags</a></li>
                    <li><a>Grocery</a></li>
                    <li><a>gift cards </a></li>
                </ul>
            </div>            
              <div className='newsletter'>
                  <div className='title'>Newsletter</div>
                  <p>be the first to know about our newest arrivals, special offers and store events near you.</p>
                  <form>
                      <input type='text' placeholder='Enter Your Email Address'></input>
                      <button>Sign Up</button>
                  </form>
              </div>
        </div>
        <div className='social'>
            <h5>Follow Us</h5>
            <div className='social-icons'>
                <span className='social-icon'><FaFacebook /></span>
                <span className='social-icon'><FaInstagram /></span>
                <span className='social-icon'><FaTwitter /></span>
                <span className='social-icon'><FaYoutube /></span>
            </div>
        </div>
        <div className='rights'>
              all rights reserved © 2023 Created By Mohamed Labib
        </div>
    </div>
  )
}
