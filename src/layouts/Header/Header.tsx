import { NavLink } from 'react-router-dom';

const Header = ({ ...props }) => {
  return (
    <header {...props}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/zones">Zones</NavLink>
      <NavLink to="/assets">Assets</NavLink>
      <NavLink to="/about">About</NavLink>
    </header>
  );
};

export default Header;
