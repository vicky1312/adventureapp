import React from 'react'
import './fonts/Inter-Medium.ttf'
import './fonts/Inter-Regular.ttf'
import './fonts/Inter-SemiBold.ttf'
import './fonts/Poppins-Medium.ttf'
import './fonts/Poppins-Regular.ttf'
import './fonts/Poppins-SemiBold.ttf'
import './fonts/Poppins-Bold.ttf'
import './nav.css'


function Nav() {
  return (
    <div className='head' id='head'>
        <div className='logo'>
            <img alt='head' id='headimg' className='logoimg' src={require('./images/logo.png')}></img>
            <p className='ven'>VENDOR</p>
        </div>
        <div className='right'>
            <p className='navpar'>Registered vendor?</p>
            <button className='navbutn'>Sign in</button>
            <img alt='quest' id='quest' className='question' src={require('./images/question.png')}></img>
        </div>
    </div>
  )
}

export default Nav
