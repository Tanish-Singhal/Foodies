import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import ItemList from "./ItemList";

const MenuItems = ({ category }) => {
  const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    setShowItem(!showItem);
  };

  return (
    <div className="mx-auto my-4 p-4 border-2 rounded-lg bg-gray-50 cursor-pointer max-w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between cursor-pointer" onClick={handleClick}>
        <div className="font-bold text-lg">
          {category?.title} ({category.itemCards.length})
        </div>
        <div className="flex items-center">
          <ChevronDown />
        </div>
      </div>
      {showItem ? <ItemList items={category.itemCards} className="mt-4" /> : null}
    </div>
  );
};

export default MenuItems;
