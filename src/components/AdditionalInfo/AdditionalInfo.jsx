import { NavLink, Outlet } from 'react-router-dom';
import css from './AdditionalInfo.module.css';
import ReservationForm from '../ReservationForm/ReservationForm.jsx';

const AdditionalInfo = () => {
  const navLinks = [
    { path: "features", label: "Features" },
    { path: "reviews", label: "Reviews" }
  ];

  return (
    <>
      <div>
        <nav className={css.navigation_bar}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? css.active : css.navigation_link)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className={css.flex_container}>
        <Outlet />
        <ReservationForm />
      </div>
    </>
  );
};

export default AdditionalInfo;
