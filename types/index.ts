export type dataList = {
  name:string,
  description:string,
  url: string
}

export interface ICollapsProps {
  title:string
  elements:dataList[]
}