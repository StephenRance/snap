import fetchMock from 'jest-fetch-mock';
import shuffleCards from './shuffleCards';

beforeAll(() => {
  fetchMock.enableMocks();
});

beforeEach(() => {
  fetch.resetMocks();
});

const successObject = {
  success: true,
  deck_id: '3p40paa87x90',
  shuffled: true,
  remaining: 52,
};

describe('shuffleCards', () => {
  it('calls the deck of cards api once', async () => {
    fetch.mockResponseOnce(JSON.stringify(successObject));

    await shuffleCards();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    );
  });

  describe('when the api call succeeds', () => {
    it('should return the success object', async () => {
      fetch.mockResponseOnce(JSON.stringify(successObject));

      const data = await shuffleCards();

      expect(data).toEqual(successObject);
    });
  });

  describe('when the api call fails', () => {
    it('should return the error object', async () => {
      fetch.mockReject(() => Promise.reject('Rejected.'));

      const data = await shuffleCards();

      expect(data).toEqual({
        error: "Couldn't retrieve any cards to shuffle.",
        success: false,
      });
    });
  });
});
