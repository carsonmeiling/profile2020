import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

const LandingPage = (picture1, picture2) => (

  // <Container>
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column>
          {/* Photo by Casey Horner on Unsplash */}
          <Image src={require('../images/forest.jpg')} size='massive' stretched />
        </Grid.Column>
        <Grid.Column>
          {/* Photo by takahiro taguchi on Unsplash */}
          <Image src={require('../images/buildings.jpg')} size='massive' stretched />
        </Grid.Column>
      </Grid.Row>

    </Grid>

  // </Container>
)

export default LandingPage;

