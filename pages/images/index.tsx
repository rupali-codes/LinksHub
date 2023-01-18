import React from "react";
import { FaSlackHash } from "react-icons/fa";
import Cards from "../../components/cards";
import { LinkContainer } from "../../components/LinksConatiners/LinkContainer";
import { data } from "../../database/data";
import { IData } from "../../types";

const Images = () => {
  return (
    <section className="md:mt-0 mt-20 lg:p-0 pt-10 px-5">
      <div className="flex itmes-center text-white text-3xl my-4 font-bold uppercase">
        <FaSlackHash className="mt-1 text-gray-400" />
        <h2 className="">Images</h2>
      </div>

      <Cards />
    </section>
  );
};

export default Images;
