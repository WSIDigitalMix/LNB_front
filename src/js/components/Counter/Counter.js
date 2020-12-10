const Counter = function (elem) {
    this.element = elem
    this.lessButton = this.element.querySelector('.c-counter__less')
    this.moreButton = this.element.querySelector('.c-counter__more')
    this.input = this.element.querySelector('.c-counter__input')

    this.handleClick = (e) => {
        e.stopPropagation()
        e.preventDefault()
        if (e.target == this.lessButton && this.input.value > 0) {
            this.input.value = +this.input.value - 1;
        } else if (e.target == this.moreButton) {
            this.input.value = +this.input.value + 1;
        }
    }

    this.init = () => {
        this.element.addEventListener('click', this.handleClick)
        this.input.oninput = this.handleInputChange
        return this
    }
}
Counter.prototype.handleInputChange = function (e) {
    e.target.value = !!e.target.value && Math.abs(e.target.value) >= 0 ? Math.abs(e.target.value) : 0
}

export default {
    create: Counter,
    selector: '.js-counter',
    key: 'counters',
}
