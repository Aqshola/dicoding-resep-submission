class card extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="card">
      <div class="picture-recipe"></div>
      <div class="text-recipe">
        <h1>Nama Resep</h1>
        <p>Deskripsi</p>
        <a href="">Buka resep</a>
      </div>
    </div>`;
  }
}

export default customElements.define('recipe-card', card);
