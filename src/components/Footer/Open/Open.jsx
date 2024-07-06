import PropTypes from 'prop-types';

import './Open.style.css';

const Open = function ({ openHours, closeHours }) {
  return (
    <div className='order'>
      <p>
        We&#39;re open from {openHours}PM to {closeHours}PM&#46; Come visit us or you can order
        online&#46;
      </p>

      <button className='btn'>Order</button>
    </div>
  );
};

Open.propTypes = {
  openHours: PropTypes.number.isRequired,
  closeHours: PropTypes.number.isRequired,
};

export default Open;
