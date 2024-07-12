import React from 'react';
import { Box, Image, VStack, Heading, Text, HStack, IconButton, Badge } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { Restaurant } from '../types/Restaurant';
import { StarRating } from './StarRating';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onEdit: (restaurant: Restaurant) => void;
  onDelete: (id: string) => void;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  onEdit,
  onDelete,
}) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" bg="white">
      <Image src={restaurant.imageUrl} alt={restaurant.name} height="200px" objectFit="cover" />
      <VStack p={4} align="start" spacing={3}>
        <Heading size="md">{restaurant.name}</Heading>
        <Text>{restaurant.description}</Text>
        <HStack>
          {restaurant.cuisine.map((cuisine) => (
            <Badge key={cuisine} colorScheme="teal">
              {cuisine}
            </Badge>
          ))}
        </HStack>
        <Text>Price Range: {restaurant.priceRange}</Text>
        <StarRating rating={restaurant.rating} readonly />
        <Text>Opening Hours: {restaurant.openingTime} - {restaurant.closingTime}</Text>
        <HStack>
          <IconButton
            aria-label="Edit restaurant"
            icon={<EditIcon />}
            onClick={() => onEdit(restaurant)}
          />
          <IconButton
            aria-label="Delete restaurant"
            icon={<DeleteIcon color='red.500' />}
            onClick={() => onDelete(restaurant.id)}
          />
        </HStack>
      </VStack>
    </Box>
  );
};
