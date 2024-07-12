import React from 'react';
import { Formik, Form, Field } from 'formik';
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
  HStack,
} from '@chakra-ui/react';
import { StarRating } from './StarRating';
import { TimePickerWrapper } from './TimePicker';
import { MultiSelect } from './MultiSelect';
import { RestaurantInput } from '../types/Restaurant';
import { restaurantValidationSchema } from '../utils/validation';

interface RestaurantFormProps {
  initialValues: RestaurantInput;
  onSubmit: (values: RestaurantInput) => void;
  isEditing: boolean;
}

const cuisineOptions = [
  { value: 'italian', label: 'Italian' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'indian', label: 'Indian' },
  { value: 'mexican', label: 'Mexican' },
  { value: 'chinese', label: 'Chinese' },
];

export const RestaurantForm: React.FC<RestaurantFormProps> = ({
  initialValues,
  onSubmit,
  isEditing,
}) => {

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={restaurantValidationSchema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.setSubmitting(false);
      }}

    >
      {({ values, setFieldValue }) =>
      (
        <Form>
          <VStack spacing={4}>
            <Field name="name">
              {({ field }: any) => (
                <FormControl>
                  <FormLabel>Name *</FormLabel>
                  <Input {...field} placeholder="Name Of Your Restaurant" />
                </FormControl>
              )}
            </Field>

            <Field name="description">
              {({ field }: any) => (
                <FormControl>
                  <FormLabel>Description *</FormLabel>
                  <Textarea {...field} placeholder="Write Your Restaurant Description" />
                </FormControl>
              )}
            </Field>

            <Field name="location">
              {({ field }: any) => (
                <FormControl>
                  <FormLabel>Location *</FormLabel>
                  <Input {...field} placeholder="Enter Location" />
                </FormControl>
              )}
            </Field>

            <FormControl>
              <FormLabel>Cuisine</FormLabel>
              <MultiSelect
                options={cuisineOptions}
                value={values.cuisine}
                onChange={(selectedOptions: string[]) =>
                  setFieldValue('cuisine', selectedOptions)
                }
              />
            </FormControl>

            <Field name="priceRange" >
              {({ field }: any) => (
                <FormControl>
                  <FormLabel>Price Range</FormLabel>
                  <Input {...field} placeholder="$50 - $500" />
                </FormControl>
              )}
            </Field>

            <FormControl>
              <FormLabel>Rating</FormLabel>
              <StarRating
                rating={values.rating}
                onRatingChange={(rating) => setFieldValue('rating', rating)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Opening Hours</FormLabel>
              <HStack>
                <TimePickerWrapper
                  value={values.openingTime}
                  onChange={(time) => setFieldValue('openingTime', time)}
                />
                <TimePickerWrapper
                  value={values.closingTime}
                  onChange={(time) => setFieldValue('closingTime', time)}
                />
              </HStack>
            </FormControl>

            <Field name="phoneNumber">
              {({ field }: any) => (
                <FormControl>
                  <FormLabel>Phone Number</FormLabel>
                  <Input {...field} placeholder="Restaurant Phone Number" />
                </FormControl>
              )}
            </Field>

            <Field name="website">
              {({ field }: any) => (
                <FormControl>
                  <FormLabel>Website</FormLabel>
                  <Input {...field} placeholder="Restaurant Website" />
                </FormControl>
              )}
            </Field>

            <Field name="imageUrl">
              {({ field }: any) => (
                <FormControl>
                  <FormLabel>Image URL</FormLabel>
                  <Input {...field} placeholder="Image Link" />
                </FormControl>
              )}
            </Field>

            <Button type="submit" colorScheme="teal">
              {isEditing ? 'Update Restaurant' : 'Add Restaurant'}
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
