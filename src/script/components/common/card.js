class card extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    this.img = this.getAttribute('img') || null
    this.title = this.getAttribute('title') || null
    this.desc = this.getAttribute('desc') || null
    this.key = this.getAttribute('key') || null
    this.render()
  }

  render() {
    const link = 'detail.html?makanan=' + this.key
    this.innerHTML = `
    <div class="card">
      <div class="picture-recipe">
        <img src=${this.img} alt=${this.title} loading="lazy"/>
      </div>
      <div class="text-recipe">
        <h1>${this.title.split(',')[0]}</h1>
        <a href=${link}>Buka resep</a>
      </div>
    </div>`
  }
}

export default customElements.define('recipe-card', card)
