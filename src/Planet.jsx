/* eslint-disable react/prop-types */
import Card from "./Card";
import Button from "./Button";
import { useState } from "react";

export default function Planet({ planetData, planet }) {
  const [content, setContent] = useState("overview");

  function handleContent(content) {
    setContent(content);
  }

  return (
    <div className="grid grid-cols-6 max-w-7xl mx-auto px-8 pt-28 pb-14 gap-20">
      <div className="col-span-4 flex items-center justify-center">
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
      <div className="col-span-2 flex flex-col gap-10">
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
        <div className="flex flex-col gap-4">
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
      </div>
      <div className="col-span-6 grid grid-cols-4 gap-8">
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
