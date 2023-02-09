import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import Logo from "../logo";

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="fixed bottom-0 w-full flex items-baseline justify-center z-10 gap-1 rounded-lg bg-[#343434] py-3">
      <p className="text-lg text-white ">
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
