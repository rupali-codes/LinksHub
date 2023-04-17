import { FC } from "react";

const NewIssue:FC<{}> = () => {

  return (
    <p className="pt-6 md:p-0 coming-soon">
      <span className="text-2xl">Be the first to add by creating a GitHub issue</span>{" "}
      <span className="animate-pulse text-2xl text-purple-500">
       <a href="https://github.com/rupali-codes/LinksHub/issues/new?assignees=&labels=add+link&template=add_link.yml&title=%5BAdd%5D+%3Cname%3E" target="_blank"><u>here</u></a>
      </span>
    </p>
  )
}

export default NewIssue;