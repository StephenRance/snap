import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import Controls from './Controls';

describe('Controls', () => {
  describe('when the disableDraw prop is provided', () => {
    it('should disable the draw card button', () => {
      const { container } = render(<Controls disableDraw={true} />);

      expect(container.querySelectorAll('button')[0]).toBeDisabled();
    });
  });

  describe('when the disableDraw prop is not provided', () => {
    describe('and the onClick prop is provided', () => {
      it('should not disable the draw card button', () => {
        const onClick = jest.fn();
        const { container } = render(<Controls onClick={onClick} />);

        expect(container.querySelectorAll('button')[0]).not.toBeDisabled();
      });

      it('should trigger the function when the draw card button is clicked', () => {
        const onClick = jest.fn();
        const { container } = render(<Controls onClick={onClick} />);

        fireEvent.click(container.querySelectorAll('button')[0]);

        expect(onClick).toHaveBeenCalledTimes(1);
      });
    });

    describe('and the onClick prop is not provided', () => {
      it('should disable the draw card button', () => {
        const { container } = render(<Controls />);

        expect(container.querySelectorAll('button')[0]).toBeDisabled();
      });
    });
  });

  describe('when the disableReset prop is provided', () => {
    it('should disable the draw card button', () => {
      const { container } = render(<Controls disableReset={true} />);

      expect(container.querySelectorAll('button')[1]).toBeDisabled();
    });
  });

  describe('when the disableReset prop is not provided', () => {
    it('should not disable the reset button', () => {
      const { container } = render(<Controls />);

      expect(container.querySelectorAll('button')[1]).not.toBeDisabled();
    });
  });
});
