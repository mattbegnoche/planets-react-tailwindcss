/* eslint-disable react/prop-types */
export default function Card({ children }) {
  return (
    <div className="md:pt-5 border border-planetGray-700 md:pb-8 md:pl-6 flex px-6  flex-row md:flex-col  md:px-6 md:items-start items-center justify-between py-2">
      {children}
    </div>
  );
}
