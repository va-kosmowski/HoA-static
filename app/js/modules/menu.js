class Menu {
    constructor() {
        this.togglers = document.querySelectorAll('.toggle-menu');
        this.backdrop = document.querySelector('.nav__backdrop--mobile');
        this.menu = document.querySelector('.main-nav--mobile');

        this.menuShowClass = 'main-nav--show';
        this.backdropShowClass = 'nav__backdrop--show';
    }

    addListener() {
        const toggleClass = () => {
            if (this.menu.classList.contains(this.menuShowClass)) {
                this.menu.classList.remove(this.menuShowClass);
                this.backdrop.classList.remove(this.backdropShowClass)

            } else {
                this.menu.classList.add(this.menuShowClass);
                this.backdrop.classList.add(this.backdropShowClass)

            }
        };

        [...this.togglers].map((toggler) => toggler.addEventListener('click', toggleClass));
    }

    init() {
        this.addListener();
    }
}

export default Menu;
