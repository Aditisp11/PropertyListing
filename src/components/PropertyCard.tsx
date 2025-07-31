import React from 'react';
import type { Property } from '../context/AppContext';
import { useAppContext } from '../context/AppContext';

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  const { selectProperty } = useAppContext();
  const mapSrc = `https://maps.google.com/maps?q=${property.coordinates}&z=15&output=embed`;

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>{property.title}</h2>
      <p><strong>🏠 Type:</strong> {property.type}</p>
      <p><strong>📍 Location:</strong> {property.location}</p>
      <p><strong>💰 Price:</strong> ₹{property.price.toLocaleString()}</p>
      <p style={{ color: '#555' }}>{property.description.slice(0, 70)}...</p>

      <div style={mapContainer}>
        <iframe
          src={mapSrc}
          width="100%"
          height="200"
          style={{ border: 0, borderRadius: '12px' }}
          loading="lazy"
        ></iframe>
      </div>

      <button style={buttonStyle} onClick={() => selectProperty(property)}>
        View Details
      </button>
    </div>
  );
};

export default PropertyCard;

const cardStyle: React.CSSProperties = {
  background: 'linear-gradient(to right, #e2eafc, #f9f9ff)',
  borderRadius: '16px',
  boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
  padding: '20px',
  width: '100%',
  maxWidth: '400px',
  margin: '20px auto',
  fontFamily: '"Segoe UI", "Roboto", "Open Sans", sans-serif',
  color: '#333',
};

const titleStyle: React.CSSProperties = {
  fontSize: '22px',
  fontWeight: 'bold',
  color: '#4a4a88',
  marginBottom: '10px',
};

const buttonStyle: React.CSSProperties = {
  marginTop: '15px',
  padding: '10px 16px',
  backgroundColor: '#4a4a88',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const mapContainer: React.CSSProperties = {
  marginTop: '12px',
  borderRadius: '12px',
  overflow: 'hidden',
};
