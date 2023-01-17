import React, { useContext } from "react";
import { FaSlackHash } from "react-icons/fa";
import { GlobalContext } from "../../context/GlobalContext";

const Icons = () => {
  const { sidebar } = useContext(GlobalContext);

  return (
    <section className='md:mt-0 mt-20 md:p-0 p-5'>

      <div className="text-3xl text-white flex font-bold">
        <FaSlackHash className="mt-1 mr-2 text-gray-400" />
        Icons
      </div>
      <p
        className={`text-white mt-5 z-[-10] text-2xl font-bold  ${
          !sidebar && "animate-pulse"
        }`}
      >
        <span className="text-purple-500">Coming</span> Soon
      </p>
    </section>
  );
};

export default Icons;
