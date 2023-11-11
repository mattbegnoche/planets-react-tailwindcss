/* eslint-disable react/prop-types */
import Planet from "./Planet";

export default function Planets({ planetData, planet }) {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <Planet planetData={planetData} planet={planet} />
    </div>
  );
}
