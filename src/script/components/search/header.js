class header extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
    this.searchRecipe()
  }
  render() {
    this.innerHTML = `
    <section id="header-search" class="container">
        <label class="search-box" for="recipe-search">
          <input type="search" placeholder="Cari Resep" id="recipe-search" />
          <button id="search-button" aria-label="Cari resep">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          
        </label>
      </section>
    `
  }

  searchRecipe() {
    const searchVal = document.querySelector('#recipe-search')
    const buttonSearch = document.querySelector('#search-button')

    buttonSearch.addEventListener('click', () => {
      window.location.assign(`/search.html?resep=${searchVal.value}`)
    })
  }
}
export default customElements.define('header-search', header)
