class footerBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="footer">
            <i class="social-icon fa-brands fa-twitter"></i>
            <i class="social-icon fa-brands fa-facebook"></i>
            <i class="social-icon fa-brands fa-instagram"></i>
            <i class="social-icon fa-solid fa-envelope"></i>
            <p>Belajar Menjadi Front-End Web Developer Expert &#169; 2023, FoodFinds</p>
        </div>
        `;
  }
}

customElements.define('footer-bar', footerBar);
