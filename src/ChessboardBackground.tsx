const ChessboardBackground = () => {
  return (
    <div className="absolute z-0 mt-3 grid h-screen w-screen grid-cols-8 grid-rows-8 pr-3">
      {Array.from({ length: 64 }).map((_, index) => (
        <div
          key={index}
          className="relative flex h-full w-full items-center justify-center"
        >
          <div
            className={`filter-green-500 w-[30%] md:w-[10%] ${
              (Math.floor(index / 8) + index) % 2 === 0
                ? "bg-image1"
                : "bg-image2"
            } bg-cover bg-center`}
            style={{ aspectRatio: "1 / 1" }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ChessboardBackground;
