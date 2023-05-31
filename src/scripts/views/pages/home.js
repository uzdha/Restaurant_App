import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <content-list></content-list>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurantList();
    const restaurantList = document.querySelector('.posts');
    const hero = document.querySelector('hero-bar');
    const testimonial = document.querySelector('testimonial-section');
    const skipLink = document.querySelector('skip-to-content>a');
    const mainContent = document.querySelector('#main-post');

    mainContent.setAttribute('tabindex', '-1');
    skipLink.setAttribute('href', '#main-post');

    restaurantList.style.marginTop = '100px';
    hero.style.display = 'block';
    testimonial.style.display = 'block';

    restaurantList.innerHTML = '';

    restaurants.forEach((restaurant) => {
      restaurantList.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default Home;
