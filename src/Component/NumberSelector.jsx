const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arr = [1, 2, 3, 4, 5, 6];

  const numberselectorHandler = (value) => {
    setSelectedNumber(value); // ✅ FIXED HERE
    setError("");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <p className="text-2xl text-red-600">{error}</p>
      <div className="flex gap-4">
        {arr.map((value, index) => (
          <p
            key={index}
            onClick={() => numberselectorHandler(value)}
            className={`h-[72px] w-[72px] flex justify-center items-center border-2 text-2xl cursor-pointer rounded-lg transition-all duration-200 ${
              value === selectedNumber ? "bg-black text-white" : "bg-white"
            }`}
          >
            {value}
          </p>
        ))}
      </div>

      <p className="text-lg font-medium">Select Number</p>
    </div>
  );
};

export default NumberSelector;
