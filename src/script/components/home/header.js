class headerHome extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section id="home-header">
        <div class="home-picture">
          <img src="/assets/mobile-header-picture.png" alt="" srcset="" />
        </div>
        <h1 class="primary-color">ResepApp</h1>
        <p>Cari Resep masak untuk memasak maupun belajar memasak</p>
        <label class="search-recipe" for="recipe-search">
          <input type="search" placeholder="Cari Resep" id="recipe-search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </label>
        <p>
          atau lihat
          <a href="#recomendation-recipe" class="recom-recipe">resep pilihan</a>
        </p>
      </section>
        `;
  }
}

export default customElements.define('header-home', headerHome);