import { TestimonialItem } from '../types';
import avatar1 from '../assets/images/gift_items_1785757932694.jpg';
import avatar2 from '../assets/images/cashew_kaju_1785757488672.jpg';
import avatar3 from '../assets/images/bamboo_products_1785757801080.jpg';
import avatar4 from '../assets/images/almond_badam_1785757421240.jpg';
import avatar5 from '../assets/images/black-pepper.jpeg';

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Ramesh Sharma',
    designation: 'Managing Director',
    company: 'Sharma Global Exports',
    country: 'Hyderabad, Telangana',
    flag: '🇮🇳',
    rating: 5,
    comment: 'Mihika Ayra provides exceptional export quality spices, millets, and authentic sweets. Their commitment to international packaging standards and timely deliveries is outstanding.',
    avatar: avatar1
  },
  {
    id: 'test-2',
    name: 'Rajesh Patel',
    designation: 'Founder & CEO',
    company: 'Patel Trading Co.',
    country: 'Ahmedabad, Gujarat',
    flag: '🇮🇳',
    rating: 5,
    comment: 'The traditional sweets, Gongura pickles, and Andhra snacks arrived completely fresh with custom vacuum packaging. Superior product quality and great customer service!',
    avatar: avatar2
  },
  {
    id: 'test-3',
    name: 'Priya Sundaram',
    designation: 'Procurement Head',
    company: 'Sundaram Botanicals',
    country: 'Chennai, Tamil Nadu',
    flag: '🇮🇳',
    rating: 5,
    comment: 'We sourced cold-pressed virgin coconut oil, herbal soaps, and organic cosmetics from Mihika Ayra. Pure ingredients, pristine finish, and complete quality certifications.',
    avatar: avatar3
  },
  {
    id: 'test-4',
    name: 'Suresh Reddy',
    designation: 'Partner',
    company: 'Reddy Agro Enterprises',
    country: 'Vijayawada, Andhra Pradesh',
    flag: '🇮🇳',
    rating: 5,
    comment: 'Highly reliable trade partner for agricultural commodities, sea food, and custom eco-friendly jute packaging. Excellent support and transparent communication.',
    avatar: avatar4
  },
  {
    id: 'test-5',
    name: 'Vikram Verma',
    designation: 'General Manager',
    company: 'Verma International Trade',
    country: 'New Delhi',
    flag: '🇮🇳',
    rating: 5,
    comment: 'The global tender tracking portal and export documentation assistance provided by Mihika Ayra helped our company streamline international shipments seamlessly.',
    avatar: avatar5
  }
];

