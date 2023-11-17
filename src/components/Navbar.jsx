/* eslint-disable react/prop-types */
import { useState } from "react";
import iconHamburger from "../assets/icon-hamburger.svg";
import Navlink from "./Navlink";
export default function Navbar({ planetData, onSetPlanet }) {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="flex flex-row md:flex-col lg:flex-row justify-between items-center  md:pt-6 lg:pt-0 px-6 md:px-8 border-b border-planetGray-700 py-4 md:py-0">
      <span className="uppercase font-antonio font-semibold text-3xl tracking-tighter">
        The Planets
      </span>
      <button className="hidden">
        <div className="nav-btn-line"></div>
        <div className="nav-btn-line"></div>
        <div className="nav-btn-line"></div>
      </button>

      <ul
        className={` ${
          !navOpen && `hidden md:flex`
        }  flex md:p-0 md:flex-row flex-col md:gap-8 md:static md:w-auto md:h-auto md:bg-transparent bg-planetGray-900 fixed  top-[4.3rem] md:top-0 w-full left-0 h-full z-10 px-6 pt-10 overflow-auto`}
      >
        {planetData.map((planetItem, planetIndex) => (
          <Navlink
            setNavOpen={setNavOpen}
            index={planetIndex}
            key={planetItem.name}
            name={planetItem.name}
            onSetPlanet={onSetPlanet}
          />
        ))}
      </ul>
      <button
        className={` ${navOpen && `opacity-50`} md:hidden`}
        onClick={() => {
          setNavOpen(!navOpen);
        }}
      >
        <img src={iconHamburger} alt="Hamburger Icon" />
      </button>
    </nav>
  );
}
