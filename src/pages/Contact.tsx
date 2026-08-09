import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { ContactSection } from '../components/sections/ContactSection';

import bambooImg from "../assets/images/bamboo_products_1785757801080.jpg";
import redChilliPowderImg from "../assets/images/black-pepper.jpeg";
import woodenCraftsImg from "../assets/images/wooden_handicrafts_1785757750067.jpg";
import prawnsImg from "../assets/images/prawns.jpeg";
import aloeveraGelImg from "../assets/images/aloevera_gel.jpeg";
import giftItemsImg from "../assets/images/gift_items_1785757932694.jpg";

const contactBgImg = bambooImg;

export const Contact: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Contact Commercial Trade Desk"
        subtitle="Get in touch with Mihika Ayra for export quotations, sample requests, or partnership inquiries."
        breadcrumbText="Contact Us"
        bgImage={contactBgImg}
      />
      <ContactSection />
    </div>
  );
};
