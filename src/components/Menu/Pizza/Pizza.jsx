import PropTypes from 'prop-types';

import './Pizza.style.css';

const Pizza = function ({ pizza }) {
  const { name, ingredients, photoName, price, soldOut } = pizza;

  return (
    <li className={soldOut ? 'pizza sold-out' : 'pizza'}>
      <img src={`/assets/pizzas/${photoName}`} alt={name} />

      <div>
        <h3>{name}</h3>

        <p>{ingredients}</p>

        <span>{soldOut ? 'SOLD OUT' : `${price}€`}</span>
      </div>
    </li>
  );
};

Pizza.propTypes = {
  pizza: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    soldOut: PropTypes.bool.isRequired,
    photoName: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pizza;
