/* eslint-disable react/prop-types */
export default function Card({ children }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {children}
    </div>
  );
}
