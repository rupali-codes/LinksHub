import { IData, ISidebar } from "../types";
import * as DB from "database";
import uuid from "react-uuid";

export const database=Object.values(DB).map(item=>item.map(subcat=>({...subcat,id:uuid()})));

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
      { name: "themes & templates", url: "/themes-templates" },
      { name: "UI Generators", url: "/ui-generator" },
      { name: "online code editors", url: "/online-code-editors" },
    ],
  },
  {
    category: "backend",
    subcategory: [
      { name: "validation", url: "/validation" },
      { name: "security", url: "/security" },
      { name: "authentication", url: "/authentication" },
      { name: "caching", url: "/caching" },
      { name: "testing", url: "/testing" },
    ],
  },
  {
    category: "youtube",
    subcategory: [
      { name: "web development", url: "/web-development" },
      { name: "css", url: "/css" },
      { name: "machine learning", url: "/machine-learning" },
      { name: "data structures", url: "/dsa" },
      { name: "Android", url: "/android" },
      { name : "Web3 & Metaverse", url : "/web3-metaverse"},
    ],
  },
  {
    category: "resources",
    subcategory: [
      { name: "blogs", url: "/blogs" },
      { name: "hosting", url: "/hosting" },
    ],
  },
];
