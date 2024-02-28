import "./App.css";
import helpHarbor from "../images/helpHarbor.png";
import linkedInLogo from "../images/linkedInLogo.png";
import guessingGame from "../images/guessingGame.png";

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
          <div class="projectSection">
            <h3>Projects</h3>
            <div class="logos">
              <a href="https://helpharbor.onrender.com">
                <img class="hhl" src={helpHarbor} alt="helpharbor logo" />
                <div class="hhlogotext">HelpHarbor</div>
              </a>
            </div>
          </div>
          {/* projects ----------------------------------------------------------------------- */}

          {/* mini games ----------------------------------------------------------------------------- */}
          <div class="miniGamesSection">
            <h3>Mini-Games</h3>
            <a href="https://artsguessinggame.netlify.app">
              <img class="GG" src={guessingGame} alt="guessing game" />
            </a>
          </div>
          {/* mini games ----------------------------------------------------------------------------- */}

          {/* contact ------------------------------------------------------------------------------------- */}
          <div class="contactSection">
            <h3>Contact</h3>
            <a href="https://linkedin.com/in/arthurbarzul">
              <img class="LI" src={linkedInLogo} alt="LinkedIn Logo" />
            </a>
          </div>

          {/* contact ------------------------------------------------------------------------------------- */}
        </body>
      </html>
    </>
  );
}

export default App;
