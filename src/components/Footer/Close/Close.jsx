import PropTypes from 'prop-types';

import './Close.style.css';

const Close = function ({ openHours }) {
  return <p> We&#39;re closed! We open at {openHours}PM&#46;</p>;
};

Close.propTypes = {
  openHours: PropTypes.number.isRequired,
};

export default Close;
