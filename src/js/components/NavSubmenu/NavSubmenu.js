const NavSubmenu = function (element) {
    this.elem = element
    this.toggler = element.querySelector('.js-nav-submenu-toggler')
    this.content = element.querySelector('.js-nav-submenu-content')
    this.overlay = element.querySelector('.js-nav-submenu-overlay')

    this.init = () => {
        this.toggler.addEventListener('click', this.handleToggle.bind(this))
        this.overlay.addEventListener('click', this.handleToggle.bind(this))
        return this
    }
}

NavSubmenu.prototype.handleToggle = function (e) {
    e.stopPropagation();
    this.elem.classList.toggle('open');
}

export default {
    create: NavSubmenu,
    selector: '.js-nav-submenu',
    key: 'navSubmenus',
}
