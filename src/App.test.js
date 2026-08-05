import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home landing heading', () => {
  render(<App />);

  const heading = screen.getByText(/gain more knowledge in less time/i);
  expect(heading).toBeInTheDocument();
});
