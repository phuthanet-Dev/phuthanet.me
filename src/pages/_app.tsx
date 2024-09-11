// /src/pages/_app.tsx

import { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '../components/Layout'; // หากมี layout ใช้ร่วมกัน

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
