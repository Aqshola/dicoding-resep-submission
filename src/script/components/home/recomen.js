class recom extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section id="recomendation-recipe">
  <h1 class="title-section">Resep Pilihan</h1>
  <div class="card-container">
    <div class="card">
      <div class="picture-recipe"></div>
      <div class="text-recipe">
        <h1>Nama Resep</h1>
        <p>Deskripsi</p>
        <a href="">Buka resep</a>
      </div>
    </div>
  </div>
</section>`;
  }
}
export default customElements.define('recom-recipe', recom);
