import Layouts from "../layouts";
import Berita from "../view/home/berita";
import ELearning from "../view/home/e-learning";
import Informasi from "../view/home/informasi";
import Hero from "../view/home/hero";
import Kurikulum from "../view/home/kurikulum";
import Prestasi from "../view/home/prestasi";
import Produk from "../view/home/produk";

export async function getServerSideProps() {
  //BERITA
  const reaquestListBerita = await fetch(
    `${process.env.REACT_APP_API_URL}/api/berita`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  const requestKategoriBerita = await fetch(
    `${process.env.REACT_APP_API_URL}/api/kategori-berita`,
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
    `${process.env.REACT_APP_API_URL}/api/kurikulum`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  const listKurikulum = await requestKurikulum.json();

  //INFORMASI
  const requestInformasi = await fetch(
    `${process.env.REACT_APP_API_URL}/api/kategori-informasi`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  const listInformasi = await requestInformasi.json();

  //POTENSI
  const requestListPrestasi = await fetch(
    `${process.env.REACT_APP_API_URL}/api/prestasi`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  const listPrestasi = await requestListPrestasi.json();

  //E-LEARNING
  const requestELearning = await fetch(
    `${process.env.REACT_APP_API_URL}/api/elearning`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  const dataELearning = await requestELearning.json();

  //PROFIL
  const requestProfil = await fetch(
    `${process.env.REACT_APP_API_URL}/api/profil-sekolah`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  const dataProfil = await requestProfil.json();

  //PRODUK
  const requestProduk = await fetch(
    `${process.env.REACT_APP_API_URL}/api/produk`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
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
