import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import forestImg from '../images/forest.jpg'
import bImg from '../images/buildings.jpg'

const LandingPage = () => {

  
  return(

    // <Container>
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column>
          {/* Photo by Casey Horner on Unsplash */}
          <Image src={forestImg} size='massive' stretched />
        </Grid.Column>
        <Grid.Column>
          {/* Photo by takahiro taguchi on Unsplash */}
          <Image src={bImg} size='massive' stretched />
        </Grid.Column>
      </Grid.Row>

    </Grid>

// </Container>
)

}

export default LandingPage;

