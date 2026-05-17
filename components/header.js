class Header extends HTMLElement {
  constructor() {
    super();
  }

  
  connectedCallback() {
    const basePath = window.location.pathname.includes('/pages/') ? '../' : './';
    const pagesPath = window.location.pathname.includes('/pages/') ? './' : './pages/';
    
    this.innerHTML = `
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
        <h1><a class="navbar-brand" href="${basePath}index.html">Your Name</a></h1>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarCollapse" style="">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mr-2">
              <a class="nav-link" href="${basePath}index.html">Home</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="${pagesPath}education.html">Education</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="${pagesPath}experience.html">Experience</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="${pagesPath}skills.html">Skills</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="${pagesPath}teaching.html">Teaching</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="${pagesPath}projects.html">Projects</a>
            </li> 
            <li class="nav-item mr-2">
              <a class="nav-link" href="${pagesPath}publications.html">Publications</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="${pagesPath}blogposts.html">Blogs</a>
            </li>
          </ul>
        </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);