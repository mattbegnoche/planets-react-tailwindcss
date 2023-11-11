/* eslint-disable react/prop-types */
import Navlink from "./Navlink";
export default function Navbar({ planetData }) {
  return (
    <nav className="flex flex-row justify-between items-center px-8 py-6 border-b border-planetGray-700">
      <span className="uppercase font-antonio font-semibold text-3xl tracking-tighter">
        The Planets
      </span>
      <ul className="flex flex-row gap-8">
        {planetData.map((planet) => (
          <Navlink key={planet.name} name={planet.name} />
        ))}
      </ul>
    </nav>
  );
}
