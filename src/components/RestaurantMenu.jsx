import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantInfo from "./RestaurantInfo";
import MenuItems from "./MenuItems";
import RestaurantInfoLoading from "./RestaurantInfoLoading";
import MenuItemsLoading from "./MenuItemsLoading";

const RestaurantMenu = () => {
  const [info, setInfo] = useState([]);
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    fetchMenu();
  }, [params.id]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_RESTAURANT_MENU_URL + params.id);
      const json = await response.json();

      const info = json.data.cards[2].card.card.info;
      const menu = json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      setInfo(info);
      setMenu(menu);
    } catch (error) {
      console.error("Error fetching menu:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterCategories =
    menu.filter(
      (c) =>
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="px-4 sm:px-6 lg:px-8 my-4 max-w-screen-lg mx-auto">
      <div className="max-w-full">
        {isLoading ? (
          <div>
            <RestaurantInfoLoading />
            {Array.from({ length: 7 }).map((_, index) => (
              <MenuItemsLoading key={index} />
            ))}
          </div>
        ) : (
          <div>
            <RestaurantInfo info={info} />
            {filterCategories.map((category) => (
              <MenuItems category={category.card?.card} key={category.card?.card?.title} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
