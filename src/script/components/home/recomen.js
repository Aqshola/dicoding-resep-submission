import axios from 'axios'
import { fetcher, createCORSRequest } from '../../../utils/fetcher'

class recom extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    this.getRecomen()
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

  async getRecomen() {
    axios('https://api.jikan.moe/v3/schedule', {
      headers: { 'Access-Control-Allow-Origin': '*' },
      method: 'GET',
      crossdomain: true,
    }).then((data) => console.log(data))
    console.log('tes')
    // fetch('https://masak-apa.tomorisakura.vercel.app/resep/api/recipes').then(
    //   (data) => console.log(data)
    // )
  }
}
export default customElements.define('recom-recipe', recom)
