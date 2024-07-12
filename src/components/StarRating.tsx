import React from 'react';
import { HStack, Icon } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange, readonly = false }) => {
  const handleStarClick = (index: number) => {
    if (!readonly && onRatingChange) {
      onRatingChange(index + 1);
    }
  };

  return (
    <HStack spacing={1}>
      {[...Array(5)].map((_, index) => (
        <Icon
          key={index}
          as={StarIcon}
          color={index < rating ? 'yellow.400' : 'gray.300'}
          onClick={() => handleStarClick(index)}
          cursor={readonly ? 'default' : 'pointer'}
        />
      ))}
    </HStack>
  );
};