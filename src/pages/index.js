import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

import Winnie from 'components/Winnie';

import ProfileImage from 'assets/images/profile.png';
import Hearts from 'assets/images/hearts.png';
import Truck from 'assets/images/truck.png';

import './styles.scss';

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Britt &amp; Nick's Wedding</title>
      </Helmet>
      <Container>
      <div class="block first">
        <div class="content">
          <div class="heading">
            <h1>
              BRITTANY FREEMAN
            </h1>
            <div class="frame noisy">
              <img src={ProfileImage} />
            </div>
            <h1>NICHOLAS HU</h1>
          </div>
          <img class="hearts" src={Hearts} />
         <Winnie />
        </div>
      </div>

      <div class="block second">
        <div class="content">
          <div class="heading">
            <div class="offset-box">
              <h1>
                ARE GETTING MARRIED!
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div class="block third">
        <div class="content">
          <div class="heading">
            <h1>
              CELEBRATE WITH US
            </h1>
          </div>
        </div>
      </div>

      <div class="block fourth">
        <div class="content">
          <div class="heading">
            <h1>
              CECCHELE MOTORS
            </h1>
            <h2>29 PALMERSTON STREET</h2>
            <br/>
            <h4>21 NOVEMBER 2021 @ 4PM</h4>
          </div>
        </div>
        <img class="truck" src={Truck} />
      </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
