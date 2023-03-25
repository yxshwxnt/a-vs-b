import 'rsuite/dist/rsuite.min.css';
import '@/styles/globals.css'; 
import '@/styles/football.css'; 
import '@/styles/test.css'; 
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
