import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import profilePic from '../images/profilePic.jpeg';

const AboutMe = () => (

  <>
  <Grid columns={3} className='about-container'>
    <Grid.Row>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column>
        <Image src={profilePic} size='medium' circular />
      </Grid.Column>
      <Grid.Column>
        
      </Grid.Column>

    </Grid.Row>
  </Grid>

  </>
)

export default AboutMe;

