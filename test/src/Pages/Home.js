import React from 'react'
import Navbar from '../Components/Navbar'
import cvImage from '../Assets/images/cv.png';

function Home() {
  return (
    <div>
      <Navbar />
      <div className='home'>
        <div className='left'>
          <div className='smallName'>
            <h3 className='smallName-h3'> Brille Kheirel Alpuerto </h3>
            <p className='smallName-p'> Available for internship</p>
          </div>
          <div className='bigName'>
            <h1 classname='bigName-h1'>Hi I'm,
              <br />Brille Alpuerto</h1>
            <p classname='bigName-p'>An aspiring Software Engineer with a technical background of <br />HTML/CSS/JavaScript/PHP/MySQL + Basic SEO</p>
          </div>

        </div>

        <div className='right'>
          <div className='Brille-Image'>
            <img src={cvImage} alt='brille'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
