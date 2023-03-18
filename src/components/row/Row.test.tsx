import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Row from './Row';

describe('Row', () => {
  describe('when there are children provided', () => {
    it('should render with a single child', () => {
      const { container } = render(
        <Row>
          <p></p>
        </Row>
      );

      expect(container.querySelectorAll('p')).toHaveLength(1);
    });

    it('should render with multiple children', () => {
      const { container } = render(
        <Row>
          <p></p>
          <p></p>
          <p></p>
        </Row>
      );

      expect(container.querySelectorAll('p')).toHaveLength(3);
    });
  });

  describe('when there are no children provided', () => {
    it('should not render', () => {
      const { container } = render(<Row />);

      expect(container).toBeEmptyDOMElement();
    });
  });
});
