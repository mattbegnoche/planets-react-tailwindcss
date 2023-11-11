/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

export default function Navlink({ name }) {
  return (
    <li className="uppercase text-xs font-bold tracking-wider opacity-75 hover:opacity-100">
      {name}
    </li>
  );
}

Navlink.PropTypes = {
  name: PropTypes.string.isRequired,
};
