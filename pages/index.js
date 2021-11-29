import Layouts from "../layouts";
import Hero from "../view/home/hero";
import Berita from "../view/home/berita";
import Kurikulum from "../view/home/kurikulum";
import Informasi from "../view/home/informasi";
import ELearning from "../view/home/e-learning";
import Potensi from "../view/home/prestasi";

export async function getServerSideProps() {
  const response = await fetch(
    "https://actions-api-sd.sandboxindonesia.id/api/berita"
  );
  const listBerita = await response.json();
  return {
    props: { listBerita },
  };
}

const Home = ({ listBerita }) => {
  return (
    <Layouts>
      <Hero />
      <Berita listBerita={listBerita} />
      <Kurikulum />
      <Informasi />
      <ELearning />
      <Potensi />
    </Layouts>
  );
};

export default Home;
