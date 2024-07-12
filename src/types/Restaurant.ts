export interface Restaurant {
    id: string;
    name: string;
    description: string;
    location: string;
    cuisine: string[];
    priceRange: string;
    rating: number;
    openingTime: string;
    phoneNumber: string;
    website: string;
    imageUrl: string;
    closingTime:string;
  }
  
  export type RestaurantInput = Omit<Restaurant, 'id'>;