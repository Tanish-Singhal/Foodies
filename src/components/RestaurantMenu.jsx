import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantInfo from "./RestaurantInfo";

const RestaurantMenu = () => {
  const [info, setInfo] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchMenu();
  }, [params.id]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_RESTAURANT_MENU_URL + params.id
      );

      const json = await response.json();

      const info = json.data.cards[2].card.card.info;
      
      setInfo(info);

    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  return (
    <div className="px-[30rem] my-8">
      <RestaurantInfo info={info} />
    </div>
  );
};

export default RestaurantMenu;
