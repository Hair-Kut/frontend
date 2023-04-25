import { render, screen } from '@testing-library/react';
import App from 'src/App';

test('first test', () => {
  render(<App />);
  const h1 = screen.getByText('Hair-Kut');
  expect(h1).toBeInTheDocument();
});
