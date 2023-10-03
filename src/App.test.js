// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText('Bienvenido a Mi Tienda'); // Elimina la expresión regular
  expect(welcomeElement).toBeInTheDocument();
});
