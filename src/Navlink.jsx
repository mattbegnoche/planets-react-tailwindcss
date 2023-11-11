/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import iconCheveron from "./assets/icon-chevron.svg";

export default function Navlink({ name }) {
  return (
    <li className="uppercase relative text-xs font-bold tracking-wider opacity-75 py-8 px-4 hover:opacity-100 transition-all duration-500 ease-in-out  group">
      <div className="bg-mercury bg-venus bg-earth bg-mars bg-saturn bg-jupiter bg-uranus bg-neptune hidden"></div>
      <div
        className={`absolute top-0 opacity-0 left-0 w-full h-1 bg-${name.toLowerCase()} group-hover:opacity-100 transition-all duration-500 ease-in-out`}
      ></div>
      <div
        className={`w-5 h-5 rounded-full bg-${name.toLowerCase()} md:hidden`}
      ></div>
      {name}
      <img
        className="inline-block ml-2 md:hidden"
        src={iconCheveron}
        alt="Cheveron Icon"
      />
    </li>
  );
}

Navlink.PropTypes = {
  name: PropTypes.string.isRequired,
};
