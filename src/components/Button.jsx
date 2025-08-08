const Button = ({ title, bgColor }) => {
  return (
    <button className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-900 cursor-pointer">
      {title}
    </button>
  );
};
