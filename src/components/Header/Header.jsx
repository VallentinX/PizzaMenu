import PropTypes from 'prop-types';

import './Header.style.css';

const Header = function ({ name }) {
  return (
    <header className='header'>
      <h1>{name}</h1>
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
