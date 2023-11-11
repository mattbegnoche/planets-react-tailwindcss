/* eslint-disable react/prop-types */
import Card from "./Card";
import Button from "./Button";

export default function Planet({ planetData, planet }) {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-4 flex items-center justify-center">
        <div>
          <img
            src={planetData[planet].images.planet}
            alt={planetData[planet].name}
          />
          <img
            className="absolute bottom-0 left-50% translate-x-[-50%]"
            src={planetData[planet].images.planet}
            alt={planetData[planet].name}
          />
        </div>
        <img src={planetData[planet].images.planet} />
      </div>
      <div className="col-span-2">
        <h1 className="text-[5rem] uppercase font-semibold">
          {planetData[planet].name}
        </h1>
        <p>{planetData[planet].overview.content}</p>
        <p>{planetData[planet].structure.content}</p>
        <p>{planetData[planet].geology.content}</p>
        <div className="flex flex-col gap-4">
          <Button>
            <span>01 Overview</span>
          </Button>
          <Button>
            <span>02 Internal Structure</span>
          </Button>
          <Button>
            <span>03 Surface Geology</span>
          </Button>
        </div>
      </div>
      <div className="col-span-6 grid grid-cols-4">
        <Card>{planetData[planet].rotation}</Card>
        <Card>{planetData[planet].revolution}</Card>
        <Card>{planetData[planet].radius}</Card>
        <Card>{planetData[planet].temperature}</Card>
      </div>
    </div>
  );
}
