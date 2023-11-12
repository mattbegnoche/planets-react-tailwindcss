/* eslint-disable react/prop-types */
import Navlink from "./Navlink";
export default function Navbar({ planetData, onSetPlanet }) {
  return (
    <nav className="flex flex-row justify-between items-center px-8 border-b border-planetGray-700">
      <span className="uppercase font-antonio font-semibold text-3xl tracking-tighter">
        The Planets
      </span>
      <button className="">
        <div className="nav-btn-line"></div>
        <div className="nav-btn-line"></div>
        <div className="nav-btn-line"></div>
      </button>
      <ul className=" flex  hidden md:flex-row flex-col md:gap-8 md:static md:w-auto md:h-auto md:bg-transparent bg-planetGray-900 fixed top-8 w-full left-0 h-full z-10 px-6 py-11">
        {planetData.map((planetItem, planetIndex) => (
          <Navlink
            index={planetIndex}
            key={planetItem.name}
            name={planetItem.name}
            onSetPlanet={onSetPlanet}
          />
        ))}
      </ul>
    </nav>
  );
}
