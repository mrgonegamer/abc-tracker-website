import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Import the calendar component
import 'react-calendar/dist/Calendar.css'; // Import the calendar styles
import NewVehicleModal from './newvehicleModal';
import './homepage.css';

const HomePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleViewCars = () => {
    window.location.href = '/view-vehicles';
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="homepage-container">
      <div className="sidebar">
        <button onClick={handleOpenModal}>Add New Vehicle</button>
        <button onClick={handleViewCars}>View All Cars</button>
      </div>
      <div className="content">
        <textarea
          className="chatbox"
          placeholder="Type your message..."
          value={message}
          onChange={handleMessageChange}
        />
        <div className="calendar-container">
          <Calendar />
        </div>
      </div>

      {isModalOpen && <NewVehicleModal onClose={handleCloseModal} />}
    </div>
  );
};

export default HomePage;
