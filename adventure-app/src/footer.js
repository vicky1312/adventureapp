import React from 'react'
import './footer.css'
import './fonts/Inter-Medium.ttf'
import './fonts/Inter-Regular.ttf'
import './fonts/Inter-SemiBold.ttf'
import './fonts/Poppins-Medium.ttf'
import './fonts/Poppins-Regular.ttf'
import './fonts/Poppins-SemiBold.ttf'
import './fonts/Poppins-Bold.ttf'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='foot'>
      <div className='footsec'>
      <div className='footsec1'>
        <img alt='log' id='log' className='footlogo' src={require('./images/logo.png')}></img>
        <div className='footsecpar'>
          <p className='footsecpar1'>We believe brand interaction is key in communication. Real innovations and a 
            positive customer experience are the heart of successful communication  
          </p>
          <p className='footsecpar2'> Adventure360, Nigeria &copy;2022 All Rights Reserved</p>
          <p className='footsecpar2'>We are social</p>
        </div>

        <div className='socials'>
          <Link to='/'>
            <img alt='insta' id='insta' className='instag' src={require('./images/insta.png')}></img>
          </Link>
          <Link to='/'>
            <img alt='linked' id='linked' className='soc' src={require('./images/linkedin.png')}></img>
          </Link>
          <Link to='/'>
            <img alt='twit' id='twit' className='soc' src={require('./images/twit.png')}></img>
          </Link>
          <Link to='/'>
            <img alt='face' id='face' className='soc' src={require('./images/face.png')}></img>
          </Link>
        </div>
      </div>

      <div className='footsec2'>
        <h4 className='footh4'>Quick links</h4>
        <div className='footsec2lnks'>
            <div className='lnks0'>
            <Link to='/' className='lnks1'>Write a review</Link>
            </div>
            <div className='lnks'>
            <Link to='/' className='lnks2'>Home</Link>
            </div>
            <div className='lnks'>
            <Link to='/' className='lnks2'>Explore</Link>
            </div>
            <div className='lnks'>
            <Link to='/' className='lnks2'>About us</Link>
            </div>
            <div className='lnks'>
            <Link to='/' className='lnks2'>Features</Link>
            </div>
            <div className='lnks'>
            <Link to='/' className='lnks2'>News</Link>
            </div>
        </div>
      </div>

      <div className='footsec3'>
        <h4 className='footh4'>Contact us</h4>

        <p className='footpar4'>infor@adventure360.com</p>
        <p className='footpar5'>20, Marina, Lagos Island, Lagos, Nigeria</p>

        <div className='footpar6'>
        <h4 className='footh'>Partners</h4>
        <p className='footpar4'>Become an Affiliate</p>
        <p className='footpar4'>Become a Vendor</p>
        </div>
      </div>

      <div className='footsec4'>
          <h4 className='footh4'>Legal</h4>
          <p className='footpar4'>Privacy policy</p>
          <p className='footpar4'>Terms of service</p>
      </div>
    </div>
    </div>

  )
}

export default Footer
