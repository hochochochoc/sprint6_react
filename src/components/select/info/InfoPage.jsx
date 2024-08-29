import React, { useState } from "react";

const InfoPage = () => {
  const [popupPageIsOpen, setPopupPageIsOpen] = useState(false);

  return (
    <div className="flex items-center">
      <button
        className=" mx-1 flex h-3 w-3 items-center justify-center rounded-lg border border-gray-400 text-xs leading-none text-gray-400"
        onClick={() => setPopupPageIsOpen(true)}
      >
        i
      </button>
      <p className=" hidden md:block text-sm">Nombre de pàgines:</p>
      <p className=" md:hidden text-sm">Pàgines:</p>

      {popupPageIsOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-6 z-10"
          onClick={() => setPopupPageIsOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-10 max-w-sm mx-auto "
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-medium text-center">
              Número de pàgines
            </h2>
            <p className="mt-2 text-gray-600 text-center">
              Afegeix les pàgines que tindrà el teu projecte. El cost de cada
              pàgina és de 30€.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoPage;
