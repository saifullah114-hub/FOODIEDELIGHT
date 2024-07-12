import * as Yup from 'yup';

export const restaurantValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  location: Yup.string().required('Location is required'),
  cuisine: Yup.array().of(Yup.string()),
  priceRange: Yup.string(),
  rating: Yup.number().min(0).max(5),
  openingHours: Yup.string(),
  phoneNumber: Yup.string(),
  website: Yup.string().url('Invalid URL'),
  imageUrl: Yup.string().url('Invalid URL'),
});