import { render, screen } from '@testing-library/react';
import App from './App';

test('renders E-ZPass Delaware Tracker title', () => {
  render(<App />);
  const linkElement = screen.getByText(/E-ZPass Delaware Expense Tracker/i);
  expect(linkElement).toBeInTheDocument();
});
