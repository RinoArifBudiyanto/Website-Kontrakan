import HeroImage from "../assets/images/hero.png";
import AboutImage from "../assets/images/profil.jpg";
import FrontImage from "../assets/images/hal-depan.jpg";
import ParkingImage from "../assets/images/parkiran.jpg";
export const HomePage = () => {
  return (
    <div className="homepage pb-10">
      {/* Hero Start */}
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl mb-7 font-bold">
              Kontrakan siap huni{" "}
              <span className="text-sky-400 font-bold">
                dengan harga yang murah
              </span>
            </h1>
            <p className="text-base/8 mb:7 py-5">
              Disewakan kontrakan dengan kamar mandi dalam, ruang tamu dan kamar
              tidur, dengan tempat parkir kendaraan bermotor.
            </p>
            <a
              href="#"
              className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full"
            >
              Deskripsi Kontrakan <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box">
            <img
              src={HeroImage}
              alt="Hero Image"
              className="md:w-full w-[400px] mx-auto md:m-0"
            />
          </div>
        </div>
        {/* Hero End */}
        {/* About Start */}
        <div
          className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-5 gap-10 md:pt-20 pt-32"
          id="about"
        >
          <div className="box md:order-1 order-2 shadow-md p-5 rounded-md">
            <img
              src={AboutImage}
              alt="About Image"
              className="lg:w-[500px] w-[400px] md:m-0 mx-auto "
            />
          </div>
          <div className="box md:order-2 order-1 ">
            <h1 className="lg:text-5xl/tight text-3xl mb-7 font-bold">
              Apa kata <span className="text-sky-400 font-bold">Ibu Rita?</span>
            </h1>
            <p className="text-base/loose">
              Kontrakan itu hanya simbol. Agar manusia tetap mau mengingat Allah
              SWT. Mau bersyukur dan tidak berkeluh-kesah. Pengontrak yang tidak
              menggunakan kontrakan untuk perbuatan buruk.
            </p>
          </div>
        </div>
        {/* About End */}
        {/* Deskripsi Start */}
        <div className="deskripsi pt-20" id="deskripsi">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-bold mb-2 ">
            Denah <span className="text-sky-400 font-bold">Kontrakan</span>
          </h1>
          <div className="deskripsi-box pt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-2 bg-slate-50 shadow">
              <img src={FrontImage} alt="Hal-depan" className="w-full " />
              <h3 className="text-center  font-bold">Halaman Depan </h3>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={ParkingImage} alt="about" />
              <h3 className="text-center  font-bold">Halaman Parkiran </h3>
            </div>
          </div>
        </div>
        {/* Deskripsi End */}
      </div>
    </div>
  );
};

export default HomePage;
