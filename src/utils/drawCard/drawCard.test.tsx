import fetchMock from 'jest-fetch-mock';
import drawCard from './drawCard';

beforeAll(() => {
  fetchMock.enableMocks();
});

beforeEach(() => {
  fetch.resetMocks();
});

const successObject = {
  success: true,
  deck_id: 'kxozasf3edqu',
  cards: [
    {
      code: '6H',
      image: 'https://deckofcardsapi.com/static/img/6H.png',
      images: {
        svg: 'https://deckofcardsapi.com/static/img/6H.svg',
        png: 'https://deckofcardsapi.com/static/img/6H.png',
      },
      value: '6',
      suit: 'HEARTS',
    },
    {
      code: '5S',
      image: 'https://deckofcardsapi.com/static/img/5S.png',
      images: {
        svg: 'https://deckofcardsapi.com/static/img/5S.svg',
        png: 'https://deckofcardsapi.com/static/img/5S.png',
      },
      value: '5',
      suit: 'SPADES',
    },
  ],
  remaining: 50,
};

describe('drawCard', () => {
  it('calls the deck of cards api once', async () => {
    fetch.mockResponseOnce(JSON.stringify(successObject));

    await drawCard('new');

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      'https://deckofcardsapi.com/api/deck/new/draw/?count=1'
    );
  });

  describe('when a valid deck ID is provided', () => {
    it('should return the success object', async () => {
      fetch.mockResponseOnce(JSON.stringify(successObject));

      const data = await drawCard('new');

      expect(data).toEqual(successObject);
    });
  });

  describe('when an invalid deck ID is provider', () => {
    it('should return the correct error object', async () => {
      fetch.mockResponseOnce(
        JSON.stringify({
          error: 'Deck ID does not exist.',
          success: false,
        })
      );

      const data = await drawCard('foo');

      expect(data).toEqual({
        error: 'Deck ID does not exist.',
        success: false,
      });
    });
  });

  describe('when an empty deck ID is provided', () => {
    it('should return the correct error object', async () => {
      fetch.mockResponseOnce();

      const data = await drawCard();

      expect(data).toEqual({
        error: "Couldn't retrieve a deck of cards to draw from.",
        success: false,
      });
    });
  });

  describe('when the api call fails', () => {
    it('should return the correct error object', async () => {
      fetch.mockReject(() => Promise.reject('Rejected.'));

      const data = await drawCard('new');

      expect(data).toEqual({
        error: "Couldn't retrieve a deck of cards to draw from.",
        success: false,
      });
    });
  });
});
