/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import iconCheveron from "./assets/icon-chevron.svg";

export default function Navlink({ name }) {
  return (
    <li className="uppercase relative text-xs font-bold tracking-wider opacity-75 hover:opacity-100 py-8 px-4">
      <div className="absolute top-0 left-0 w-full h-1 bg-merucry"></div>
      <div className="w-5 h-5 rounded-full bg-merucry"></div>
      {name}
      <img
        className="inline-block ml-2"
        src={iconCheveron}
        alt="Cheveron Icon"
      />
    </li>
  );
}

Navlink.PropTypes = {
  name: PropTypes.string.isRequired,
};
