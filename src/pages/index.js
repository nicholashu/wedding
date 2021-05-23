import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

import './styles.scss';

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container>
      <audio id="player" src="Pérez Prado - Patricia.mp3" ></audio>
      <div class="block first">
        <div class="content">
          <div class="heading">
            <h1>
              BRITTANY FREEMAN
            </h1>
            <div class="frame noisy">
              <img src="profile.png" />
            </div>
            <h1>NICHOLAS HU</h1>
          </div>
          <img class="hearts" src="hearts.png" />
          <button class="winnie" onclick="document.getElementById('player').play()">
            <img src="winnie-click.png" />
          </button> 
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
        <img class="truck" src="truck.png" />
      </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
