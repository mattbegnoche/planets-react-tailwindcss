/* eslint-disable react/prop-types */
import iconCheveron from "../assets/icon-chevron.svg";

export default function Navlink({ name, onSetPlanet, index, setNavOpen }) {
  return (
    <li>
      <button
        onClick={() => onSetPlanet(index) & setNavOpen(false)}
        className="uppercase md:border-none border-b pr-2 md:pr-0 border-planetGray-700 relative md:text-xs font-bold tracking-wider opacity-75 md:py-8 py-5 hover:opacity-100 flex flex-row items-center justify-between w-full transition-all duration-500 ease-in-out group"
      >
        <div className="flex flex-row gap-6">
          <div
            className={`absolute top-0 opacity-0 left-0 w-full h-1 bg-${name.toLowerCase()} md:group-hover:opacity-100 transition-all duration-500 ease-in-out`}
          ></div>
          <div
            className={`w-5 h-5 rounded-full bg-${name.toLowerCase()} md:hidden`}
          ></div>

          <span>{name}</span>
        </div>
        <img
          className="inline-block ml-2 md:hidden"
          src={iconCheveron}
          alt="Cheveron Icon"
        />
      </button>
    </li>
  );
}
