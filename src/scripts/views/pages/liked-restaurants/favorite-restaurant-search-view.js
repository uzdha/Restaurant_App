import { createRestaurantListTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
        <div class="content">
            <div class="fav-card">
                <div class="fav-title">Favorite Restaurants</div>
                <div class="search-container"> 
                    <input id="query" type="text" placeholder="Restaurant name ?">
                    <div id="searchIcon">
                        <i class="fa-solid fa-magnifying-glass-location"></i>
                    </div>
                </div>
            </div>
            <div class="posts" id="posts">
        </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantListTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('posts').innerHTML = html;

    document.getElementById('posts').dispatchEvent(new Event('posts:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return `
        <div class="restaurantIsEmpty">
            <img src="images/Chef.webp" alt="Not available" width="400px" height="300px">
            <p>Restaurant Not Available</p>
        </div>`;
  }
}

export default FavoriteRestaurantSearchView;
