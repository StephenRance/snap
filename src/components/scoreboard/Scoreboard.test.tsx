import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Scoreboard from './Scoreboard';

describe('Scoreboard', () => {
  describe('when the count prop is provided', () => {
    it('should update the scoreboard', () => {
      const { container } = render(<Scoreboard count={1} />);

      expect(container.querySelectorAll('li')[0]).toHaveTextContent(
        'Card 1 of'
      );
    });
  });

  describe('when the total prop is provided', () => {
    it('should update the scoreboard', () => {
      const { container } = render(<Scoreboard total={1} />);

      expect(container.querySelectorAll('li')[0]).toHaveTextContent(
        'Card 0 of 1'
      );
    });
  });

  describe('when the remaining prop is provided', () => {
    it('should update the scoreboard', () => {
      const { container } = render(<Scoreboard remaining={9} />);

      expect(container.querySelectorAll('li')[0]).toHaveTextContent(
        '(9 remaining)'
      );
    });
  });

  describe('when the suitMatches prop is provided', () => {
    it('should update the scoreboard', () => {
      const { container } = render(<Scoreboard suitMatches={1} />);

      expect(container.querySelectorAll('li')[1]).toHaveTextContent(
        'Suit matches: 1'
      );

      expect(container.querySelectorAll('li')[3]).toHaveTextContent(
        'Total matches: 1'
      );
    });
  });

  describe('when the valueMatches prop is provided', () => {
    it('should update the scoreboard', () => {
      const { container } = render(<Scoreboard valueMatches={1} />);

      expect(container.querySelectorAll('li')[2]).toHaveTextContent(
        'Value matches: 1'
      );

      expect(container.querySelectorAll('li')[3]).toHaveTextContent(
        'Total matches: 1'
      );
    });
  });

  describe('when the suitMatches and valueMatches prop is provided', () => {
    it('should update the scoreboard', () => {
      const props = {
        suitMatches: 1,
        valueMatches: 1,
      };
      const { container } = render(<Scoreboard {...props} />);

      expect(container.querySelectorAll('li')[3]).toHaveTextContent(
        'Total matches: 2'
      );
    });
  });
});
