import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  describe('when the image alt props are provided', () => {
    it('should render the correct image', () => {
      const props = {
        suit: 'HEARTS',
        value: '6',
      };
      const { container } = render(<Card {...props} />);

      expect(container.querySelector('img')).toHaveAttribute(
        'alt',
        'A card showing the 6 of hearts'
      );
    });
  });

  describe('when the image src prop is provided', () => {
    it('should render the correct image', () => {
      const props = {
        image: 'https://deckofcardsapi.com/static/img/6H.png',
      };
      const { container } = render(<Card {...props} />);

      expect(container.querySelector('img')).toHaveAttribute(
        'src',
        props.image
      );
    });
  });

  describe('when the error prop is provided', () => {
    it('should render the correct image caption', () => {
      const { container } = render(<Card showError={true} />);

      expect(container.querySelector('figcaption')).toHaveTextContent('Error!');
    });
  });

  describe('when the snap suit prop is provided', () => {
    it('should render the correct image caption', () => {
      const { container } = render(<Card showSnapSuit={true} />);

      expect(container.querySelector('figcaption')).toHaveTextContent(
        'Snap suit!'
      );
    });
  });

  describe('when the snap value prop is provided', () => {
    it('should render the correct image caption', () => {
      const { container } = render(<Card showSnapValue={true} />);

      expect(container.querySelector('figcaption')).toHaveTextContent(
        'Snap value!'
      );
    });
  });

  describe('when there are no props provided', () => {
    it('should render the image placeholder', () => {
      const { getByAltText } = render(<Card />);

      const image = getByAltText('A card showing the placeholder');

      expect(image).toHaveAttribute('src', '/placeholder.png');
    });

    it('should not render any image captions', () => {
      const { container } = render(<Card />);

      expect(container.querySelectorAll('figcaption')).toHaveLength(0);
    });
  });
});
