import { IData, ISidebar } from "../types";

export const data: IData[] = [
  {
    id: "1",
    name: "unDraw",
    description: "unDraw is a site to get free illustrations",
    url: "https://undraw.io/illustrations",
    category: "frontend",
    subcategory: "illustrations",
  },
  {
    id: "2",
    name: "Unsplash",
    description: "Unsplash is a site to get free images",
    url: "https://unsplash.com",
    category: "frontend",
    subcategory: "images",
  },
  {
    id: "3",
    name: "dummyimage",
    description:
      "dummyimage is a site to get dummy image with free hand sizing",
    url: "https://dummyimage.com/",
    category: "frontend",
    subcategory: "images",
  },
];

export const sidebarData: ISidebar[] = [
  {
    category: "frontend",
    subcategory: ["images", "fonts", "colors", "illustrations", "animations"],
  },
  {
    category: "backend",
    subcategory: ["validation", "security", "authentication", "caching"],
  },
];
