import React from 'react';
import ContactCard from './ContactCard';
import './ContactSection.css';

const contacts = [
  {
    name: 'Kailash Nadh',
    email: 'kailash@example.com',
    phone: '+91-12345-67890',
    linkedin: 'https://www.linkedin.com/in/kailash-nadh/',
    additionalInfo: 'Expert in financial technology and software development.',
    contactLink: 'https://nadh.in/',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxKAAobLxFVezj8dU9jL4zpC1K62NYzbt8eQ&s', // Replace with actual image URL
  },
  {
    name: 'Rushabh Mehta',
    email: 'rushabh@example.com',
    phone: '+91-98765-43210',
    linkedin: 'https://www.linkedin.com/in/rushabhmehta/',
    additionalInfo: 'Known for creating the ERPNext open-source project.',
    contactLink: 'https://www.linkedin.com/in/rushabhmehta1?originalSubdomain=in',
    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_x9KNoCBWmRcm7cQtmMI_0NERqr0WqfKwTw&s', // Replace with actual image URL
  },
  {
    name: 'Poruri Sai Rahul',
    email: 'rahul@example.com',
    phone: '+91-12345-11111',
    linkedin: 'https://www.linkedin.com/in/rahul-poruri/',
    additionalInfo: 'A leader in the open-source community and policy advocate.',
    contactLink: 'https://rahulporuri.github.io/talks.html',
    imageUrl: 'https://avatars.githubusercontent.com/u/1926457?v=4', // Replace with actual image URL
  },
  {
    name: 'Venkatesh Hariharan',
    email: 'venkatesh@example.com',
    phone: '+91-54321-11111',
    linkedin: 'https://www.linkedin.com/in/venky7/',
    additionalInfo: 'Specializes in public policy and legal reforms.',
    contactLink: 'https://www.linkedin.com/in/venky7/',
    imageUrl: 'https://sixmumbai.wordpress.com/wp-content/uploads/2015/11/venkatesh-hariharan.png', // Replace with actual image URL
  },
];

const ContactSection = () => {
  return (
    <div className="contact-section">
      {contacts.map((contact, index) => (
        <ContactCard
          key={index}
          name={contact.name}
          email={contact.email}
          phone={contact.phone}
          linkedin={contact.linkedin}
          additionalInfo={contact.additionalInfo}
          contactLink={contact.contactLink}
          imageUrl={contact.imageUrl}
        />
      ))}
    </div>
  );
};

export default ContactSection;
