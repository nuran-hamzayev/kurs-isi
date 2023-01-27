import React from 'react'
import "../navbar.css";


// import logo from '../assets/svgs/logo.svg';

function Navbar () {
  
  return (
    
  <nav className="nav">
        <div>
          <a class="nav__logo_one" href="Britlexlogo">
            <img src="https://nvyrsta.github.io/britlex/img/logo.png" alt="logo" />
          </a>
        </div>

        <div className="womenphoto">
          <img src="https://nvyrsta.github.io/britlex/img/hero-img.png" alt="womenphoto" />
        </div>

        <div className="lampalogo">
          <img src="https://nvyrsta.github.io/britlex/img/light-bulb.png" alt="" />

        </div>
      
        <div className="skill_img1">
          <img src="" alt="" />

        </div>




      <ul className='nav__menu'>
        <li className="nav__item">
          <a href="#" className="nav__link">Home</a>
          </li>
        <li className='nav_item'> 
          <a href="#" className="nav__link">Skills</a>
        </li>
        <li>
          <a href="#" className="nav__link">About Us</a>
        </li>
        <li>
          <a href="#" className="nav__link">Pricing</a>
        </li>
        <li>
          <a href="#" className="nav__link">Contacts</a>
        </li>
      </ul>

      <button className="button">
        Let's Talk
      </button>

      <button className="getstarted">
        Get started

      </button>

      
        <h2 className="hero_title">Learn <br /> Any Foreign Language</h2>
        
        <h3 className="hero_paragraf">With our teachers who write a program for <br /> 
each student, you will be able to make your <br />
first sketch after the first lesson.</h3>
   
{/* CONTAINER */}



<h2 className='title'>Skills</h2>

  <div className='skill_one_card'>
    <div className='skill_one_img'>
      <img src="https://nvyrsta.github.io/britlex/img/speaking.png" alt="image" />
    </div>
    <h3 className='skills_one_name'>Speaking</h3>
    <p className='skill_one_paragraf'>
    Improve your English skills and confidence. <br /> Live classes and
    interactive lessons online. <br /> 20% extra free for a limited time only
    </p>

    <p className='skill_two_paragraf'>
    Learn English online and improve your <br /> skills through our high-quality courses <br /> and resources – all designed for adult <br /> language learners.
    </p>

    <button className='learnmore'>Learn More</button>
     
     <div className='skill_two_card'>
      <div className='skill_two_img'>
        <img src="https://nvyrsta.github.io/britlex/img/writing.png" alt="image" />
      </div>
      <h3 className='skill_two_name'>Writing</h3>
      <p className='skill_three_paragraf'>
      One of the most important and extensive <br />
areas of natural science, the science that <br />
studies substances, also their composition 
      </p>
      <button className='learnmore_two'>Learn More</button>

     </div>

     <div className='skill_three_card'>
      <div className='skill_three_img'>
        <img src="https://nvyrsta.github.io/britlex/img/reading.png" alt="image" />
      </div>
      <h3 className='skill_three_name'>Reading</h3>
      <p className='skill_four_paragraf'>perception and response actions of the user <br />
      resulting from the use and/or upcoming use <br /> of the product, system or service</p>

      <button className='learnmore_three'>Learn More</button>
     </div>

     <div className='skill_four_card'>
      <div className='skill_four_img'>
        <img src="https://nvyrsta.github.io/britlex/img/listening.png" alt="photo" />
      </div>
      <h3 className='skill_four_name'>Listening</h3>
      <p className='skill_five_paragraf'>Here you can find activities to practise <br />
your listening skills. Listening will help you <br />
to improve your understanding </p>

      <button className='learnmore_four'>Learn More</button>
     </div>

     <div className='about_image'>
      <img src="https://nvyrsta.github.io/britlex/img/about-us.png" alt="photo" />
     </div>
     <p className='aboutus'>About Us</p>
     <p className='aboutusparagraf'>The model offers a framework for discussing problems related <br /> to the user's experience, as well as possible ways and means of <br /> solving them. Application development begins at the top level <br /> (strategy), where the future software product is described quite <br /> abstractly from the point of view of the expectations of both <br /> users and the customer.
     </p>
    
    </div>

    <div className='about_result_one'>    
    <p className='aboutnumber'>800</p>
    <p className='pupils'>Pupils</p>
    </div>

    <div className='about_result_two'>
      <p className='aboutnumber_two'>18</p>
      <p className='teachers'>Teachers</p>
    </div>

    <div className='about_result_three'>
      <p className='aboutnumber_three'>6</p>
      <p className='foreign_languages'>Foreign languages</p>
    </div>

    <h2 className='pricing'>Pricing</h2>
    
    
    <div className='pricing_img'>
      <img src="https://nvyrsta.github.io/britlex/img/self-study.png" alt="photo" />
    </div>
    <div className='pricing_card'></div>
    <h2 className='pricing_name'>Self-study online course</h2>
    <p className='pricing_paragraf'>Start learning English online in live classes <br /> with qualified EC teachers and students <br /> from all over the world.</p>
    <p className='value_one'> £5.99</p>
    <p className='value_one_paragraf'>per month</p>

     
     <div className='pricing_img_two'>
      <img src="	https://nvyrsta.github.io/britlex/img/online-classes.png" alt="photo" />
     </div>
    <div className='pricing_card_two'></div>
    <h2 className='pricing_name_two'>Live online classes</h2>
    <p className='pricing_paragraf_two'>Interactive group classes with expert <br />
      teachers. Free 7-day trial <br /></p>
      <p className='value_two'> £12.99</p>
      <p className='value_two_paragraf'>per month</p>


      <div className='pricing_img_three'>
        <img src="	https://nvyrsta.github.io/britlex/img/personal-tuition.png" alt="photo" />
      </div>
      <div className='pricing_card_three'></div>
      <h2 className='pricing_name_three'>Personal Tuition</h2>\
      <p className='pricing_paragraf_three'>Online one-to-one English tutoring – enjoy <br />
      our first session for only $1</p>
      <p className='value_three'> £20.99</p>
      <p className='value_three_paragraf'>per month</p>
      
      


      <footer>
      
      <div className='contactus_img'>
        <img src="	https://nvyrsta.github.io/britlex/img/contact-us.png" alt="" />
      </div>
      <h2 className='contact_us'>Contact Us</h2>
      <p className='contactus_paragraf'>Discover your current English level by taking our free online English test.Sign <br /> up to our newsletter for learning tips and free resources</p>
      
      <input className="contact_email" type="email" name='email' placeholder='Enter Your E-mail' required />
      <button className='subscribe_button'>Subscribe</button>
    
    <hr className='hr'/>

    <div className='britlexlogo_two'>
      <img src="https://nvyrsta.github.io/britlex/img/logo.png" alt="" />
    </div>
    <p className='endparagraf'>Terms and Conditions • Privacy Policy • Cookie Policy</p>
    
    </footer>

    </nav>
        
  );
}


export default Navbar