import { GalleryItem } from '../types';
import redChilliPowderImg from '../assets/images/black-pepper.jpeg';
import cashewKajuImg from '../assets/images/cashew_kaju_1785757488672.jpg';
import mysorePakImg from '../assets/images/mysore_pak.png';
import ippaPuvvuImg from '../assets/images/ippa_puvvu_laddu_1786088519413.jpg';
import aloeveraGelImg from '../assets/images/aloevera_gel.jpeg';
import bambooImg from '../assets/images/bamboo_products_1785757801080.jpg';
import prawnsImg from '../assets/images/prawns.jpeg';

const sweetsCollectionImg = mysorePakImg;
const herbalCareImg = aloeveraGelImg;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Container Loading at Port of Chennai',
    category: 'Exports',
    image: bambooImg,
    location: 'Chennai Port, India',
    description: '40ft High Cube container being loaded with agricultural commodities bound for Dubai, UAE.'
  },
  {
    id: 'gal-2',
    title: 'Mahua Blossom Ippa Puvvu Sweet Crafting',
    category: 'Marine & Food',
    image: ippaPuvvuImg,
    location: 'Mihika Ayra Store, Hyderabad',
    description: 'Heritage preparation of wild Mahua flower sweet with pure Desi Ghee and roasted nuts.'
  },
  {
    id: 'gal-3',
    title: 'Reefer Cold Storage Marine Harvest',
    category: 'Marine & Food',
    image: prawnsImg,
    location: 'Vizag Marine Hub, Andhra Pradesh',
    description: 'IQF Vannamei Prawns flash-frozen at -40°C in HACCP export processing plant.'
  },
  {
    id: 'gal-4',
    title: 'Guntur Spice Yard Quality Sorting',
    category: 'Spices & Agri',
    image: redChilliPowderImg,
    location: 'Guntur, Andhra Pradesh',
    description: 'Hand-sorting S17 Teja Red Chillies and Lakadong Turmeric fingers before cold grinding.'
  },
  {
    id: 'gal-5',
    title: 'Eco-Friendly Jute Bag Packaging Line',
    category: 'Packaging',
    image: bambooImg,
    location: 'Mihika Ayra Unit, Telangana',
    description: 'Screen printing custom logo corporate totes on 100% natural laminated golden jute.'
  },
  {
    id: 'gal-6',
    title: 'Bonded Warehouse Inventory Inspection',
    category: 'Warehousing',
    image: bambooImg,
    location: 'Hyderabad Inland Container Depot',
    description: 'SGS pre-shipment quality audit and palletization check for European buyer.'
  },
  {
    id: 'gal-7',
    title: 'Single-Origin Coffee Estate Harvest',
    category: 'Spices & Agri',
    image: redChilliPowderImg,
    location: 'Araku Valley, Andhra Pradesh',
    description: 'Shade-grown Arabica Plantation AA cherry beans dried on raised sun-beds.'
  },
  {
    id: 'gal-8',
    title: 'Vacuum Sealed Sweets Export Gift Boxes',
    category: 'Packaging',
    image: sweetsCollectionImg,
    location: 'Mihika Ayra Processing Center',
    description: 'Nitrogen-flushed Pootharekulu and dry fruit confections packed for Diwali US exports.'
  },
  {
    id: 'gal-9',
    title: 'Herbal Care Organic Botanical Extracts',
    category: 'Marine & Food',
    image: herbalCareImg,
    location: 'Hygiene Lab, Hyderabad',
    description: 'Micro-milled Bringraj, Amla, and Shikakai hair powders packed in UV-shielded jars.'
  }
];
