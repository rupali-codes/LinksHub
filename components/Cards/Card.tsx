import { FC } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import type { IData } from "types";

const Card:FC<{ data: IData}> = (props) => {
  const { data } = props;
  const { name, description, url } = data;

  return (
    <div
      className="z-10 h-full w-full rounded-3xl border border-dashed border-violet-500 bg-gray-100 shadow-lg dark:bg-gray-900 dark:text-gray-300 dark:shadow-sm"
    >
      <div className="card-body">
        <h2
          className="cursor-default truncate ... text-xl text-violet-500"
          title={name}
        >
          {name}
        </h2>
        <p className="text-clip-30 h-24 w-full w-full overflow-hidden font-sans">
          {description}
        </p>
        <div className="card-actions justify-end">
          <a
            onClick={(e) => e.stopPropagation()}
            href={url}
            target="_blank"
            rel="noreferrer"
            className={"flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-transparent bg-violet-600 px-6 py-2 text-center text-white duration-100 hover:border-violet-400 hover:bg-transparent hover:text-violet-500"}
          >
            Visit Site
            <BsBoxArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;