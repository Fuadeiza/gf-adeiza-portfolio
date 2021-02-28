<template>
  <div>
    <div class="navmobile">
      <Bubble v-if="mobileView">
        <scrollactive class="nav-items">
          <a href="#homeView" class="scrollactive-item">
            <i class="fa fa-home"> <span class="nav-item"> Home</span> </i>
          </a>
          <a href="#about" class="scrollactive-item">
            <i class="fa fa-file"> <span class="nav-item"> About</span></i>
          </a>
          <a href="#projects" class="scrollactive-item">
            <i class="fa fa-tasks"><span class="nav-item"> Projects</span></i>
          </a>
          <a href="#contact" class="scrollactive-item">
            <i class="fa fa-id-card">
              <span class="nav-item"> Contacts</span></i
            >
          </a>
        </scrollactive>
        <div class="social">
          <a href="https://github.com/Fuadeiza/"
            ><img src="icons/github.svg" class="social-icon"
          /></a>
          <a href="https://www.linkedin.com/in/garba-adeiza-fuad-772284123/"
            ><img src="icons/linkedin.svg" class="social-icon"
          /></a>
          <a href="#"><img src="icons/facebook.svg" class="social-icon" /></a>
          <a href="#"><img src="icons/twitter.svg" class="social-icon" /></a>
        </div>
      </Bubble>
      <div class="navdesktop" v-if="!mobileView">
        <div class="nav">
          <div class="logo">
            <img src="icons/G(Stroke).png" alt="" />
          </div>
          <scrollactive class="list-item">
            <ul>
              <li><a href="#about" class="scrollactive-item">About </a></li>

              <li>
                <a href="#projects" class="scrollactive-item">Projects </a>
              </li>
              <li><a href="#contact" class="scrollactive-item">Contact </a></li>
            </ul>
          </scrollactive>
        </div>
      </div>
    </div>

    <div id="app">
      <main id="page-wrap">
        <section id="homeView">
          <img id="g-anim" src="/icons/profile-image.jpg" alt="" />
          <div class="intro">
            <h4>
              Hello!<span class="wave">👋🏾</span> <span class="msg"></span>
            </h4>
            <h6>
              Checkout my Resume
              <span
                ><i class="fa fa-arrow-down" style="text-align: center"></i
              ></span>
            </h6>
            <a href="#" class="btn-resume">Download Resume</a>
          </div>
        </section>

        <section id="about">
          <div class="about-overlay">
            <div class="about-header"><h2>ABOUT ME</h2></div>
            <div class="about-text">
              My name is Garba Adeiza Fuad, and I have over 2years of experience
              in active programming.
              <div>
                During the course of these years up till now, I have met, worked
                and collaborated with great minds home and abroad to build tech
                that solves problem.
              </div>
              <div class="tech-used">
                <h6>So far these are the technologies I've used.</h6>
                <div class="tech-list">
                  <div class="web">
                    <h6>For Web development:</h6>
                    <ul>
                      <li>HTML/HTML5</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>VueJS</li>
                      <li>Bootstrap</li>
                      <li>Vuetify</li>
                    </ul>
                  </div>

                  <div class="ml">
                    <h6>With Python:</h6>
                    <ul>
                      <li>Python</li>
                      <li>Matplotlib</li>
                      <li>Django</li>
                      <li>Flask</li>
                      <li>Scikit-learn</li>
                      <li>Web Scraping/Crawling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects">
          <div class="project-header">
            <span class="line"> </span>
            <h2>Projects I've worked on :</h2>
            <span class="line"> </span>
          </div>
          <b-container>
            <div class="row-cover">
              <div class="pro-row">
                <div id="revoze" class="pro" v-b-modal.modalPopover>
                  <img src="./assets/revoze.png" alt="" />
                  <div>
                    <b-modal
                      id="modalPopover"
                      title="Revoze Construction App"
                      hide-footer
                    >
                      <p></p>
                      <p>
                        This
                        <a
                          href="https://www.ardentpeak.dev"
                          v-b-tooltip
                          title="Revoze Construction App"
                          >Web App</a
                        >
                        was made with Vuejs frontend, MySql and Django restAPI.
                      </p>

                      <p>
                        It is an online web app for construction materials order
                        workflow.
                      </p>
                    </b-modal>
                  </div>
                </div>
                <div id="baskotii" class="pro" v-b-modal.modalPopover-baskotii>
                  <img src="./assets/baskotii.png" alt="" />
                  <div>
                    <b-modal
                      id="modalPopover-baskotii"
                      title="Baskotii App"
                      hide-footer
                    >
                      <p></p>
                      <p>
                        <a
                          href="https://github.com/Fuadeiza/Baskotii-Django-App"
                          v-b-tooltip
                          title="Baskotii"
                          >Baskotii</a
                        >
                        is an e-commerce web app for selling cakes and biscuits
                        made with MySql and Django restframework with dual
                        languages (Arabic and English)
                      </p>
                    </b-modal>
                  </div>
                </div>
                <div
                  id="livingwriter"
                  class="pro"
                  v-b-modal.modalPopover-living
                >
                  <img src="./assets/livingwriter.png" alt="" />
                  <div>
                    <b-modal
                      id="modalPopover-living"
                      title="LivingWriter Web App"
                      hide-footer
                    >
                      <p></p>
                      <p>
                        This
                        <a href="#" v-b-tooltip title="Living Writers"
                          >Web App</a
                        >
                        was made with Vuejs and DRF.( A clone of Twine
                        <a href="#"></a> )
                      </p>

                      <p>
                        It is an web app for story telling with visual
                        representation/ tree diagrams to show hierachy of the
                        Story details.
                      </p>
                    </b-modal>
                  </div>
                </div>
              </div>
            </div>
            <div class="pro-row2">
              <div id="events" class="pro" v-b-modal.modalPopover-events>
                <img src="./assets/events.png" alt="" />

                <div>
                  <b-modal id="modalPopover-events" title="e-Vents" hide-footer>
                    <p></p>
                    <p>
                      <a
                        href="https://github.com/Fuadeiza/e-Vents"
                        v-b-tooltip
                        title="e-Vents"
                      >
                        e-Vents
                      </a>
                    </p>

                    <p>It is a 100% simple HTML and CSS made web application</p>
                  </b-modal>
                </div>
              </div>
              <div id="rock" class="pro" v-b-modal.modalPopover-rock>
                <img src="./assets/revoze.png" alt="" />
                <div>
                  <b-modal
                    id="modalPopover-rock"
                    title="Rock Paper Scissors"
                    hide-footer
                  >
                    <p></p>
                    <p>
                      <a
                        href="https://github.com/Fuadeiza/RockPaperScissors"
                        v-b-tooltip
                        title="Rock Paper Scissors"
                      >
                        e-Vents
                      </a>
                    </p>

                    <p>
                      It is a fun HTML, CSS and VanillaJs website for playing
                      rock paper scissors with the computer
                    </p>
                  </b-modal>
                </div>
              </div>
              <div id="music" class="pro" v-b-modal.modalPopover-music>
                <img src="./assets/rmusic.png" alt="" />
                <div>
                  <b-modal
                    id="modalPopover-music"
                    title="Music App"
                    hide-footer
                  >
                    <p></p>
                    <p>
                      <a
                        href="https://github.com/Fuadeiza/"
                        v-b-tooltip
                        title="e-Vents"
                      >
                        e-Vents
                      </a>
                    </p>

                    <p>It is a 100% simple Vuejs and CSS made web application for playing music from a playlist, with a simple UI </p>
                  </b-modal>
                </div>
              </div>
            </div>
          </b-container>
        </section>
        <section id="contact">
          <div class="contact-me">
            <div class="contact-header">
              <span class="line"> </span>
              <h1>Contact</h1>
              <span class="line"> </span>
            </div>

            <b-container>
              <div class="contact-content">
                <div class="if-text">
                  If you want to get intouch, Kindly send me an email or via any
                  of these other methods:
                </div>

                <div class="methods">
                  <a href="https://github.com/Fuadeiza/"
                    ><i class="fa fa-github"></i> @Fuadeiza</a
                  >
                  <a
                    href="https://www.linkedin.com/in/garba-adeiza-fuad-772284123/"
                    ><i class="fa fa-linkedin"></i>Garba Adeiza Fuad
                  </a>

                  <a href="mailto: garbafuad@gmail.com"
                    ><i class="fa fa-envelope"></i>garbafuad@gmail.com
                  </a>
                </div>
              </div>
            </b-container>
          </div>
        </section>
        <div class="footer">
          <div class="bottom-line"></div>
          <div class="made-by">
            <small>x Copyright 2021 ©. All rights reserved. </small>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { Bubble } from "vue-burger-menu";

