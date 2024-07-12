import { useQuery, useMutation, useQueryClient } from 'react-query';
import { Restaurant } from '../types/Restaurant';
import { getRestaurants, addRestaurant, updateRestaurant, deleteRestaurant } from '../mockApi';

export const useRestaurantApi = () => {
  const queryClient = useQueryClient();

  return {
    useRestaurants: () => useQuery<Restaurant[], Error>('restaurants', getRestaurants),
    useAddRestaurant: () =>
      useMutation(addRestaurant, {
        onSuccess: () => {
          queryClient.invalidateQueries('restaurants');
        },
      }),
    useUpdateRestaurant: () =>
      useMutation(updateRestaurant, {
        onSuccess: () => {
          queryClient.invalidateQueries('restaurants');
        },
      }),
    useDeleteRestaurant: () =>
      useMutation(deleteRestaurant, {
        onSuccess: () => {
          queryClient.invalidateQueries('restaurants');
        },
      }),
  };
};