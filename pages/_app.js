/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import './_shared.scss';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
