import { useState } from "react";
import Navbar from "./Navbar";
import Planets from "./Planets";
import data from "./data";

function App() {
  const planetData = data;
  const [planet, setPlanet] = useState("");
  return (
    <div className="bg-planetGray-900 min-h-screen text-white font-spartan">
      <Navbar planetData={planetData} />
      <Planets planetData={planetData} />
    </div>
  );
}

export default App;
