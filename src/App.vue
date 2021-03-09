<template>
  <div>
    <div class="navmobile">
      <Push :closeOnNavigation="true" v-if="mobileView" width="270">
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
          <a href="#"><img src="icons/twitter.svg" class="social-icon" /></a>
        </div>
      </Push>
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
              <!-- <li>
                <a
                  href="https://drive.google.com/file/d/1Xd_R2EzeY7NAnLqDDrWQmuIVe5iKj6lb/view?usp=sharing"
                  target="_blank"
                  >résumé</a
                >
              </li> -->
            </ul>
          </scrollactive>
        </div>
      </div>
    </div>

    <div id="app">
      <Menu />
      <main id="page-wrap">
        <section id="homeView">
          <img id="g-anim" src="/icons/profile-image.jpg" alt="" />
          <div class="intro">
            <h5>
              Hi there! <span class="wave">👋🏾</span> <span class="msg"></span>
            </h5>
            <br />
            <a
              href="https://drive.google.com/file/d/1Xd_R2EzeY7NAnLqDDrWQmuIVe5iKj6lb/view?usp=sharing"
              class="btn-resume"
              target="_blank"
            >
              Download Resume</a
            >
          </div>
        </section>

        <section id="about">
          <div class="about-overlay">
            <div class="about-header">
              <span class="line"></span>
              <h5>ABOUT ME</h5>
              <span class="line"></span>
            </div>
            <div class="about-text">
              <div class="intro-about">
                My name is Garba Adeiza Fuad, and I have over 2years of
                experience in active programming.
                <div>
                  During the course of these years up till now, I have met,
                  worked and collaborated with great minds home and abroad to
                  build tech that solves problem.
                </div>
              </div>
              <div class="tech-used">
                <h6>So far these are the technologies I've used.</h6>
                <div class="tech-list">
                  <div class="web">
                    <h6>For Web development:</h6>
                    <ul>
                      <li>HTML/HTML5</li>
                      <li>CSS/CSS3</li>
                      <li>JavaScript</li>
                      <li>VueJS/Vue Router/Vuex</li>
                      <li>Bootstrap</li>
                      <li>BootstrapVue</li>
                      <li>Vuetify</li>
                      <li>PostgreSQL</li>
                      <li>MySQL</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>

                  <div class="ml">
                    <h6>With Python:</h6>
                    <ul>
                      <li>Matplotlib</li>
                      <li>Scrapy</li>
                      <li>Django</li>
                      <li>Flask</li>
                      <li>Scikit-learn</li>
                      <li>TensorFlow</li>
                      <li>Web Scraping/Crawling</li>
                      <li>API integration/Development</li>
                    </ul>
                  </div>

                  <div class="dev-tools">
                    <h6>Other Tools:</h6>
                    <ul>
                      <li>Github</li>
                      <li>Visual Studio</li>
                      <li>Docker</li>
                      <li>AWS</li>
                      <li>Heroku</li>
                      <li>Jupyter Notebook</li>
                      <li>Linux</li>
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
            <h5>Projects I've worked on</h5>
            <span class="line"> </span>
          </div>
          <div class="project-cover">
            <div class="click">
              <h6><small>(Please click on images to see details)</small></h6>
            </div>
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
                      <a
                        href="https://www.ardentpeak.dev"
                        v-b-tooltip
                        title="Revoze Construction App"
                        >Revoze Constructions</a
                      >
                      was made with Vuejs frontend, MySql and Django rest
                      framework.
                    </p>

                    <p>
                      It is an online web app for construction materials order
                      workflow with different level of authorization( access and
                      privilege) depending on who's logged in.
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
                        target="_blank"
                        v-b-tooltip
                        title="Baskotii"
                        >Baskotii e-commerce</a
                      >
                      is an e-commerce web app for selling cakes and biscuits
                      made with MySql and Django restframework with dual
                      languages (Arabic and English)
                    </p>
                  </b-modal>
                </div>
              </div>
              <div id="livingwriter" class="pro" v-b-modal.modalPopover-living>
                <img src="./assets/livingwriter.png" alt="" />
                <div>
                  <b-modal
                    id="modalPopover-living"
                    title="LivingWriter Web App"
                    hide-footer
                  >
                    <p></p>
                    <p>
                      <a href="#" v-b-tooltip title="Living Writers"
                        >Living Writer</a
                      >
                      was made with Vuejs and Django rest framework.( A clone of
                      Twine
                      <a href="#"></a> )
                    </p>

                    <p>
                      It is a web app for story telling with visual
                      representation/ tree diagrams to show hierachy of the
                      Story details.
                    </p>
                  </b-modal>
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
                        target="_blank"
                        v-b-tooltip
                        title="e-Vents"
                      >
                        e-Vents
                      </a>
                    </p>

                    <p>
                      It is a 100% beautiful and amazing HTML and CSS landing
                      page.
                    </p>
                  </b-modal>
                </div>
              </div>
              <div id="rock" class="pro" v-b-modal.modalPopover-rock>
                <img src="./assets/rock.png" alt="" />
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
                        target="_blank"
                        v-b-tooltip
                        title="Rock Paper Scissors"
                      >
                        Rock Paper Scissors Game
                      </a>
                    </p>

                    <p>
                      It is a fun HTML, CSS and VanillaJs website for playing
                      rock paper scissors with a bot.
                    </p>
                  </b-modal>
                </div>
              </div>
              <div id="music" class="pro" v-b-modal.modalPopover-music>
                <img src="./assets/music.png" alt="" />
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
                        target="_blank"
                        v-b-tooltip
                        title="e-Vents"
                      >
                        Music App
                      </a>
                    </p>

                    <p>
                      It is a 100% simple Vuejs and CSS made web application for
                      playing music from a playlist, with a simple UI and
                      navigations.
                    </p>
                  </b-modal>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <div class="contact-header">
            <span class="line"></span>
            <h5>Contact</h5>
            <span class="line"></span>
          </div>

          <b-container>
            <div class="contact-content">
              <div class="if-text">
                If you want to get intouch, Kindly send me an email or via any
                of these other methods:
              </div>

              <div class="methods">
                <a href="https://github.com/Fuadeiza/" target="_blank"
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
        </section>
        <div class="footer">
          <div class="bottom-line"></div>
          <div class="made-by">
            <small>x Copyright 2021 ©. Garba Adeiza Fuad</small>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { Push } from "vue-burger-menu";

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
    // Register your components
    // PushRotate,
    Push,
    // Bubble,
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
  border: 1px solid #fff;
  font-weight: 100;
  border-radius: 12px;
  padding: 8px 8px;
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
  z-index: 999;
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
  /* margin-bottom: 20px; */
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
  width: 250px;
  border-radius: 50px;
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
  font-size: 25px;
}

