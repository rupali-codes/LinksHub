import { FC } from "react";

const ComingSoon:FC<{}> = () => {

  return (
    <p className="pt-6 md:p-0">
      <span className="animate-pulse text-2xl font-semibold text-purple-500">
        Coming
      </span>{" "}
      <span className="text-2xl font-semibold">Soon</span>
    </p>
  )
}

export default ComingSoon;