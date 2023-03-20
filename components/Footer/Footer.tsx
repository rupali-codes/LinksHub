import Link from "next/link";
import type { FC } from "react";



export const Footer: FC = () => {
  return (
    <footer className="z-10 mb-4 flex w-full items-baseline justify-center rounded-lg bg-[#ffffff0a] py-2 backdrop-blur-md sm:py-3">
      <p className="md:text-lg text-center text-black dark:text-gray-100">
        Open source |{" "}
        <Link
          href="https://github.com/rupali-codes/LinksHub/blob/main/LICENSE"
          target="_blank"
        >
          
          <span className="border-b-[1px] border-gray-900 dark:border-gray-100">MIT License</span>
        </Link>{" "}
        2023 LinksHub
      </p>
    </footer>
  );
};
