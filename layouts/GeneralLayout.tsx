import React, { ReactNode } from "react";
import { SideNavbar } from "../components/SideNavbar";

const GeneralLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="bg-gray-100 dark:bg-[#101623]">
      <SideNavbar />
      <div className="lg:pl-[290px] md:min-h-screen mx-auto lg:ml-20 mt-20 lg:mt-0 md:pb-8">
        {children}
      </div>
    </section>
  );
};

export default GeneralLayout;
