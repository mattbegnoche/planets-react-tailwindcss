/* eslint-disable react/prop-types */
export default function Card({ children }) {
  return (
    <div className="pt-5 border border-planetGray-700 pb-6 pl-6">
      {children}
    </div>
  );
}
