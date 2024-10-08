import React, { useEffect, useState, useRef } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerCard from "./ShimmerCard";
import Search from "./Search";
import { Link } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const Home = () => {
  const [originalData, setOriginalData] = useState([]);
  const [copyData, setCopyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const loadingBarRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    loadingBarRef.current.continuousStart();
    setIsLoading(true);
    try {
      const response = await fetch('https://foodies-backend-no21.onrender.com/api/restaurants');
      const json = await response.json();
  
      const restaurants =
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
  
      setOriginalData(restaurants);
      setCopyData(restaurants);
    } catch (error) {
      console.error("Error while fetching data: ", error);
    } finally {
      loadingBarRef.current.complete();
      setIsLoading(false);
    }
  };

  const shimmerAllResCount = 20;

  return (
    <div className="bg-[#fcfcfcda] md:pt-2">
      <LoadingBar
        color="#f97316"
        ref={loadingBarRef}
        onLoaderFinished={() => loadingBarRef.current.complete()}
        style={{ height: '4px' }}
      />
      
      <Search resData={originalData} setResData={setCopyData} />

      <div className="px-4 sm:px-6 lg:px-8 xl:px-16 md:pt-5 pt-2">
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-2xl md:text-2xl font-bold mb-6 px-6 text-center">
            Restaurants with online food delivery
          </h2>

          <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center items-center gap-4 sm:gap-6">
            {isLoading
              ? [...Array(shimmerAllResCount)].map((_, index) => (
                  <ShimmerCard key={index} />
                ))
              : copyData.map((restaurant) => (
                  <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                    <RestaurantCard
                      resData={restaurant}
                      key={restaurant.info.id}
                    />
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
