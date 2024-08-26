import React from 'react';
import ContactSection from './ContactSection';

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-white text-2xl md:text-4xl font-semibold text-center mt-8 md:mt-12">
        CONTACT US
      </h1>
      <ContactSection />
    </div>
  );
};

export default ContactPage;
