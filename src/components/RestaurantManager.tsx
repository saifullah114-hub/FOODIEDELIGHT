import React, { useState } from 'react';
import { Box, Container, Alert, AlertIcon, CloseButton } from '@chakra-ui/react';
import { RestaurantForm } from './RestaurantForm';
import { RestaurantList } from './RestaurantList';
import { Modal } from './Modal';
import { Header } from './Header';
import { Footer } from './Footer';
import { useRestaurantApi } from '../hooks/useRestaurantApi';
import { Restaurant, RestaurantInput } from '../types/Restaurant';

const initialFormValues: RestaurantInput = {
  name: '',
  description: '',
  location: '',
  cuisine: [],
  priceRange: '',
  rating: 0,
  openingTime: '',
  closingTime: '',
  phoneNumber: '',
  website: '',
  imageUrl: '',
};

export const RestaurantManager: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRestaurant, setEditingRestaurant] = useState<Restaurant | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const { useRestaurants, useAddRestaurant, useUpdateRestaurant, useDeleteRestaurant } =
    useRestaurantApi();

  const { data: restaurants, isLoading, error } = useRestaurants();
  const addRestaurantMutation = useAddRestaurant();
  const updateRestaurantMutation = useUpdateRestaurant();
  const deleteRestaurantMutation = useDeleteRestaurant();

  const handleSubmit = (values: RestaurantInput) => {
    if (editingRestaurant) {
      updateRestaurantMutation.mutate(
        { ...values, id: editingRestaurant.id },
        {
          onSuccess: () => {
            setIsModalOpen(false);
            setEditingRestaurant(null);
            setNotification({ type: 'success', message: 'Restaurant updated successfully' });
          },
          onError: (error) => {
            console.error("Error updating restaurant:", error);
            setNotification({ type: 'error', message: 'Failed to update restaurant' });
          }
        }
      );
    } else {
      addRestaurantMutation.mutate(values, {
        onSuccess: () => {
          setIsModalOpen(false);
          setEditingRestaurant(null);
          setNotification({ type: 'success', message: 'Restaurant added successfully' });
        },
        onError: (error) => {
          console.error("Error adding restaurant:", error);
          setNotification({ type: 'error', message: 'Failed to add restaurant' });
        }
      });
    }
  };

  const handleEdit = (restaurant: Restaurant) => {
    setEditingRestaurant(restaurant);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    deleteRestaurantMutation.mutate(id, {
      onSuccess: () => {
        setNotification({ type: 'success', message: 'Restaurant deleted successfully' });
      },
      onError: (error) => {
        console.error("Error deleting restaurant:", error);
        setNotification({ type: 'error', message: 'Failed to delete restaurant' });
      }
    });
  };

  const handleAddNew = () => {
    setEditingRestaurant(null);
    setIsModalOpen(true);
  };

  const handleNotificationClose = () => {
    setNotification(null);
  };

  return (
    <Box>
      <Header onAddNew={handleAddNew} />
      <Container maxW="container.xl">
        {isLoading ? (
          <Box>Loading...</Box>
        ) : error ? (
          <Box>Error: {error.message}</Box>
        ) : (
          <RestaurantList
            restaurants={restaurants || []}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </Container>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingRestaurant ? 'Edit Restaurant' : 'Add New Restaurant'}
      >
        <RestaurantForm
          initialValues={editingRestaurant || initialFormValues}
          onSubmit={handleSubmit}
          isEditing={!!editingRestaurant}
        />
      </Modal>
      <Footer />
      {notification && (
        <Alert status={notification.type} width={"80%"} position="fixed" bottom="20px" left={"80px"} zIndex={1000}>
          <AlertIcon />
          {notification.message}
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={handleNotificationClose}
          />
        </Alert>
      )}
    </Box>
  );
};
