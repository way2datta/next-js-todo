import 'bootstrap/dist/css/bootstrap.min.css';
import './_shared.scss';

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
