import { FC } from "react";

const ComingSoon:FC<{}> = () => {

  return (
    <div className="pt-6 md:p-0">
      <p>
        <span className="animate-pulse text-2xl font-semibold text-purple-500">
          Coming
        </span>{" "}
        <span className="text-2xl font-semibold">Soon</span>
      </p>
    </div>
  )
}

export default ComingSoon;