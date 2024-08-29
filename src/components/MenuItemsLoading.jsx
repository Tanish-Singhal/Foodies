import React from "react";

const MenuItemsLoading = () => {
  return (
    <div className="mx-auto my-4 p-4 border-2 rounded-lg bg-gray-50 max-w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center cursor-pointer">
        <div className="w-3/4 h-6 bg-gray-300 animate-pulse rounded mb-2 sm:mb-0"></div>
        <div className="w-8 h-8 bg-gray-300 animate-pulse rounded-full"></div>
      </div>
    </div>
  );
};

export default MenuItemsLoading;
