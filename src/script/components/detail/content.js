import axios from 'axios'
import { API_LINK } from '../../constant'

class detail extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
    this.getRecipeDetail()
  }
  getQuerySearch() {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const params = Object.fromEntries(urlSearchParams.entries())
    return params.makanan
  }

  render() {
    this.innerHTML = `<section id="header-detail">
        <div class="food-img">
            <img src="" alt="" loading="lazy"/>
        </div>
        <h1 class="recipe-title">
        </h1>
      </section>
      <section id="content-detail">
        <p class="recipe-desc">
        </p>
        <section id="material">
          <h1>Bahan bahan</h1>
          <ul>
            
          </ul>
        </section>
        <section id="step">
          <h1>Langkah</h1>
          <ul>
            
          </ul>
        </section>
      </section>`
  }

  async getRecipeDetail() {
    const query = this.getQuerySearch()
    const { title, thumb, desc, ingredient, step } = await (
      await axios(`${API_LINK}/api/recipe/${query}`)
    ).data.results

    this.updateTitleDescAndPhoto(title, desc, thumb)
    this.updateMaterialAndStep(ingredient, step)
  }

  updateTitleDescAndPhoto(title, desc, photo_url) {
    const titleElement = document.querySelector('.recipe-title')
    const descElement = document.querySelector('.recipe-desc')
    const photoElement = document.querySelector('.food-img img')

    photoElement.setAttribute('src', photo_url)
    photoElement.setAttribute('alt', title)

    titleElement.textContent = title
    descElement.textContent = desc
  }
  updateMaterialAndStep(material = [], step = []) {
    const materialContainer = document.querySelector('#material ul')
    const stepContainer = document.querySelector('#step ul')

    let appendMaterial = ''
    let appendStep = ''

    material.map((child) => (appendMaterial += `<li>${child}</li>`))
    step.map((child) => (appendStep += `<li>${child}</li>`))

    materialContainer.innerHTML = appendMaterial
    stepContainer.innerHTML = appendStep
  }
}

export default customElements.define('detail-content', detail)
