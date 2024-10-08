import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import RestaurantInfo from "./RestaurantInfo";
import MenuItems from "./MenuItems";
import RestaurantInfoLoading from "./RestaurantInfoLoading";
import MenuItemsLoading from "./MenuItemsLoading";
import LoadingBar from 'react-top-loading-bar';

const RestaurantMenu = () => {
  const [info, setInfo] = useState([]);
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const loadingBarRef = useRef(null);
  
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchMenu();
  }, [params.id]);

  const fetchMenu = async () => {
    loadingBarRef.current.continuousStart();
    setIsLoading(true);
    try {
      const response = await fetch(`https://foodies-backend-no21.onrender.com/api/restaurant-menu/${params.id}`);
  
      const json = await response.json();
  
      const info = json.data.cards[2]?.card?.card?.info;
      const menu = json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  
      setInfo(info);
      setMenu(menu);
    } catch (error) {
      console.error("Error fetching menu:", error);
    } finally {
      loadingBarRef.current.complete();
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
      <LoadingBar
        color="#f97316"
        ref={loadingBarRef}
        onLoaderFinished={() => loadingBarRef.current.complete()}
        style={{ height: '4px' }}
      />
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
