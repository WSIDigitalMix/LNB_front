const NavMenu = function (element) {
    this.elem = element;
}

NavMenu.prototype.init = () => {
    console.log('navMenu');
    return this
}

export default {
    create: NavMenu,
    selector: '.js-nav',
    key: 'navMenu'
}