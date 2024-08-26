import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import './ContactCard.css'; // Ensure the path is correct

const ContactCard = ({ name, email, phone, linkedin, additionalInfo, contactLink, imageUrl }) => {
  const handleContactClick = () => {
    // Redirect to the contact link when the button is clicked
    window.open(contactLink, '_blank');
  };

  return (
    <div className="contact-card bg-[#122314d9] border-[0.4rem] border-[#7CA97C] shadow-md mx-auto my-5 text-left relative transition-all duration-600 ease-in-out overflow-hidden">
      <img src={imageUrl} alt={`${name}'s photo`} className="contact-card-img grayscale" />
      <div className="card-content flex flex-col items-center justify-center">
        <h2 className="text-xl mb-2 text-white font-bold uppercase">{name}</h2>
        <div className="details-container">
          <p className="text-white flex items-center justify-center mb-2">
            <a href={`mailto:${email}`} className="text-whitesmoke flex items-center" aria-label={`Email ${name}`}>
              <FaEnvelope className="icon text-[#7CA97C] mr-2" />
              {email}
            </a>
          </p>
          <p className="text-white flex items-center justify-center mb-2">
            <a href={`tel:${phone}`} className="text-whitesmoke flex items-center" aria-label={`Phone number of ${name}`}>
              <FaPhone className="icon text-[#7CA97C] mr-2" />
              {phone}
            </a>
          </p>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact-email text-whitesmoke font-bold flex items-center justify-start mt-2 hover:underline" aria-label={`LinkedIn profile of ${name}`}>
            <FaLinkedin className="icon text-[#7CA97C] mr-2" />
            LinkedIn
          </a>
          <div className="additional-info text-aliceblue text-sm text-left">
            <p><strong>Additional Info:</strong></p>
            <p>{additionalInfo}</p>
          </div>
          <button 
            className="contact-btn bg-[#7CA97C] text-black border-none py-3 px-6 rounded-full mt-3 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#3E6040] hover:scale-105"
            onClick={handleContactClick}
            aria-label={`Contact ${name}`}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
