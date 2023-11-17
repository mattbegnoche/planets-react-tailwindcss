/* eslint-disable react/prop-types */
export default function Button({
  onClick,
  content,
  curContent,
  planet,
  planetData,
  number,
  text,
}) {
  return (
    <button
      className={`flex font-bold md:gap-4 text-left text-[.6rem] md:text-base py-3 md:px-7 md:border border-b-4 md:border-planetGray-700 uppercase tracking-wider transition-all duration-500 ease-in-out  ${
        curContent === content
          ? ` md:bg-${planetData[
              planet
            ].name.toLowerCase()} border-${planetData[
              planet
            ].name.toLowerCase()}`
          : `md:hover:bg-planetGray-700 border-transparent `
      }`}
      onClick={() => onClick(content)}
    >
      <span className="button-number">{number}</span>
      <span>{text}</span>
    </button>
  );
}
