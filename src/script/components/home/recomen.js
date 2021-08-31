import axios from 'axios'

class recom extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
    this.getRecomen()
  }

  render() {
    console.log(this.listResep)
    this.innerHTML = `
        <section id="recomendation-recipe">
  <h1 class="title-section">Resep Pilihan</h1>
  <div class="card-container">
    memuat resep...
  </div>
</section>`
  }

  async getRecomen() {
    const container = document.querySelector(
      '#recomendation-recipe .card-container'
    )
    const result = await axios(' resep/api/recipes', {
      headers: { 'Access-Control-Allow-Origin': '*' },
      method: 'GET',
      crossdomain: true,
    })

    let append = ' '
    const listResep = result.data.results
    listResep.map(
      (data) =>
        (append += `<recipe-card title='${data.title}' img=${data.thumb} key=${data.key}></recipe-card>`)
    )

    container.innerHTML = append
  }
}
export default customElements.define('recom-recipe', recom)
