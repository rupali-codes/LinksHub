import React, { useContext } from "react";
import { FaSlackHash } from "react-icons/fa";
import Cards from "../../components/cards";

const DesignInspiration = () => {
  return (
    <section className="md:mt-0 mt-20 lg:p-0 pt-10 px-5">
      <div className="text-3xl text-white flex font-bold">
        <FaSlackHash className="mt-1 mr-2 text-gray-400" />
        Design Inspiration
      </div>
      <Cards />
    </section>
  );
};

export default DesignInspiration;
