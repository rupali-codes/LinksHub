import React, { useContext } from "react";
import { FaSlackHash } from "react-icons/fa";
import Cards from "../../components/cards";

const Illustrations = () => {
  return (
    <section className="md:mt-0 mt-20 lg:p-0 pt-10 px-5">
      <div className="text-3xl mb-5 text-white flex font-bold">
        <FaSlackHash className="mt-1 mr-2 text-gray-400" />
        Illustrations
      </div>
      <Cards />
    </section>
  );
};

export default Illustrations;
