import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Box as="header" bg="blue.500" color="white" py={4}>
        <Container maxW="container.xl">
          <Heading as="h1" size="xl">
            Restaurant Admin
          </Heading>
        </Container>
      </Box>
      <Container maxW="container.xl" py={8}>
        {children}
      </Container>
    </Box>
  );
};