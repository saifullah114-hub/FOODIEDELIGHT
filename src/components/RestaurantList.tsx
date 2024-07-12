import React from 'react';
import Slider from 'react-slick';
import { Box, Text } from '@chakra-ui/react';
import { Restaurant } from '../types/Restaurant';
import { RestaurantCard } from './RestaurantCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface RestaurantListProps {
  restaurants: Restaurant[];
  onEdit: (restaurant: Restaurant) => void;
  onDelete: (id: string) => void;
}

export const RestaurantList: React.FC<RestaurantListProps> = ({
  restaurants,
  onEdit,
  onDelete,
}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: restaurants.length>1?3:1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <Box>
      <Slider {...settings}>
        {restaurants.map((restaurant) => (
          <Box key={restaurant.id} p={2}>
            <RestaurantCard
              key={restaurant.id} 
              restaurant={restaurant}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </Box>
        ))}
        {restaurants.length===0&&(<Text fontSize='3xl' color={'red'}>No Restaurant Found</Text>)}
      </Slider>
    </Box>
  );
};

