class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="hero">
                <div class="heroo">
                    <h1 class="hero-title">Temukan Tempat Makan Yang Cocok Untuk Anda</h1>
                    
                <p class="hero-text">
                Dengan FoodFinds, Anda dapat dengan mudah menemukan restoran yang memenuhi 
                kebutuhan Anda, mulai dari restoran yang menyajikan hidangan tradisional, 
                makanan cepat saji, hingga restoran mewah dengan menu eksklusif.
                </p>
                </div>
            </div>
          `;
  }
}

customElements.define('hero-bar', Hero);
