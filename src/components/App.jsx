import PropTypes from 'prop-types';
import lodash from 'lodash';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer';

import './App.css';

const App = function ({ menuData, restaurantData }) {
  const menu = lodash.cloneDeep(menuData);
  const restaurant = lodash.cloneDeep(restaurantData);
  const [{ name, hours }] = restaurant;

  return (
    <div className='container'>
      <Header name={name} />

      <Menu menu={menu} />

      <Footer hours={hours} />
    </div>
  );
};

App.propTypes = {
  menuData: PropTypes.array.isRequired,
  restaurantData: PropTypes.array.isRequired,
};

export default App;
