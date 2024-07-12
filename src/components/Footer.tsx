import React from 'react';
import { Box, Text, Link, HStack } from '@chakra-ui/react';

export const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="teal.500" color="white" py={4} px={8} mt={8}>
      <HStack justifyContent="space-between" alignItems="center">
        <Text>&copy; {new Date().getFullYear()} Foodie Delight. All rights reserved.</Text>
        <HStack spacing={4}>
          <Link href="#" isExternal>
            Privacy Policy
          </Link>
          <Link href="#" isExternal>
            Terms of Service
          </Link>
          <Link href="#" isExternal>
            Contact Us
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};
