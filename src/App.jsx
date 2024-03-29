import "./App.css";
import helpHarbor from "../images/helpHarbor.png";
import linkedInLogo from "../images/linkedInLogo.png";
import guessingGame from "../images/guessingGame.png";
import email from "../images/email.png";
import dice6 from "../images/dice6.png";
import arcade from "../images/arcade.gif";

function App() {
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Document</title>
        </head>
        <body>
          {/* about me ------------------------------------------------------------ */}
          <div class="aboutMe">
            <div class="imageSpot"> My handsome face here</div>

            <div class="aboutDesc">
              <h3>About Me</h3>
              <p>
                Hello! My name is Arthur Barzul and welcome to my portfolio
                page! I graduated Full Stack Academy in December 21st, 2023. I
                am currently working hard to enhance my skills as a developer by
                creating projects, mini-games and professional websites for
                businesses.
              </p>
              <p>
                If you need more info, a website made or any question in
                general, contact me on any of the options on the contact section
                of my site!
              </p>
            </div>
          </div>
          {/* about me ------------------------------------------------------------ */}

          {/* projects ----------------------------------------------------------------------- */}
          <div class="projectContainer">
            <div class="projectSection">
              <h3>Projects</h3>

              <div class="allProjects">
                <div class="helpharborLogo">
                  <div class='pin'>📍</div>
                  <a href="https://helpharbor.onrender.com">
                    <img
                      class="logoPics"
                      id="hhimg"
                      src={helpHarbor}
                      alt="helpharborlogo"
                    />
                    <li class="logoTexts" id="hht">
                      HelpHarbor
                    </li>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* projects ----------------------------------------------------------------------- */}

          {/* mini games ----------------------------------------------------------------------------- */}
          <div class="mgContainer">
            <img class="sectionImage" src={arcade} alt="arcadegif" />
            <div class="miniGamesSection">
              <h3>Mini-Games</h3>

              <div class="allMiniGames">
                <div class="guessingGameLogo">
                  <a href="https://artsguessinggame.netlify.app">
                    <img
                      class="logoPics"
                      id="question"
                      src={guessingGame}
                      alt="guessing game"
                    />
                    <li class="logoTexts" id="guessingGame">
                      Guessing Game
                    </li>
                  </a>
                </div>
                <div class="pigGameLogo">
                  <a href="https://arthurspiggame.netlify.app">
                    <img class="logoPics" id="dice6" src={dice6} alt="dice" />
                    <li class="logoTexts" id="pigGame">
                      Pig Game
                    </li>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* mini games ----------------------------------------------------------------------------- */}

          {/* contact ------------------------------------------------------------------------------------- */}
          <div class="contactSection">
            <h3>Contact</h3>

            <div class="contactLogos">
              <a href="https://linkedin.com/in/arthurbarzul">
                <img class="LI" src={linkedInLogo} alt="LinkedIn Logo" />
                <div class="logoTexts">LinkedIn</div>
              </a>

              <a href="mailto:arthur91021@gmail.com">
                <img class="emailLogo" src={email} alt="email logo" />
                <div class="logoTexts">Email</div>
              </a>
            </div>
          </div>
          {/* contact ------------------------------------------------------------------------------------- */}
        </body>
      </html>
    </>
  );
}

export default App;
