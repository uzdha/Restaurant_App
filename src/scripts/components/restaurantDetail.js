import { createSkeletonRestaurantDetail } from '../views/templates/template-creator';

class restaurantDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="detail_container">
            ${createSkeletonRestaurantDetail()}
            </div>
        `;
  }
}

customElements.define('restaurant-detail', restaurantDetail);
