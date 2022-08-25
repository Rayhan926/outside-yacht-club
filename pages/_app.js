import ConnectWalletModal from "../components/ConnectWalletModal/ConnectWalletModal";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ConnectWalletModal />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
