import React from "react";

interface InputsProps {
  name: string;
  setName: (name: string) => void;
  telephone: string;
  setTelephone: (telephone: string) => void;
  email: string;
  setEmail: (email: string) => void;
  handleAddRecord: () => void;
}

const Inputs: React.FC<InputsProps> = ({
  name,
  setName,
  telephone,
  setTelephone,
  email,
  setEmail,
  handleAddRecord,
}) => {
  return (
    <div>
      <div className="my-8 flex w-auto flex-col rounded-lg border border-gray-100 py-6 shadow-lg">
        <h2 className="mb-1 ml-3 text-xl font-bold md:ml-7">
          Demanar pressupost
        </h2>

        <div className="flex flex-col justify-between px-7 md:flex-row">
          <div className="flex justify-between space-x-5">
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              type="text"
              required
              value={name}
              placeholder="Nom"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              type="tel"
              value={telephone}
              required
              placeholder="Teléfon"
              onChange={(e) => setTelephone(e.target.value)}
            />
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              type="email"
              value={email}
              required
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            className="mt-4 w-auto rounded border bg-green-700 md:ml-3 px-3 font-semibold text-white md:hover:border-green-500 md:hover:border-transparent md:hover:bg-white md:hover:text-green-700 md:mt-0 active:bg-white active:text-green-700"
            onClick={handleAddRecord}
          >
            Sol·licitar
            <span className="hidden lg:inline"> pressupost</span>
          </button>
        </div>
      </div>
      <div className="relative w-full ">
        <div className=" border-t-4 border-dashed border-grey w-full absolute top-1/2 transform -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default Inputs;
