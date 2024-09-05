import '../styles/globals.css';
import Nav from '../components/Nav';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <head><script>{(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-ABCDEFGH')}</script></head>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-ABCDEFGH" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <Nav />
      <Component {...pageProps} />
    </>
  );
};