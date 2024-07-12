import React from 'react';
import { Box, Heading, Text, Button, HStack } from '@chakra-ui/react';
import { Restaurant } from '../types/Restaurant';

interface RestaurantItemProps {
  restaurant: Restaurant;
  onEdit: (restaurant: Restaurant) => void;
  onDelete: (id: string) => void;
}

export const RestaurantItem: React.FC<RestaurantItemProps> = ({
  restaurant,
  onEdit,
  onDelete,
}) => {
  return (
    <Box borderWidth={1} borderRadius="lg" p={4}>
      <Heading as="h3" size="md">
        {restaurant.name}
      </Heading>
      <Text>{restaurant.description}</Text>
      <Text>Location: {restaurant.location}</Text>
      <HStack mt={2}>
        <Button size="sm" onClick={() => onEdit(restaurant)}>
          Edit
        </Button>
        <Button size="sm" colorScheme="red" onClick={() => onDelete(restaurant.id)}>
          Delete
        </Button>
      </HStack>
    </Box>
  );
};