const AccordionItem = function (element) {
    this.elem = element
    this.toggler = element.querySelector('.js-accordion-toggler')
    this.content = element.querySelector('.js-accordion-content')

    this.init = () => {
        this.toggler.addEventListener('click', this.handleToggle.bind(this))
        return this
    }
}

AccordionItem.prototype.handleToggle = function (e) {
    if (this.elem.classList.contains('open')) {
        this.elem.classList.remove('open')
        this.elem.classList.add('close')
        return
    }
    this.elem.classList.remove('close')
    this.elem.classList.add('open')
}

export default {
    create: AccordionItem,
    selector: '.js-accordion-item',
    key: 'accordionItems',
}
