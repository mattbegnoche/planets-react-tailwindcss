import backgroundStars from "/public/assets/background-stars.svg";
export default function Stars() {
  return (
    <div>
      <img
        src={backgroundStars}
        alt="stars"
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
      />
    </div>
  );
}
