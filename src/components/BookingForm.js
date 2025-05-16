// src/components/BookingForm.js
import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.guests || formData.guests <= 0) newErrors.guests = "Guests must be more than 0";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Booking submitted successfully!");
      console.log("Submitted", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Booking Form">
      <h2>Book a Table</h2>

      <label htmlFor="name">Name*</label>
      <input id="name" name="name" value={formData.name} onChange={handleChange} required />
      {errors.name && <span role="alert">{errors.name}</span>}

      <label htmlFor="date">Date*</label>
      <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
      {errors.date && <span role="alert">{errors.date}</span>}

      <label htmlFor="time">Time*</label>
      <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
      {errors.time && <span role="alert">{errors.time}</span>}

      <label htmlFor="guests">Number of Guests*</label>
      <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} required />
      {errors.guests && <span role="alert">{errors.guests}</span>}

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
        <option value="">Select</option>
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
      </select>

      <button type="submit">Book</button>
    </form>
  );
};

export default BookingForm;
