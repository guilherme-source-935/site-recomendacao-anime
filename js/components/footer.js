class SiteFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = 
            `<footer class="rodape">
                <div class="coluna">
                    <h3><strong>Yinghua</strong></h3>
                    <p>Comece sua jornada aos animes hoje.</p>
                </div>
                <div class="coluna">
                    <h3>Nossas Redes</h3>
                    <a href="#" class="socials">
                        <i class="bi bi-youtube"> Youtube</i>
                    </a>
                    <a href="#" class="socials">
                        <i class="bi bi-instagram"> Instagram</i>
                    </a>
                    <a href="#" class="socials">
                        <i class="bi bi-twitter-x"> Twitter/X</i>
                    </a>
                    <a href="#" class="socials">
                        <i class="bi bi-facebook"> Facebook</i>
                    </a>
                    <a href="#" class="socials">
                        <i class="bi bi-tiktok"> Tiktok</i>
                    </a>
                </div>
                <div class="coluna">
                    <h3>Sobre Nós</h3>
                    <a href="#">Privacidade</a>
                    <a href="#">Termos</a>
                    <a href="#">Cookies</a>
                    <a href="#">Quem Somos</a>
                    <a href="#">FAQ</a>
                </div>
            </footer>
            `
    }
}

customElements.define('site-footer', SiteFooter)