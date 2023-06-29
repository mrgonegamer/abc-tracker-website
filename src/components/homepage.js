import React, { useState } from 'react';
import NewVehicleModal from './newvehicleModal';

const HomePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleEditVehicle = () => {
    window.location.href = "/edit-vehicle";
  };

  const handleViewVehicles = () => {
    window.location.href = "/view-vehicles";
  };

  return (
    <div>
      {/* Your main home screen content */}
      <button onClick={handleOpenModal}>Add New Vehicle</button>
      <button onClick={handleEditVehicle}>Edit Vehicle</button>
      <button onClick={handleViewVehicles}>View Vehicles</button>

      {isModalOpen && <NewVehicleModal onClose={handleCloseModal} />}
    </div>
  );
};

export default HomePage;
