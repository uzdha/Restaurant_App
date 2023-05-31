import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import postReview from '../../utils/addReview';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <restaurant-detail></restaurant-detail>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector('.detail_container');
    const hero = document.querySelector('hero-bar');
    const skipLink = document.querySelector('skip-to-content>a');
    const mainContent = document.querySelector('#main-post');
    const testimonial = document.querySelector('testimonial-section');

    mainContent.setAttribute('tabindex', '-1');
    skipLink.setAttribute('href', '#likeButton');

    hero.style.display = 'none';
    testimonial.style.display = 'none';

    detailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('.like_button'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });

    const postReviewContainer = document.querySelector('.add_review');
    const nameInput = postReviewContainer.querySelector('.inputName');
    const reviewInput = postReviewContainer.querySelector('.inputDescription');

    postReviewContainer.addEventListener('submit', (event) => {
      event.preventDefault();

      postReview({
        url: url.id,
        name: nameInput.value,
        review: reviewInput.value,
      });

      postReviewContainer.reset();
    });
  },
};

export default Detail;
