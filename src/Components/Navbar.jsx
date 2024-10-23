import { useEffect, useState } from "react";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleClick = () => {
    setShow(!show);
    // console.log(show);
  };
  // tombol klik
  let menuActive = show ? "left-0" : "-left-full";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    });
  });

  let scrolActive = scroll ? "py-6 bg-white shadow" : "py-4";
  return (
    <div className={`navbar fixed w-full transition-all 4 ${scrolActive}`}>
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <h1 className="sm:text-2xl text-xl font-bold text-sky-400">KIR</h1>
          </div>
          <ul
            className={`flex gap-12:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:p-0 md:m-0
            md:transition-none  md:text-black gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded
            shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all `}
          >
            <li className="flex items-center gap-3  hover:text-sky-500">
              <i className="ri-home-line text-3xl md:hidden block"></i>
              <a href="#home" className="font-medium opacity-75">
                Beranda
              </a>
            </li>
            <li className="flex items-center gap-3>  hover:text-sky-500">
              <i className="ri-bookmark-line text-3xl md:hidden block"></i>
              <a href="#about" className="font-medium opacity-75">
                Deskripsi
              </a>
            </li>
            {/* <li className="flex items-center gap-3">
              <i className="ri-contacts-book-3-line text-3xl md:hidden block"></i>
              <a href="#" className="font-medium opacity-75">
                Kontak
              </a>
            </li> */}
            <li className="flex items-center gap-3  hover:text-sky-500">
              <i className="ri-contacts-book-3-line text-3xl md:hidden block"></i>
              <a href="#deskripsi" className="font-medium opacity-75">
                Denah
              </a>
            </li>
          </ul>
          <div className="social flex items-center gap-2">
            <a
              href="#social"
              id="socialr"
              className="bg-sky-400 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
            >
              Social Media
            </a>
            <i
              className="ri-menu-line text-3xl md:hidden block"
              onClick={handleClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