export default {
  data: () => {
    return {
      mobileView: false,
      // modalShow: false,
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 768;
    },
  },
  components: {
    Bubble, // Register your components
    // PushRotate,
  },

  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap");
body {
  background-color: #2062a9;
  background: linear-gradient(to right bottom, #141e30, #243b55) !important;
}
#app {
  font-family: "Source Code Pro", monospace;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #2062a9;
  background: linear-gradient(to right bottom, #141e30, #243b55);
}
/* .overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(43, 51, 59, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
} */

.nav {
  display: flex;
  font-size: 1.2em;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: white;
  justify-content: space-between;
  z-index: 999;
  /* align-items: baseline; */
}

.navdesktop {
  height: 0vh;
}
.nav ul {
  list-style: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn-resume {
  color: #fff;
  background-color: transparent;
  border: 2px solid #fff;
  font-weight: 100;
  border-radius: 12px;
  padding: 8px 12px;
  transition: 0.5s;
  text-decoration: none;
}

.btn-resume:hover {
  text-decoration: none;
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #03e9f4;
}

.logo {
  margin-left: 20px;
  font-size: 1.4em;
  cursor: pointer;
  z-index: 4;
}
.logo img {
  width: 60px;
  padding: 5px;
}
.nav ul li {
  display: flex;
  margin-right: 30px;
  text-decoration: none;
  color: white;
}
.list-item {
  width: 50%;
  z-index: 5;
}
.nav ul li a {
  text-decoration: none;
  color: white;
  padding: 0.7em 0;
  transition: all 0.5s ease-out;
  transform-origin: left;
}
.nav ul li a:hover {
  border-bottom: 2px solid red;
  color: #03e9f4;
  text-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #03e9f4;
}
.nav ul li a:active {
  border-bottom: 2px solid red;
}
#homeView {
  display: flex;
  /* margin-top: 150px; */
  width: 100%;
  height: 100vh;
  margin-bottom: 20px;
  padding: 2px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
/* #about {
  width: 100%;
  height: 100vh;
  background-color: #2062a9;
  background-image: linear-gradient(135deg, #485461 0%, #165eb1 74%); */

.msg:before {
  content: "";
  animation: animate-msg infinite 15s;
  margin-top: 20px;
}

@keyframes animate-msg {
  0% {
    content: "I am Garba";
  }
  20% {
    content: "Je m'appelle Garba";
  }
  40% {
    content: "Mi nombre es Garba";
  }
  80% {
    content: "Orukọ mi ni Garba";
  }
  100% {
    content: "Sunana  Garba";
  }
}

#g-anim {
  animation-name: bounce;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  margin-bottom: 40px;
  width: 180px;
  border-radius: 80px;
  z-index: 1;
}
#g-anim img {
  z-index: -444;
}
/* @keyframes bounce {
  0%,
  20% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px) rotate(15deg);
  }

  40% {
    transform: translateY(-30px) rotate(30deg);
  }
  60% {
    transform: translateY(-15px) rotate(-30deg);
  }
  80%,
  100% {
    transform: translateY(-10) rotate(-15deg);
  }
} */

.wave {
  animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s; /* Change to speed up or slow down */
  animation-iteration-count: infinite; /* Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  } /* The following five values can be played with to make the waving more or less extreme */
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  } /* Reset for the last half to pause */
  100% {
    transform: rotate(0deg);
  }
}

