const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arr = [1, 2, 3, 4, 5, 6];

  const numberselectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <p className="text-2xl text-red-600">{error}</p>
      <div
        className="
          flex gap-4
          max-[480px]:gap-2
          sm:gap-4
          md:gap-6
          lg:gap-8
          xl:gap-12
        "
      >
        {arr.map((value, index) => (
          <p
            key={index}
            onClick={() => numberselectorHandler(value)}
            className={`
              flex justify-center items-center border-2 text-2xl cursor-pointer rounded-lg transition-all duration-200
              h-[72px] w-[72px]
              max-[480px]:h-12 max-[480px]:w-12     /* Small mobile */
              sm:h-14 sm:w-14                       /* Big phones */
              md:h-16 md:w-16                       /* Tablet */
              lg:h-20 lg:w-20                       /* Laptop */
              xl:h-24 xl:w-24                       /* Desktop */
              ${value === selectedNumber ? "bg-black text-white" : "bg-white"}
            `.replace(/\s+/g, ' ').trim()}
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
