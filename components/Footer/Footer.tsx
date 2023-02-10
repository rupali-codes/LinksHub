import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import Logo from "../logo";

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="w-full flex items-baseline justify-center z-20 gap-1 rounded-lg bg-[#343434] sm:py-3 py-2 px-1">
      <p className="md:text-lg text-center text-white ">
        Open source |{" "}
        <Link
          href="https://github.com/rupali-codes/LinksHub/blob/main/LICENSE"
          target="_blank"
        >
          <span className="border-b-[1px]">MIT License</span>
        </Link>{" "}
        2023 LinksHub
      </p>
    </div>
  );
};
