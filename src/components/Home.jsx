import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerCard from "./ShimmerCard";

const Home = () => {
  const [originalData, setOriginalData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_SWIGGY_MAIN_API);
      const json = await response.json();

      const restaurants =
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setOriginalData(restaurants);
    } catch (error) {
      console.error("Error while fetching data: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const shimmerTopResCount = 5;
  const shimmerAllResCount = 20;

  const topRatedRestaurants = originalData.filter(
    (restaurant) => restaurant.info.avgRating >= 4.5
  );

  return (
    <div className="bg-[#fcfcfcda] pt-4">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16">
        {isLoading ? (
          <div>
            <div className="mb-10 lg:mb-12">
              <h2 className="text-xl md:text-2xl font-bold mb-6 px-10">
                Top Rated Restaurants
              </h2>

              <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center items-center gap-4 sm:gap-6">
                {[...Array(shimmerTopResCount)].map((_, index) => (
                  <ShimmerCard key={index} />
                ))}
              </div>
            </div>

            <div className="mb-6 sm:mb-8 lg:mb-10">
              <h2 className="text-xl md:text-2xl font-bold mb-6 px-10">
                Restaurants with online food delivery
              </h2>

              <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center items-center gap-4 sm:gap-6">
                {[...Array(shimmerAllResCount)].map((_, index) => (
                  <ShimmerCard key={index} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-8 lg:mb-12">
              <h2 className="text-xl md:text-2xl font-bold mb-6 px-10">
                Top Rated Restaurants
              </h2>

              <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center items-center gap-4 sm:gap-6">
                {topRatedRestaurants.length > 0 ? (
                  topRatedRestaurants.map((restaurant) => (
                    <RestaurantCard
                      resData={restaurant}
                      key={restaurant.info.id}
                    />
                  ))
                ) : (
                  <p className="text-gray-600 font-semibold text-lg sm:text-xl md:text-2xl">
                    No top-rated restaurants available.
                  </p>
                )}
              </div>
            </div>

            <div className="mb-6 sm:mb-8 lg:mb-10">
              <h2 className="text-xl md:text-2xl font-bold mb-6 px-10">
                Restaurants with online food delivery
              </h2>

              <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center items-center gap-4 sm:gap-6">
                {originalData.map((restaurant) => (
                  <RestaurantCard
                    resData={restaurant}
                    key={restaurant.info.id}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
