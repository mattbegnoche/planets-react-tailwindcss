/* eslint-disable react/prop-types */
import Navlink from "./Navlink";
export default function Navbar({ planetData, onSetPlanet }) {
  return (
    <nav className="flex flex-row justify-between items-center px-8 border-b border-planetGray-700">
      <span className="uppercase font-antonio font-semibold text-3xl tracking-tighter">
        The Planets
      </span>
      <ul className="flex flex-row gap-8">
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
