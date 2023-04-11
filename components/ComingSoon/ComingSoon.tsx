import { FC } from "react";

const ComingSoon:FC<{}> = () => {

  return (
    <p className="pt-6 md:p-0 coming-soon">
      <span className="text-2xl font-semibold">Be the first to add by creating a GitHub issue</span>{" "}
      <span className="animate-pulse text-2xl font-semibold text-purple-500">
       <a href="https://github.com/rupali-codes/LinksHub/issues/new?assignees=&labels=add+link&template=add_link.yml&title=%5BAdd%5D+%3Cname%3E"><u>here</u></a>
      </span>
    </p>
  )
}

export default ComingSoon;