import { useEffect, useState } from "react";
import Widget from "./Widget";
import WidgetTags from "./WidgetTags";

const RightSidebar = () => {
 
  return (
    <aside className="flex flex-col space-y-6 bg-white mt-10 shadow-md rounded-lg dark:bg-gray-800 dark:text-white min-h-[300px] sticky top-20">
    <Widget />
  </aside>
  );
};

export default RightSidebar;
