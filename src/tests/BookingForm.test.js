// src/tests/BookingForm.test.js
import { render, screen } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

test('renders form heading', () => {
  render(<BookingForm />);
  const heading = screen.getByText(/Book a Table/i);
  expect(heading).toBeInTheDocument();
});
