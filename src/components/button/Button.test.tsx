import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  describe('when there is a label provided', () => {
    it('should render the button', () => {
      const { container } = render(<Button label="Test" />);

      expect(container.querySelector('.btn--primary')).toHaveTextContent(
        'Test'
      );
    });

    it('should render the button as the secondary variant', () => {
      const { container } = render(<Button label="Test" variant="secondary" />);

      expect(container.querySelector('.btn--secondary')).toHaveTextContent(
        'Test'
      );
    });

    it('should render the button with passed props', () => {
      const onClick = jest.fn();
      const { container } = render(<Button label="Test" onClick={onClick} />);

      fireEvent.click(container.querySelector('button'));

      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('when there is not a label provided', () => {
    it('should not render', () => {
      const { container } = render(<Button />);

      expect(container).toBeEmptyDOMElement();
    });
  });
});
