import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Container from './Container';

describe('Container', () => {
  describe('when there are children provided', () => {
    it('should render with a single child', () => {
      const { container } = render(
        <Container>
          <p></p>
        </Container>
      );

      expect(container.querySelectorAll('p')).toHaveLength(1);
    });

    it('should render with multiple children', () => {
      const { container } = render(
        <Container>
          <p></p>
          <p></p>
          <p></p>
        </Container>
      );

      expect(container.querySelectorAll('p')).toHaveLength(3);
    });
  });

  describe('when there are no children provided', () => {
    it('should not render', () => {
      const { container } = render(<Container />);

      expect(container).toBeEmptyDOMElement();
    });
  });
});
