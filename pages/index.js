import Layouts from "../layouts";
import Berita from "../view/home/berita";
import ELearning from "../view/home/e-learning";
import Informasi from "../view/home/informasi";
import Hero from "../view/home/hero";
import Kurikulum from "../view/home/kurikulum";
import Prestasi from "../view/home/prestasi";

export async function getServerSideProps() {
  //BERITA
  const reaquestListBerita = await fetch(
    `https://actions-api-sd.sandboxindonesia.id/api/berita`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  // ?search=${query.search}

  const requestKategoriBerita = await fetch(
    "https://actions-api-sd.sandboxindonesia.id/api/kategori-berita",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  const listKategoriBerita = await requestKategoriBerita.json();
  const listBerita = await reaquestListBerita.json();

  //KURIKULUM
  const requestKurikulum = await fetch(
    "https://actions-api-sd.sandboxindonesia.id/api/kurikulum",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  const listKurikulum = await requestKurikulum.json();

  //INFORMASI
  const requestInformasi = await fetch(
    "https://actions-api-sd.sandboxindonesia.id/api/informasi",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  const listInformasi = await requestInformasi.json();

  //POTENSI
  const requestListPrestasi = await fetch(
    "https://actions-api-sd.sandboxindonesia.id/api/prestasi",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  const listPrestasi = await requestListPrestasi.json();

  //E-LEARNING
  const requestELearning = await fetch(
    "https://actions-api-sd.sandboxindonesia.id/api/elearning",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  const dataELearning = await requestELearning.json();

  //PROFIL
  const requestProfil = await fetch(
    "https://actions-api-sd.sandboxindonesia.id/api/profil-sekolah",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  const dataProfil = await requestProfil.json();

  return {
    props: {
      listBerita,
      listKategoriBerita,
      listPrestasi,
      dataELearning,
      listKurikulum,
      listInformasi,
      dataProfil,
    },
  };
}

const Home = ({
  listBerita,
  listKategoriBerita,
  listPrestasi,
  dataELearning,
  listKurikulum,
  listInformasi,
  dataProfil,
}) => {
  return (
    <Layouts data={dataProfil?.data}>
      <Hero data={dataProfil?.data} />
      <Berita
        listBerita={listBerita?.data}
        listKategoriBerita={listKategoriBerita?.data}
      />
      <Kurikulum data={listKurikulum?.data} />
      <Informasi data={listInformasi?.data} />
      <ELearning data={dataELearning?.data} />
      <Prestasi listPrestasi={listPrestasi} />
    </Layouts>
  );
};

export default Home;
