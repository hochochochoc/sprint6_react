import React from "react";

const Header = () => {
  return (
    <div className="relative mt-5 rounded-2xl border border-gray-200 px-4 py-2 sm:px-10 sm:py-14">
      <img
        src="/background.png"
        alt="headline_img"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10">
        <p className="text-center text-3xl font-bold">
          Aconsegueix la millor qualitat
        </p>
      </div>
    </div>
  );
};

export default Header;
