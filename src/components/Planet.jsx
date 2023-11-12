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
            <>
              <p>{planetData[planet].overview.content}</p>
              <a
                href={planetData[planet].overview.source}
                target="_blank"
                rel="noreferrer"
              >
                <span>Source : Wikipedia</span>
              </a>
            </>
          )}
          {content === "structure" && (
            <>
              <p>{planetData[planet].structure.content}</p>
              <a
                href={planetData[planet].structure.source}
                target="_blank"
                rel="noreferrer"
              >
                <span>Source : Wikipedia</span>
              </a>
            </>
          )}
          {content === "geology" && (
            <>
              <p>{planetData[planet].geology.content}</p>
              <a
                href={planetData[planet].geology.source}
                target="_blank"
                rel="noreferrer"
              >
                <span>Source : Wikipedia</span>
              </a>
            </>
          )}
        </div>
        <div className="flex md:flex-col flex-row justify-center gap-4 md:static md:auto absolute top-[4.25rem] w-full border-b border-planetGray-700 md:border-0 ">
          <Button
            onClick={handleContent}
            content={"overview"}
            curContent={content}
            planetData={planetData}
            planet={planet}
            number={"01"}
            text={"Overview"}
          >
            <div></div>
          </Button>
          <Button
            onClick={handleContent}
            content={"structure"}
            curContent={content}
            planetData={planetData}
            planet={planet}
            number={"02"}
            text={"Internal Structure"}
          >
            <div>
              <span className="button-number">02</span>
              <span>Internal Structure</span>
            </div>
          </Button>
          <Button
            onClick={handleContent}
            content={"geology"}
            curContent={content}
            planetData={planetData}
            planet={planet}
            number={"03"}
            text={"Surface Geology"}
          >
            <div>
              <span className="button-number">03</span>
              <span>Surface Geology</span>
            </div>
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