.social {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-family: "Source Code Pro", monospace;
}

.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 300;
  letter-spacing: 2px;
  margin-bottom: 150px;
}

.social-icon {
  width: 30px;
  height: 30px;
}

.fa {
  color: white;
  margin: 20px;
  transition: 0.7s;
}

.fa:hover {
  border-bottom: 2px solid red;
  color: #03e9f4;
  text-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #03e9f4;
}
.fa:active {
  border-bottom: 2px solid red;
  color: #03e9f4;
}
.bm-item-list {
  color: #b8b7ad;
  /* margin-left: 10%; */
  font-size: 25px;
}

.bm-cross-button {
  height: 30px;
  width: 30px;
}

.cross-style {
  position: absolute;
  top: 20px;
  right: 5px;
  width: 30px;
  cursor: pointer;
}

.bm-burger-button {
  position: fixed;
  width: 30px;
  height: 20px;
  left: 20px;
  top: 20px;
  cursor: pointer;
  z-index: 3;
}
.bm-burger-bars {
  background-color: #ffff;
  border-radius: 2px;
}

.bm-overlay {
  background-color: #2062a9;
  background-image: linear-gradient(135deg, #485461 0%, #165eb1 74%);
}

.bm-menu {
  background: linear-gradient(135deg, #141e30 20%, #1c4472 50%) !important;
  /* opacity: 0.9; */
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
}
#about {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
}
.about-header h2 {
  padding: 20px;
}

.about-text {
  width: 90%;
  border: 1px dash red;
  /* justify-content: center; */
  align-items: center;
  display: flex;
  flex-direction: column;
  /* text-align: justify; */
}
.tech-used {
  margin-top: 20px;
}
.tech-used h6 {
  text-align: left;
}
.web h6,
.ml h6 {
  text-align: left;
}
.web li,
.ml li {
  color: #03e9f4;
  font-size: small;
  text-align: left;
}

.about-overlay {
  padding: 15px;

  box-shadow: 3px 15px 25px rgba(0, 0, 0, 0.6);

  display: flex;
  color: white;
  border-radius: 20px;
  width: 70%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s ease-in-out;
  background: rgba(0, 0, 0, 0.5);
}

.about-overlay:hover {
  transform: scale(1);
  box-shadow: 10px 10px 10px #000000;
}

.pro-row,
.pro-row2 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.pro {
  width: 360px;
  height: 250px;
  border-radius: 10px;
  background: white;
  transform: 0.4s ease-in-out;
  margin: 20px;
  /* padding: 2px; */
  animation: project-anim 3s forwards ease-in-out;
  transform: scale(1);
  transition: 1s;
}
@keyframes project-anim {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-3deg);
  }
  /* 50% {
    transform: rotate(0deg);
  } */
  75% {
    transform: rotate(3deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.pro:hover {
  box-shadow: 10px 10px 10px #000000;
  border: 1px solid #fff;
  animation: project-anim-hover 3s forwards ease-in-out;
  transform: scale(1);
  transition: 1s;
  opacity: 0.8;
}

@keyframes project-anim-hover {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-3deg);
  }
  /* 50% {
    transform: rotate(0deg);
  } */
  75% {
    transform: rotate(3deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.row-cover {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin-bottom: 100px; */
}

#projects {
  margin-top: 50px;
  color: #000000;
}

.line {
  width: 50px;
  background: #03e9f4;
  text-shadow: #212121;
  height: 2px;
  margin: 20px;
}
.project-header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: #212121;
}

.pro img {
  display: absolute;
  width: 360px;
  height: 250px;
  border-radius: 10px;
}

/* #baskotii {
  background: url("~@/assets/baskotii.png") no-repeat center/ cover;
}

#revoze {
  background: url("~@/assets/revoze.png") no-repeat center/ cover;
}
#livingwriter {
  background: url("~@/assets/livingwriter.png") no-repeat center/ cover;
}
#events {
  background: url("~@/assets/events.png") no-repeat center/ cover;
}
#rock {
  background: url("~@/assets/revoze.png") no-repeat center/ cover;
}
#music {
  background: url("~@/assets/revoze.png") no-repeat center/ cover;
} */

/* .label {
  width: 100%;
  height: 50%;
  margin-top: 125px;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-radius: 10px;
} */

#contact {
  margin-top: 30px;
  width: 100%;
  min-height: 90vh;
}
/* .if-text {
  text-align: start;
} */

.methods {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 45px;
}
.methods a {
  text-decoration: none;
  color: white;
  /* margin: 5px; */
}
.methods a:hover {
  color: #03e9f4;
  text-decoration: none;
}
.footer {
  min-height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 150px; */
  flex-direction: column;
  /* margin-bottom: 40px; */
}

.bottom-line {
  background: white;
  width: 70%;
  height: 2px;
}
</style>
