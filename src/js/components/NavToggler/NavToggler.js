const NavToggler = function (element) {
	this.toggler = element
	this.nav = document.querySelector('.js-nav')
	this.overlay = document.querySelector('.js-nav-overlay')

	this.handleClick = () => {
		this.nav.classList.toggle('open')
		this.overlay.classList.toggle('open')

	}

	this.init = () => {
		this.toggler.addEventListener('click', this.handleClick)
		this.overlay.addEventListener('click', this.handleClick)
		return this
	}
}

export default {
	create: NavToggler,
	selector: '.js-nav-toggler',
	key: 'navToggler',
}
