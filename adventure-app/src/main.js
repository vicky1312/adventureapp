import React from 'react'
import Nav from './nav.js'
import './style.css'
import './fonts/Inter-Medium.ttf'
import './fonts/Inter-Regular.ttf'
import './fonts/Inter-SemiBold.ttf'
import './fonts/Poppins-Medium.ttf'
import './fonts/Poppins-Regular.ttf'
import './fonts/Poppins-SemiBold.ttf'
import './fonts/Poppins-Bold.ttf'
import Footer from './footer.js'
import { Link } from 'react-router-dom'
import { FaAngleRight, FaAngleDown } from 'react-icons/fa'

function Main() {
  return (
    <>
        <Nav />
    <div className='body'>
    <div className='bod'>
        <section className='sec1'>
            <div className='firstsec1'>
            <h4 className='sechead1'>BECOME A VENDOR</h4>
            <h3 className='secheadh3'>List <span className='hotel'>Hotels</span>, <span className='flight'> Flights</span> and <span className='tour'> Tour packages</span></h3>
            <div className='list'>
                <div className='checklist'>
                    <img alt='check' id='check' className='check' src={require('./images/check.png')}></img>
                    <p className='lipar'>Over 10M+ existing listings</p>
                </div>
                <div className='checklist'>
                    <img alt='check' id='check' className='check' src={require('./images/check.png')}></img>
                    <p className='lipar'>More than 3M daily users to access your listings</p>
                </div>
                <div className='checklist'>
                    <img alt='check' id='check' className='check' src={require('./images/check.png')}></img>
                    <p className='lipar'>More than 3M daily users to access your listings</p>
                </div>
            </div>
            </div>

            <div className='sec1img'>
                <div className='picsecone'>
                    <div className='adventpic1'>
                    <img alt='adventureone' id='adventureone' className='picadventone' src={require('./images/picadventone.png')}></img>
                    </div>
                    <div className='adventpic2'>
                        <img alt='adventuretwo' id='adventuretwo' className='picadvent2' src={require('./images/picadvent2.png')}></img>
                    </div>
                </div>
                <img alt='adventurethree' id='adventurethree' className='picadvent3' src={require('./images/picadvent3.png')}></img>
            </div>
        </section>

        <div className='box'>
            <p className='boxpar'>Create a vendor account to get started</p>
            <button className='boxbutn'>Get started</button>
        </div>

        <div className='notif'>
            <p><span className='notificate'>Notification:</span> <span className='spanpar'>This is a notification panel such as one to display
                Covid-19 update or some other relevant information</span></p>
        </div>

        <section className='sec2'>
            <div className='section2'>
            <div className='boxes'>
                <div className='bx1'>
                    <img alt='pinl' id='pink' className='pinkbox' src={require('./images/pinkbox.png')}></img>
                </div>
                <div className='bx2'>
                    <img alt='mark' id='mark' className='mrk' src={require('./images/mark.png')}></img>
                </div>
            </div>
            <h1 className='sec2head'>What you get?</h1>

            <div className='list'>
                <div className='checklist'>
                    <img alt='check' id='check' className='check' src={require('./images/check.png')}></img>
                    <p className='lipar'>Over 10M+ existing listings</p>
                </div>
                <div className='checklist'>
                    <img alt='check' id='check' className='check' src={require('./images/check.png')}></img>
                    <p className='lipar'>More than 3M daily users to access your listings</p>
                </div>
                <div className='checklist'>
                    <img alt='check' id='check' className='check' src={require('./images/check.png')}></img>
                    <p className='lipar'>More than 3M daily users to access your listings</p>
                </div>
                <div className='checklist'>
                    <img alt='check' id='check' className='check' src={require('./images/check.png')}></img>
                    <p className='lipar'>Over 10M+ existing listings</p>
                </div>
                <div className='checklist'>
                    <img alt='check' id='check' className='check' src={require('./images/check.png')}></img>
                    <p className='lipar'>More than 3M daily users to access your listings</p>
                </div>
                <div className='checklist'>
                    <img alt='check' id='check' className='check' src={require('./images/check.png')}></img>
                    <p className='lipar'>More than 3M daily users to access your listings</p>
                </div>
                <div className='checklist'>
                    <img alt='check' id='check' className='check' src={require('./images/check.png')}></img>
                    <p className='lipar'>Over 10M+ existing listings</p>
                </div>
            </div>
            </div>
            <img alt='adventpic4' id='adventpic4' className='adventpic4' src={require('./images/picadvent4.png')}></img> 
        </section>

        <section className='sec3'>
            <div className='section3'>
            <div className='sec3sec'>
                <div className='sec3cont'>   
                <div className='boxes2'>
                <div className='bx3'>
                    <img alt='pinl' id='pink' className='yellowbox' src={require('./images/rectangle.png')}></img>
                </div>
                <div className='bx4'>
                    <img alt='mark' id='mark' className='logobox' src={require('./images/Icon.png')}></img>
                </div>
                </div>
                <div className='sec3cont2'>
                <p className='dash'>Dashboard</p>
                <h3 className='sec3h3'>Manage all of your listings in one place</h3>
                <div className='simple'>
                <Link to ='/' className='simp'>It's that simple <FaAngleRight className='angle' /></Link>
                </div>
                </div>
                </div> 
                <div className='sec3img'>
                    <img alt='adventpic5' id='adventpic5' className='picadvent5' src={require('./images/picadvent5.png')}></img>
                    <img alt='aventpic6' id='adventpic6' className='picadvent6' src={require('./images/picadvent6.png')}></img>   
                </div>
            </div>
                <div className='sec3sec3'>
                <div className='sec3head'> 
                <h3 className='reach'>Reach target audience</h3>
                <p className='reachpar'>with over</p>
                </div>
                <div className='num'>
                <div className='num1'>
                    <p className='num1par1'>12K+</p>
                    <p className='num1par2'>Daily hotel deals</p>
                </div>
                <div className='num2'>
                    <p className='num2par1'>7K+</p>
                    <p className='num2par2'>Hourly flight deals</p>
                </div>
                <div className='num2'>
                    <p className='num2par1'>15K+</p>
                    <p className='num2par2'>Daily tour packages</p>
                </div>
                </div>
                </div>
            </div>
        </section>

        <section className='sec4'>
            <div className='faqheadpar'>
            <h3 className='faq'>FAQs</h3>
            <p className='faqhead'>answers to all your questions</p>
            </div>

            <div className='questsec'>
            <div className='questsec1'>
                <div className='quest1'>
                <hr/>
                <div className='parangle'>
                <p className='questsecpar'>What happens if my property is damaged by a guest?</p>
                <FaAngleDown className='angledown' />
                </div>
                <hr/>
                </div>
                <div className='quest2'>
                <hr/>
                <div className='parangle'>
                <p className='questsecpar'>What happens if my property is damaged by a guest?</p>
                <FaAngleDown className='angledown' />
                </div>
                <hr/>
                </div>
                <div className='quest2'>
                <hr/>
                <div className='parangle'>
                <p className='questsecpar'>What happens if my property is damaged by a guest?</p>
                <FaAngleDown className='angledown' />
                </div>
                <hr/>
                </div>
            </div>
            <div className='questsec2'>
                <div className='quest1'>
                <hr/>
                <div className='parangle'>
                <p className='questsecpar'>What happens if my property is damaged by a guest?</p>
                <FaAngleDown className='angledown' />
                </div>
                <hr/>
                </div>
                <div className='quest2'>
                <hr/>
                <div className='parangle'>
                <p className='questsecpar'>What happens if my property is damaged by a guest?</p>
                <FaAngleDown className='angledown' />
                </div>
                <hr/>
                </div>
                <div className='quest2'>
                <hr/>
                <div className='parangle'>
                <p className='questsecpar'>What happens if my property is damaged by a guest?</p>
                <FaAngleDown className='angledown' />
                </div>
                <hr/>
                </div>
            </div>
            </div>
        </section>

        <section className='sec5'>
            <div className='section5'>
                <div className='sec5sec1'>
                    <img alt='adventpic7' id='adventpic7' className='picadvent7' src={require('./images/picadvent7.png')}></img>

                    <div className='info'>
                        <h3 className='infoh3'>Never miss out on Offers and Updates</h3>
                        <p className='infopar'>Enter your email to email to enable Us send you Offers and Updates</p>

                        <div className='inputinfo'>
                        <label for='infoinput' className='infoinput'></label>
                        <input type='email' id='email' className='infoemial' placeholder='themail@mailingsystem.com'></input>
                        </div>
                        <button className='infobutn'><Link to='/' className='infolink'> Get Offers and Updates </Link> </button>
                    </div>

                </div>
            </div>
        </section>
    </div>
    <div className='sec5sec2'>
                    <div className='regcont'>
                    <h3 className='regh3'>Not registered yet?</h3>
                    <p className='regpar'>sign in or register to start posting your listings</p>
                    </div>
                    <div className='regbutns'>
                        <button className='regbutn1'>Sign in</button>
                        <button className='regbutn2'>Register </button>
                    </div>
                </div>

    </div>
    <Footer />    
    </>
  )
}

export default Main
