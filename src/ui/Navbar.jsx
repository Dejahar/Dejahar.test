import React from "react";
import { Link, NavLink} from "react-router-dom";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-yellow-500 sticky top-0 shadow-md z-40 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link className="navbar-brand" to="/">
              <div className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                Ortho Evolution
              </div>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-item nav-link  ${isActive ? "active" : ""}`
                  }
                  to="/Services"
                >
                  <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <i className="fa-solid fa-house-medical text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Home</span>
                  </div>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navbar-brand" to="/Tutoring">
                  <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <i className="fa-solid fa-tooth text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Formações</span>
                  </div>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navbar-brand" to="/About">
                  <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <i className="fa-solid fa-staff-snake text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Sobre Nós</span>
                  </div>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navbar-brand" to="/Calendar">
                  <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <i className="fa-regular fa-calendar-days text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Calendário</span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
