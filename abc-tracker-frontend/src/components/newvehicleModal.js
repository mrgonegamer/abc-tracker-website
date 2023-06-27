import React from 'react';
import './newvehicle.css';
import NewVehicle from './newvehicle';

const NewVehicleModal = ({ onClose }) => {
  const handleFormSubmit = (formData) => {
    // Handle form submission logic
    console.log(formData);

    // Close the modal after form submission
    onClose();
  };

  return (
    <div className="modal-background">
      <div className="modal-content">
        <h1>New Vehicle</h1>
        <NewVehicle onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default NewVehicleModal;
