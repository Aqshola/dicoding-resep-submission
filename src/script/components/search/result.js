import axios from 'axios'
import { API_LINK } from '../../constant'

class result extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
    this.getSearchResult()
  }

  getQuerySearch() {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const params = Object.fromEntries(urlSearchParams.entries())
    return params.resep
  }
  render() {
    this.innerHTML = `
    <section id="result-box">
      <div class="result-text">
        <h1 id="search-value">""</h1>
        <h3 id="search-result-count"></h3>
      </div>
      <div id="result-card-container">
        <h1>Memuat hasil pencarian...</h1>
      </div>
    </section>
    `
  }

  renderResult(data = []) {
    const container = document.querySelector(
      '#result-box #result-card-container'
    )

    const titleSearch = document.querySelector('#search-value')
    const countSearch = document.querySelector('#search-result-count')

    let append = ' '
    if (data.length !== 0) {
      data.map((child) => {
        append += `<recipe-card title='${child.title}' img=${child.thumb} key=${child.key}></recipe-card>`
      })
    } else {
      append += '<h1>Resep tidak ditemukan 😥</h1>'
    }

    container.innerHTML = append
    titleSearch.innerHTML = this.getQuerySearch()
    countSearch.innerHTML = data.length + ' resep ditemukan'
  }

  async getSearchResult() {
    const query = this.getQuerySearch()
    const result = await axios(`${API_LINK}/api/search/?q=${query}`)
    this.renderResult(result.data.results)
  }
}
export default customElements.define('result-search', result)
