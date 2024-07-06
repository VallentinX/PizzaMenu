import PropTypes from 'prop-types';
import Open from './Open/Open';
import Close from './Close/Close';

import './Footer.style.css';

const Footer = function ({ hours }) {
  const hour = new Date().getHours();
  const { openHours, closeHours } = hours;
  const isOpen = hour >= openHours && hour <= closeHours;

  return (
    <footer className='footer'>
      {isOpen ? (
        <Open openHours={openHours} closeHours={closeHours} />
      ) : (
        <Close openHours={openHours} closeHours={closeHours} />
      )}
    </footer>
  );
};

Footer.propTypes = {
  hours: PropTypes.shape({
    openHours: PropTypes.number.isRequired,
    closeHours: PropTypes.number.isRequired,
  }).isRequired,
};

export default Footer;
