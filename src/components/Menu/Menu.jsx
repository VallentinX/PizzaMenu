import PropTypes from 'prop-types';
import Title from './Title/Title';
import Pizza from './Pizza/Pizza';

import './Menu.style.css';

const Menu = function ({ menu }) {
  const pizzas = menu.length;

  return (
    <main className='menu'>
      <Title />

      {pizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine&#46; {pizzas} creative dishes to choose from&#46; All from our
            stone oven&#44; all organic, all delicious&#46;
          </p>

          <ul className='pizzas'>
            {menu.map(pizza => (
              <Pizza pizza={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We&#39;re still working on our menu&#46; Please come back later&#33; 🙃</p>
      )}
    </main>
  );
};

Menu.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Menu;
