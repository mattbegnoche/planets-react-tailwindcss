/* eslint-disable react/prop-types */
export default function PlanetImage({ planetData, planet, content }) {
  return (
    <div className="md:col-span-4 flex items-center justify-center">
      {content === "geology" || content === "overview" ? (
        <div className="relative">
          <img
            src={planetData[planet].images.planet}
            alt={planetData[planet].name}
          />
          {content === "geology" ? (
            <img
              className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-12 w-40"
              src={planetData[planet].images.geology}
              alt={planetData[planet].name}
            />
          ) : null}
        </div>
      ) : (
        <img src={planetData[planet].images.internal} />
      )}
    </div>
  );
}
