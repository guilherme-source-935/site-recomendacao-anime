class SiteHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = 
            `<header class="cabecalho-landing">
                <div class="logo">Yinghua</div>
                <nav class="navegacao">
                    <a href="#">Login</a>
                    <a href="#">Cadastro</a>
                </nav>
            </header>
            `
    }
}

customElements.define('site-header', SiteHeader)