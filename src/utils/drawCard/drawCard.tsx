interface Images {
  png: string;
  svg: string;
}

interface Card {
  code: string;
  image: string;
  images: Images;
  suit: string;
  value: string;
}

interface DrawCard {
  cards?: Card[];
  deck_id?: string;
  error?: string;
  remaining?: number;
  success: boolean;
}

const drawCard = async (deckId: string): Promise<DrawCard> => {
  try {
    if (!deckId) {
      throw 'Deck ID was not provided.';
    }

    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
    );
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);

    return {
      error: "Couldn't retrieve a deck of cards to draw from.",
      success: false,
    };
  }
};

export default drawCard;
