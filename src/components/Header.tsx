import React from 'react';
import { Box, Heading, HStack, Button } from '@chakra-ui/react';

interface HeaderProps {
  onAddNew: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onAddNew }) => {
  return (
    <Box as="header" bg="teal.500" color="white" py={4} px={8} mb={8}>
      <HStack justifyContent="space-between" alignItems="center">
        <Heading size="lg">Foodie Delight</Heading>
        <Button onClick={onAddNew} colorScheme="teal">
          Add New Restaurant
        </Button>
      </HStack>
    </Box>
  );
};
