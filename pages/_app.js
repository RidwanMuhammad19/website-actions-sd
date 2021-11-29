import "../styles/globals.css";
import ThemeActions from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeActions>
      <Component {...pageProps} />
    </ThemeActions>
  );
}

export default MyApp;
