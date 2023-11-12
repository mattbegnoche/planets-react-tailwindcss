/* eslint-disable react/prop-types */
export default function Button({
  children,
  onClick,
  content,
  curContent,
  planet,
  planetData,
}) {
  return (
    <button
      className={`text-left py-3 px-7 border border-planetGray-700 uppercase tracking-wider transition-all duration-500 ease-in-out  ${
        curContent === content
          ? `bg-${planetData[planet].name.toLowerCase()}`
          : `hover:bg-planetGray-700`
      }`}
      onClick={() => onClick(content)}
    >
      {children}
    </button>
  );
}
