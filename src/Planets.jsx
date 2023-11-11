/* eslint-disable react/prop-types */
import Planet from "./Planet";

export default function Planets({ planetData }) {
  return (
    <div className="container mx-auto">
      <Planet planetData={planetData} />
    </div>
  );
}
