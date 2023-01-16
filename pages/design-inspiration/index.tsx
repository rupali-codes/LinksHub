import React from "react";
import { FaSlackHash } from "react-icons/fa";

const DesignInspiration = () => {
  return (
    <section>
      <div className="text-3xl text-white flex font-bold">
        <FaSlackHash className="mt-1 mr-2 text-gray-400" />
        Design Inspiration
      </div>
      <p className="text-white mt-5 text-2xl font-bold animate-pulse">
        <span className="text-purple-500">Coming</span> Soon
      </p>
    </section>
  );
};

export default DesignInspiration;
