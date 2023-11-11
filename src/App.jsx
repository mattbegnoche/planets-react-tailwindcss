import { useState } from "react";
import Navbar from "./Navbar";
import Planets from "./Planets";
import Stars from "./Stars";
import data from "./data";

function App() {
  const planetData = data;
  const [planet, setPlanet] = useState(0);
  return (
    <div className="bg-planetGray-900 min-h-screen text-white ">
      <Navbar planetData={planetData} planet={planet} />
      <Planets planetData={planetData} planet={planet} />
      <Stars />
    </div>
  );
}

export default App;
