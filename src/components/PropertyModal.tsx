import React from 'react';
import { useAppContext } from '../context/AppContext';

const PropertyModal = () => {
  const { selectedProperty, closeModal } = useAppContext();
  if (!selectedProperty) return null;

  const { title, type, location, price, description, coordinates } = selectedProperty;
  const mapSrc = coordinates
    ? `https://maps.google.com/maps?q=${coordinates}&z=15&output=embed`
    : null;

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>{title}</h2>
        <p><b>Type:</b> {type}</p>
        <p><b>Location:</b> {location}</p>
        <p><b>Price:</b> ₹{price}</p>
        <p>{description}</p>
        {mapSrc && <iframe src={mapSrc} width="100%" height="200" style={{ border: 0 }} loading="lazy" />}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default PropertyModal;
