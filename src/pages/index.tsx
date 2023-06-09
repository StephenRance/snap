import Card from '@/components/card/Card';
import Container from '@/components/container/Container';
import Controls from '@/components/controls/Controls';
import Header from '@/components/header/Header';
import Row from '@/components/row/Row';
import Scoreboard from '@/components/scoreboard/Scoreboard';
import { drawCard, shuffleCards } from '@/utils';
import Head from 'next/head';
import { useEffect, useState } from 'react';

interface Props {
  deck_id?: string;
  remaining?: number;
  success: boolean;
}

const Home = ({
  deck_id: deckId = '',
  remaining: total = 0,
  success,
}: Props) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [count, setCount] = useState<number>(0);
  const [error, setError] = useState<boolean>(!success);
  const [nextCard, setNextCard] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [previousCard, setPreviousCard] = useState<any>({});
  const [remaining, setRemaining] = useState<number>(total);
  const [snapSuit, setSnapSuit] = useState<boolean>(false);
  const [snapValue, setSnapValue] = useState<boolean>(false);
  const [suitMatches, setSuitMatches] = useState<number>(0);
  const [valueMatches, setValueMatches] = useState<number>(0);

  const drawCardHandler = async (deckId: string) => {
    setError(false);
    setLoading(true);

    try {
      const { cards, remaining = 0 } = await drawCard(deckId);
      const card = cards?.[0];

      const snapSuit = nextCard.suit === card?.suit;
      const snapValue = nextCard.value === card?.value;

      setPreviousCard(nextCard);
      setNextCard(card);

      setCount(total - remaining);
      setRemaining(remaining);
      setSnapSuit(snapSuit);
      setSnapValue(snapValue);

      snapSuit && setSuitMatches(suitMatches + 1);
      snapValue && setValueMatches(valueMatches + 1);

      (snapSuit || snapValue) && audio?.play?.();
    } catch {
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    setAudio(new Audio('/applause.wav'));
  }, []);

  return (
    <>
      <Head>
        <title>Snap! by Stephen Rance</title>
        <meta content="Generated by create next app" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
        <link
          crossOrigin="anonymous"
          href="https://deckofcardsapi.com/"
          rel="preconnect"
        />
      </Head>

      <Header heading="Snap! by Stephen Rance" />

      <main>
        <Row>
          <Container>
            <>
              <Card
                image={previousCard?.image}
                showError={error}
                showSnapSuit={snapSuit}
                showSnapValue={snapValue}
                suit={previousCard?.suit}
                value={previousCard?.value}
              />

              <Card
                image={nextCard?.image}
                showError={error}
                showSnapSuit={snapSuit}
                showSnapValue={snapValue}
                suit={nextCard?.suit}
                value={nextCard?.value}
              />
            </>
          </Container>
        </Row>

        <Row>
          <Container>
            <Scoreboard
              count={count}
              remaining={remaining}
              suitMatches={suitMatches}
              total={total}
              valueMatches={valueMatches}
            />
          </Container>
        </Row>

        <Row>
          <Container>
            <Controls
              disableDraw={loading || count === total}
              disableReset={!error && !count}
              onClick={() => drawCardHandler(deckId)}
            />
          </Container>
        </Row>
      </main>
    </>
  );
};

Home.getInitialProps = () => shuffleCards();

export default Home;
