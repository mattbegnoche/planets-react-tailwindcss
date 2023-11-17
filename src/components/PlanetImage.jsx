/* eslint-disable react/prop-types */
export default function PlanetImage({ planetData, planet, content }) {
  return (
    <div className="md:col-span-4 flex items-center justify-center">
      {content === "geology" || content === "overview" ? (
        <div className="relative">
          <img
            className="scale-50 md:scale-75 lg:scale-100"
            src={planetData[planet].images.planet}
            alt={planetData[planet].name}
          />
          {content === "geology" ? (
            <img
              className=" scale-50 md:scale-75 lg:scale-100 absolute left-1/2 top-1/2 translate-x-[-50%] md:translate-y-12 w-40"
              src={planetData[planet].images.geology}
              alt={planetData[planet].name}
            />
          ) : null}
        </div>
      ) : (
        <img
          className="scale-50 md:scale-75 lg:scale-100"
          src={planetData[planet].images.internal}
        />
      )}
    </div>
  );
}
