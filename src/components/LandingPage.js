import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import forestImg from '../images/forest.jpg'
import bImg from '../images/buildings.jpg'

const LandingPage = () => {

  
  return(

    <div className='landing'>
        <div className='landing-column-left'>
          {/* Photo by Casey Horner on Unsplash */}
          <Image src={forestImg} size='massive' stretched />
        </div>
        {/* <div className='landing-hello'>
          <h2>Hello.</h2>
        </div> */}
        <div className='landing-column-right'>
          {/* Photo by takahiro taguchi on Unsplash */}
          <Image src={bImg} size='massive' stretched />
        </div>
    </div>

)

}

export default LandingPage;

