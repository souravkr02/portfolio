import React from 'react';
import img1 from '../images/img1.JPG';

import Common from './Common';

const Home = () => {
      return (
      <>
        <Common name="I am" imgsrc={img1} visit="/about" btname="Have a look" />
      </>

    );
  };


export default Home;