.bm-cross-button {
  height: 30px !important;
  width: 30px !important;
}

.cross-style {
  position: absolute !important;
  top: 20px !important;
  right: 5px !important;
  width: 30px !important;
  cursor: pointer !important;
}

.bm-burger-button {
  position: fixed !important;
  width: 30px !important;
  height: 20px !important;
  left: 20px !important;
  top: 20px !important;
  cursor: pointer;
  z-index: 3;
}
.bm-burger-bars {
  background-color: #ffff !important;
  border-radius: 2px !important;
}

.bm-overlay {
  background-color: #2062a9;
  background-image: linear-gradient(135deg, #485461 0%, #165eb1 74%);
}

.bm-menu {
  background: linear-gradient(135deg, #141e30 20%, #1c4472 50%) !important;
  /* opacity: 0.9; */
  border-bottom-right-radius: 50px !important;
  border-top-right-radius: 50px !important;
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
.ml h6,
.dev-tools h6 {
  text-align: left;
}
h6 i {
  color: #03e9f4;
}
.web li,
.ml li,
.dev-tools li {
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
  width: 80%;
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
  margin: 10px;
  /* padding: 2px; */
  animation: project-anim 3s forwards ease-in-out;
  transform: scale(1);
  transition: 1s;
}

.pro img {
  width: 360px;
  height: 250px;
}
@keyframes project-anim {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  /* 50% {
    transform: rotate(0deg);
  } */
  75% {
    transform: rotate(5deg);
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

main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin-bottom: 100px; */
}

#projects {
  margin-top: 50px;
}

.project-header,
.contact-header,
.about-header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.line {
  width: 50px;
  height: 3px;
  background: #03e9f4;
  margin: 10px;
}

#contact {
  margin-top: 30px;
  width: 100%;
  min-height: 90vh;
}

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

.intro-about {
  display: flex;
  flex-direction: column;
  text-align: justify;
}

.bottom-line {
  background: white;
  width: 70%;
  height: 2px;
}
</style>
