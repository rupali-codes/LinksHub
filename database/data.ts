import { IData, ISidebar } from "../types";

export const data: IData[] = [
  {
    id: "1",
    name: "unDraw",
    description: "unDraw is a site to get free illustrations, where you are also allowed to change color according to your theme.",
    url: "https://undraw.co/illustrations",
    category: "frontend",
    subcategory: "illustrations",
  },
  {
    id: "2",
    name: "Unsplash",
    description:
      "Unsplash is a site to get free images, you can download all kind of HD images in here for free.",
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
    subcategory: [
      { name: "images", url: "/images" },
      { name: "fonts", url: "/fonts" },
      { name: "colors", url: "/colors" },
      { name: "illustrations", url: "/illustrations" },
      { name: "animations", url: "/animations" },
      { name: "icons", url: "/icons" },
      { name: "design inspiration", url: "/design-inspiration" },
      { name: "testing", url: "/testing" },
      { name: "themes & templates", url: "/themes-templates" },
    ],
  },
  {
    category: "backend",
    subcategory: [
      { name: "validation", url: "" },
      { name: "security", url: "" },
      { name: "authentication", url: "" },
      { name: "caching", url: "" },
      { name: "testing", url: "" },
    ],
  },
];
