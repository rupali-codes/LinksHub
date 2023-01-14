import { IData, ISidebar } from "../types";

export const data: IData[] = [
  {
    id: "1",
    name: "unDraw",
    description: "unDraw is a site to get free illustrations, where you are also allowed to change color according to your theme.",
    url: "https://undraw.io/illustrations",
    category: "frontend",
    subcategory: "illustrations",
  },
  {
    id: "2",
    name: "Unsplash",
    description: "Unsplash is a site to get free images, you can download all kind of HD images in here for free.",
    url: "https://unsplash.com",
    category: "frontend",
    subcategory: "images",
  },
  {
    id: "3",
    name: "Dummy Image",
    description:
      "dummyimage is a site to get free dummy colored image with free hand sizing for your site. ",
    url: "https://dummyimage.com/",
    category: "frontend",
    subcategory: "images",
  },
];

export const sidebarData: ISidebar[] = [
  {
    category: "frontend",
    subcategory: ["images", "fonts", "colors", "illustrations", "animations", "icons", "design inspiration", "testing", "themes & templates"],
  },
  {
    category: "backend",
    subcategory: ["validation", "security", "authentication", "caching", "testing"],
  },
];
