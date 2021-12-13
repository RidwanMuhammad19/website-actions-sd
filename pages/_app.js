import { useState, useEffect } from "react";
import Router from "next/router";
import ThemeActions from "../theme";
import LoadingGlobal from "../component/loading-global";
import "../styles/_helper.css";
import Head from "next/head";

// export async function getServerSideProps() {
//   const requestProfil = await fetch(
//     "https://actions-api-sd.sandboxindonesia.id/api/profil-sekolah",
//     {
//       headers: {
//         Accept: "application/json",
//       },
//     }
//   );

//   const dataProfil = await requestProfil.json();

//   return {
//     props: {
//       dataProfil,
//     },
//   };
// }

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };

    const end = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <ThemeActions>
      <Head>
        <title>SD MUHAMMADIYAH KLATEN UTARA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <p>Cerdas, Kreatif dan Berakhlak mulia</p>
      </Head>
      {loading ? <LoadingGlobal /> : <Component {...pageProps} />}
    </ThemeActions>
  );
}

export default MyApp;
