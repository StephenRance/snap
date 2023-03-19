import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Container', () => {
  describe('when the heading prop is provided', () => {
    it('should render with the heading', () => {
      const heading = 'foo';
      const { container } = render(<Header heading={heading} />);

      expect(container.querySelector('h1')).toHaveTextContent(heading);
    });
  });

  describe('when the heading prop is not provided', () => {
    it('should not render', () => {
      const { container } = render(<Header />);

      expect(container).toBeEmptyDOMElement();
    });
  });
});
