import React, { ReactNode } from "react";
import { Footer } from "components/Footer/Footer";
import { SideNavbar } from "components/SideNavbar";

const GeneralLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <SideNavbar />
      <div className="mx-auto mt-20 min-h-[calc(100vh-85px)] bg-gray-100 px-4 pb-[1rem] transition-all duration-300 ease-in dark:bg-[#101623] lg:mt-0 lg:pl-[290px]">
        {children}
        <Footer />
      </div>
    </section>
  );
};

export default GeneralLayout;
