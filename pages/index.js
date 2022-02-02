import Layouts from "../layouts";
import Berita from "../view/home/berita";
import ELearning from "../view/home/e-learning";
import Informasi from "../view/home/informasi";
import Hero from "../view/home/hero";
import Kurikulum from "../view/home/kurikulum";
import Prestasi from "../view/home/prestasi";
import Produk from "../view/home/produk";

const ROOT_API = process.env.REACT_APP_API_URL;

export async function getServerSideProps() {
  //BERITA
  const reaquestListBerita = await fetch(`${ROOT_API}/api/berita`, {
    headers: {
      Accept: "application/json",
    },
  });

  const requestKategoriBerita = await fetch(`${ROOT_API}/api/kategori-berita`, {
    headers: {
      Accept: "application/json",
    },
  });
  const listKategoriBerita = await requestKategoriBerita.json();
  const listBerita = await reaquestListBerita.json();

  //KURIKULUM
  const requestKurikulum = await fetch(`${ROOT_API}/api/kurikulum`, {
    headers: {
      Accept: "application/json",
    },
  });

  const listKurikulum = await requestKurikulum.json();

  //INFORMASI
  const requestInformasi = await fetch(`${ROOT_API}/api/kategori-informasi`, {
    headers: {
      Accept: "application/json",
    },
  });

  const listInformasi = await requestInformasi.json();

  //POTENSI
  const requestListPrestasi = await fetch(`${ROOT_API}/api/prestasi`, {
    headers: {
      Accept: "application/json",
    },
  });
  const listPrestasi = await requestListPrestasi.json();

  //E-LEARNING
  const requestELearning = await fetch(`${ROOT_API}/api/elearning`, {
    headers: {
      Accept: "application/json",
    },
  });
  const dataELearning = await requestELearning.json();

  //PROFIL
  const requestProfil = await fetch(`${ROOT_API}/api/profil-sekolah`, {
    headers: {
      Accept: "application/json",
    },
  });
  const dataProfil = await requestProfil.json();

  //PRODUK
  const requestProduk = await fetch(`${ROOT_API}/api/produk`, {
    headers: {
      Accept: "application/json",
    },
  });
  const dataProduk = await requestProduk.json();

  return {
    props: {
      listBerita,
      listKategoriBerita,
      listPrestasi,
      dataELearning,
      listKurikulum,
      listInformasi,
      dataProfil,
      dataProduk,
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
  dataProduk,
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
      <Produk data={dataProduk?.data} />
      <Prestasi listPrestasi={listPrestasi} />
    </Layouts>
  );
};

export default Home;
