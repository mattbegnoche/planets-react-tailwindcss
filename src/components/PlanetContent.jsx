/* eslint-disable react/prop-types */
export default function PlanetContent({ children }) {
  return (
    <div className="md:col-span-2 flex flex-col md:flex-row lg:flex-col gap-10 mb-7 lg:mb-0">
      {" "}
      {children}
    </div>
  );
}
