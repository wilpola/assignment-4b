import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import { renderIntoDocument } from 'react-dom/test-utils';
import App from './App';

test('Selector', () => {
  const {container } = render(<App />);
  const selector = getByTestId(container, 'selector');
  expect(selector).toBeInTheDocument(selector);
});

