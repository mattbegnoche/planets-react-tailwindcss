/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

export default function Navlink({ name }) {
  return <li className="uppercase text-xs">{name}</li>;
}

Navlink.PropTypes = {
  name: PropTypes.string.isRequired,
};
