class nav extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="nav">
        <a href="/" class="link-nav">ResepApp</a>
      </nav>
    `;
  }
}

export default customElements.define('nav-bar', nav);
