import { useState } from "react";
import Navbar from "./Navbar";
import Planet from "./Planet";
import Stars from "./Stars";
import data from "../data";
import planetEarth from "../assets/planet-earth.svg";

function App() {
  const planetData = data;
  const [planet, setPlanet] = useState(0);
  function handlePlanet(planetIndex) {
    setPlanet(planetIndex);
  }

  return (
    <div className="bg-planetGray-900 min-h-screen text-white ">
      <Navbar
        planetData={planetData}
        planet={planet}
        onSetPlanet={handlePlanet}
      />
      <Planet planetData={planetData} planet={planet} />
      <Stars />
      {
        <div className=" md:bg-mercury bg-mercury border-mercury md:bg-venus bg-venus border-venus md:bg-earth bg-earth border-earth md:bg-mars bg-mars border-mars md:bg-saturn bg-saturn border-saturn md:bg-jupiter bg-jupiter border-jupiter md:bg-uranus bg-uranus border-uranus bg-neptune border-neptune md:bg-neptune  hidden"></div>
      }
      <img className="hidden" src={planetEarth} alt="planet earth" />
    </div>
  );
}

export default App;
