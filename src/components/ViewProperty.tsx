import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const ViewProperty: React.FC = () => {
  const { id } = useParams();
  const { properties } = useAppContext();

  const property = properties.find(p => p.id === Number(id));

  if (!property) return <p style={{ textAlign: 'center' }}>Property not found.</p>;

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>{property.title}</h2>
      <p style={infoStyle}><strong>Location:</strong> {property.location}</p>
      <p style={infoStyle}><strong>Price:</strong> ₹{property.price}</p>
      <p style={infoStyle}><strong>Type:</strong> {property.type}</p>
      <p style={infoStyle}><strong>Description:</strong> {property.description}</p>

      {property.coordinates && (
        <div style={{ marginTop: '24px' }}>
          <h3 style={{ marginBottom: '12px', color: '#4b2e83' }}>Map Location</h3>
          <iframe
            title="Google Map"
            width="100%"
            height="300"
            style={{
              border: 0,
              borderRadius: '12px',
              boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps?q=${property.coordinates}&output=embed`}
          ></iframe>
        </div>
      )}
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  maxWidth: '800px',
  margin: '40px auto',
  padding: '24px',
  borderRadius: '12px',
  background: 'linear-gradient(to right, #ffffff, #f2f2ff)',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
};

const titleStyle: React.CSSProperties = {
  fontSize: '2rem',
  marginBottom: '16px',
  color: '#2e1065',
};

const infoStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  marginBottom: '10px',
  color: '#333',
};

export default ViewProperty;
