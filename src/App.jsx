import { useState } from "react";
import Navbar from "./Navbar";
import Planet from "./Planet";
import Stars from "./Stars";
import data from "./data";

function App() {
  const planetData = data;
  const [planet, setPlanet] = useState(2);

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
    </div>
  );
}

export default App;
