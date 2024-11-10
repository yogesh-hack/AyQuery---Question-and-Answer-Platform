import { useEffect, useState } from "react";
import Widget from "./Widget";
import WidgetTags from "./WidgetTags";

const RightSidebar = () => {
 
  return (
    <aside className="flex flex-col space-y-6 p-6 bg-white mt-20 shadow-md rounded-lg dark:bg-gray-800 dark:text-white">
    <Widget />
    <WidgetTags />
  </aside>
  );
};

export default RightSidebar;
