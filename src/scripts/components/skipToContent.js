class skipToContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <a class="skip-content" href="#restaurant">Skip to main content</a>
      `;
  }
}

customElements.define('skip-to-content', skipToContent);
