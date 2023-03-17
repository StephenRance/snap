interface ShuffleCards {
  deck_id?: string;
  error?: string;
  remaining?: number;
  shuffled?: boolean;
  success: boolean;
}

const shuffleCards = async (): Promise<ShuffleCards> => {
  try {
    const response = await fetch(
      'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    );
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);

    return {
      error: "Couldn't retrieve any cards to shuffle.",
      success: false,
    };
  }
};

export default shuffleCards;
