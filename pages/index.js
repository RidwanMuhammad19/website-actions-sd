import Layouts from "../layouts";
import Berita from "../view/home/berita";
import ELearning from "../view/home/e-learning";
import Informasi from "../view/home/informasi";
import Hero from "../view/home/hero";
import Kurikulum from "../view/home/kurikulum";
import Prestasi from "../view/home/prestasi";

export async function getServerSideProps({ query }) {
  //BERITA
  const reaquestListBerita = await fetch(
    `https://actions-api-sd.sandboxindonesia.id/api/berita`
  );
  // ?search=${query.search}

  const requestKategoriBerita = await fetch(
    "https://actions-api-sd.sandboxindonesia.id/api/kategori-berita"
  );
  const listKategoriBerita = await requestKategoriBerita.json();
  const listBerita = await reaquestListBerita.json();

  //POTENSI
  const requestListPrestasi = await fetch(
    "https://actions-api-sd.sandboxindonesia.id/api/prestasi"
  );
  const listPrestasi = await requestListPrestasi.json();

  //E-LEARNING
  const requestELearning = await fetch(
    "https://actions-api-sd.sandboxindonesia.id/api/elearning"
  );
  const dataELearning = await requestELearning.json();

  return {
    props: { listBerita, listKategoriBerita, listPrestasi, dataELearning },
  };
}

const Home = ({
  listBerita,
  listKategoriBerita,
  listPrestasi,
  dataELearning,
}) => {
  return (
    <Layouts>
      <Hero />
      <Berita
        listBerita={listBerita?.data}
        listKategoriBerita={listKategoriBerita?.data}
      />
      <Kurikulum />
      <Informasi />
      <ELearning data={dataELearning?.data} />
      <Prestasi listPrestasi={listPrestasi} />
    </Layouts>
  );
};

export default Home;
