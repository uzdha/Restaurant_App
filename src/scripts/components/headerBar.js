class headerBar extends HTMLElement {
  connectedCallback() {
    this.render();

    const navbarNav = document.querySelector('.nav');
    document.querySelector('#hamburger').onclick = () => {
      navbarNav.classList.toggle('active');
    };
  }

  render() {
    this.innerHTML = `
            <nav class="header-name">
                <div class="logo">
                    <a class="navbar-brand" href=""><img src="images/logo.png" alt=""> FoodFinds</a>
                </div>
                <div id="navbar">
                <ul class="nav">
                    <li><a href="#/home">Home</a></li>
                    <li><a href="#/favorite">Favorite</a></li>
                    <li><a href="https://www.linkedin.com/in/uzdha-zachrias-31865b24a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhOZPIDTgSRiDyi3IzKEpPg%3D%3D">About Us</a></li>
                </ul>
                <a href="#" id="hamburger"><i class="fa-solid fa-bars"></i></a>
                </div>
            </nav>
        `;
  }
}

customElements.define('header-bar', headerBar);
