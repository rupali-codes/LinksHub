import React, { useContext } from "react";
import { FaSlackHash } from "react-icons/fa";
import Cards from "../../components/cards";

const Icons = () => {
  return (
    <section className="md:mt-0 mt-20 md:p-0 p-5">
      <div className="text-3xl text-white flex font-bold">
        <FaSlackHash className="mt-1 mr-2 text-gray-400" />
        Icons
      </div>
      <Cards />
    </section>
  );
};

export default Icons;
