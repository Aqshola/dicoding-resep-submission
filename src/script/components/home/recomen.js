class recom extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
        <section id="recomendation-recipe">
  <h1 class="title-section">Resep Pilihan</h1>
  <div class="card-container">
    <recipe-card></recipe-card>
    <recipe-card></recipe-card>
    <recipe-card></recipe-card>
    <recipe-card></recipe-card>
  </div>
</section>`
  }
}
export default customElements.define('recom-recipe', recom)
