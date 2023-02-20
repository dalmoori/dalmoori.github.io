const BlackButton = ({ text, fn }) => {
  return (
    <button
      onClick={fn}
      className="px-3 py-1 text-sm text-white rounded-md shadow-md bg-blockBgColor-dark"
    >
      {text}
    </button>
  );
};

export default BlackButton;
