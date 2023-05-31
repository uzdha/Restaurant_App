class TestimonialSection extends HTMLElement {
  connectedCallback() {
    this.render();
    this.querySelector('.prev').addEventListener('click', () => this.plusTestimonial(-1));
    this.querySelector('.next').addEventListener('click', () => this.plusTestimonial(1));
  }

  render() {
    this.innerHTML = `
        <section id="testimonial">
          <div class="slide">
            <img class="testimonial-img" src="images/person1.webp" alt="profile1">
            <h2 class="testimonial-text">" FoodFinds sangat membantu saya dalam mencari tempat makan terbaik di sekitar saya. "</h2>
            <em>Will, Jakarta</em>
          </div>
          <div class="slide">
            <img class="testimonial-img" src="images/person2.webp" alt="profile2">
            <h2 class="testimonial-text">" Saya sangat merekomendasikan FoodFinds kepada siapa saja yang sedang mencari tempat makan yang bagus dan lezat. "</h2>
            <em>Jack, Banten</em>
          </div>
          <div class="slide">
            <img class="testimonial-img" src="images/person3.webp" alt="profile3">
            <h2 class="testimonial-text">" Saya tidak pernah kecewa dengan rekomendasi restoran dari FoodFinds. "</h2>
            <em>Barbossa, Bekasi</em>
          </div>
  
          <div class="navigation">
            <a class="prev">&#10094;</a>
            <a class="next">&#10095;</a>
          </div>
        </section>
      `;
    this.plusTestimonial = this.plusTestimonial.bind(this);
    this.showTestimonial = this.showTestimonial.bind(this);
    this.slideIndex = 1;
    this.showTestimonial(this.slideIndex);
  }

  plusTestimonial(n) {
    this.showTestimonial(this.slideIndex += n);
  }

  showTestimonial(n) {
    let i;
    const testimonials = this.querySelectorAll('.slide');
    if (n > testimonials.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = testimonials.length;
    }
    // eslint-disable-next-line no-plusplus
    for (i = 0; i < testimonials.length; i++) {
      testimonials[i].style.display = 'none';
    }
    testimonials[this.slideIndex - 1].style.display = 'block';
  }
}

customElements.define('testimonial-section', TestimonialSection);
