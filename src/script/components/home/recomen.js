import axios from 'axios'
import { API_LINK } from '../../constant'

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
    const result = await axios(`${API_LINK}/api/recipes`, {
      headers: { 'Access-Control-Allow-Origin': '*' },
      method: 'GET',
      crossdomain: true,
    })

    this.updateRecomen(result)
  }

  updateRecomen(result) {
    const container = document.querySelector(
      '#recomendation-recipe .card-container'
    )
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
