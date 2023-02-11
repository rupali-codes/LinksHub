import React, { ReactNode } from "react";
import { Footer } from "../components/Footer/Footer";
import { SideNavbar } from "../components/SideNavbar";

const GeneralLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <SideNavbar />
      <div className="bg-gray-100 dark:bg-[#101623] transition-all ease-in duration-300 mx-auto mt-20 min-h-[calc(100vh-85px)] pb-[1rem] lg:ml-20 lg:mt-0 lg:pl-[290px] px-4">
        {children}
        <Footer />
      </div>
    </section>
  );
};

export default GeneralLayout;
