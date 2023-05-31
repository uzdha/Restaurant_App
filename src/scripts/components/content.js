import { createSkeletonRestaurantTemplate } from '../views/templates/template-creator';

class contentList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
              <div class="restaurant">
                  <h1 class="restaurant-text" id="main-content">Explore Restaurant</h1>
                  <div class="posts">
                  ${createSkeletonRestaurantTemplate(17)}
                  </div>
              </div>
          `;
  }
}

customElements.define('content-list', contentList);
