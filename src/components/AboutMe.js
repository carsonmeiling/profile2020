import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import profilePic from '../images/profilePic.jpeg';

const AboutMe = () => (


    <>
  <Grid columns={3} className='about-container'>
    <Grid.Row>
      <Grid.Column></Grid.Column>
      <Grid.Column>
        <Image src={profilePic} size='medium' circular centered />
      </Grid.Column>
      <Grid.Column></Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}></Grid.Column>
      <Grid.Column width={5} centered>
        <p>I am a Web Developer based in Salt Lake City, and I enjoy building clean and functional web applications.
        When I am not building applications, I enjoy a good cup of coffee and few rounds of pickleball.

        </p>
      </Grid.Column>
      <Grid.Column width={5}></Grid.Column>
      <Grid.Column width={3}></Grid.Column>
    </Grid.Row>
    
    <Grid.Row>
      <Grid.Column width={3}></Grid.Column>
      <Grid.Column width={5} centered></Grid.Column>
      <Grid.Column width={5}>
        <p>My wife and I love to travel. We are amateur scuba divers, and will take every chance we can to jump in the water. </p>
      </Grid.Column>
      <Grid.Column width={3}></Grid.Column>
    </Grid.Row>

  </Grid>

  </>

)


export default AboutMe;

