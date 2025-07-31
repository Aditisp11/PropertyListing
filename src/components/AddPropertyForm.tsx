import React, { useState } from 'react';
import type { Property } from '../context/AppContext';
import { useAppContext } from '../context/AppContext';

type PropertyForm = Omit<Property, 'id'>;

const AddPropertyForm = () => {
  const { addProperty } = useAppContext();

  const [form, setForm] = useState<Omit<PropertyForm, 'price'> & { price: string }>({
    title: '',
    type: '',
    location: '',
    price: '',
    description: '',
    coordinates: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProperty: PropertyForm = {
      ...form,
      price: Number(form.price),
    };

    addProperty(newProperty);

    setForm({
      title: '',
      type: '',
      location: '',
      price: '',
      description: '',
      coordinates: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        placeholder="Title"
        value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })}
        required
      />
      <input
        placeholder="Type"
        value={form.type}
        onChange={e => setForm({ ...form, type: e.target.value })}
        required
      />
      <input
        placeholder="Location"
        value={form.location}
        onChange={e => setForm({ ...form, location: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={e => setForm({ ...form, price: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={e => setForm({ ...form, description: e.target.value })}
        required
      />
      <input
        placeholder="Coordinates (optional)"
        value={form.coordinates}
        onChange={e => setForm({ ...form, coordinates: e.target.value })}
      />
      <button type="submit">Add Property</button>
    </form>
  );
};

export default AddPropertyForm;
