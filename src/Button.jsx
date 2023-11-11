/* eslint-disable react/prop-types */
export default function Button({ children, onClick }) {
  return (
    <button
      className="text-left py-3 px-7 border uppercase tracking-wider"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
