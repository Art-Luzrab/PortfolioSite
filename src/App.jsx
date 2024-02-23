import "./App.css";
import helpHarbor from "../images/helpHarbor.png";

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
              <p id="meDescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              </a>
            </div>
          </div>
          {/* projects ----------------------------------------------------------------------- */}

          {/* mini games ----------------------------------------------------------------------------- */}
          <div class="miniGamesSection">
            <h3>Mini-Games</h3>
          </div>
          {/* mini games ----------------------------------------------------------------------------- */}

          {/* contact ------------------------------------------------------------------------------------- */}
          <div class="contactSection">
            <h3>Contact</h3>
          </div>

          {/* contact ------------------------------------------------------------------------------------- */}
        </body>
      </html>
    </>
  );
}

export default App;
