/* eslint-disable react/prop-types */
import Card from "./Card";
import Button from "./Button";
import PlanetImage from "./PlanetImage";
import PlanetContent from "./PlanetContent";
import { useState } from "react";

export default function Planet({ planetData, planet }) {
  const [content, setContent] = useState("overview");

  function handleContent(content) {
    setContent(content);
  }

  return (
    <div className="md:grid md:grid-cols-6 text-center md:text-left max-w-7xl mx-auto md:px-8 pt-28 pb-14 md:gap-20">
      <PlanetImage content={content} planetData={planetData} planet={planet} />
      <PlanetContent>
        <div className="flex flex-col gap-6 ">
          <h1 className="text-[5rem] uppercase font-semibold">
            {planetData[planet].name}
          </h1>
          {content === "overview" && (
            <p>{planetData[planet].overview.content}</p>
          )}
          {content === "structure" && (
            <p>{planetData[planet].structure.content}</p>
          )}
          {content === "geology" && <p>{planetData[planet].geology.content}</p>}
        </div>
        <div className="flex flex-col gap-4 md:static md:auto absolute top-0 w-full">
          <Button
            onClick={handleContent}
            content={"overview"}
            curContent={content}
            planetData={planetData}
            planet={planet}
          >
            <span>01 Overview</span>
          </Button>
          <Button
            onClick={handleContent}
            content={"structure"}
            curContent={content}
            planetData={planetData}
            planet={planet}
          >
            <span>02 Internal Structure</span>
          </Button>
          <Button
            onClick={handleContent}
            content={"geology"}
            curContent={content}
            planetData={planetData}
            planet={planet}
          >
            <span>03 Surface Geology</span>
          </Button>
        </div>
      </PlanetContent>
      <div className="col-span-6 grid md:grid-cols-4 gap-8">
        <Card>
          <span className="card-title">Rotation Time</span>
          <h2 className="h2">{planetData[planet].rotation}</h2>
        </Card>
        <Card>
          <span className="card-title">REVOLUTION TIME</span>
          <h2 className="h2">{planetData[planet].revolution}</h2>
        </Card>
        <Card>
          <span className="card-title">radius</span>
          <h2 className="h2">{planetData[planet].radius}</h2>
        </Card>
        <Card>
          <span className="card-title">AVERAGE TEMP.</span>
          <h2 className="h2">{planetData[planet].temperature}</h2>
        </Card>
      </div>
    </div>
  );
}
