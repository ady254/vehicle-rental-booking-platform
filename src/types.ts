export interface Bike {
  id: string;
  name: string;
  brand: string;
  type: 'bike' | 'car';
  category: string;
  image: string;
  images: string[];
  pricePerHour: number;
  pricePerDay: number;
  specifications: {
    engine: string;
    power: string;
    topSpeed: string;
    fuel: string;
    seating: number;
    transmission: string;
  };
  available: boolean;
  rating: number;
  reviews: number;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  bike: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Booking {
  bikeId: string;
  bikeName: string;
  name: string;
  email: string;
  phone: string;
  pickupDate: string;
  pickupTime: string;
  returnDate: string;
  returnTime: string;
  location: string;
  totalAmount: number;
  duration: number;
  durationType: 'hours' | 'days';
}

export type Page =
  | 'home'
  | 'bikes'
  | 'bike-details'
  | 'booking'
  | 'payment'
  | 'confirmation'
  | 'contact'
  | 'faqs'
  | 'rental-rules';
