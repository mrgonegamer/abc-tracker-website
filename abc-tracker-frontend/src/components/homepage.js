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

  return (
    <div>
      {/* Your main home screen content */}
      <button onClick={handleOpenModal}>Add New Vehicle</button>

      {isModalOpen && <NewVehicleModal onClose={handleCloseModal} />}
    </div>
  );
};

export default HomePage;
