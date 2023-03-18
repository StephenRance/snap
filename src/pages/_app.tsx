import '@/styles/fonts.css';
import '@/styles/global.css';
import '@/styles/variables.css';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
