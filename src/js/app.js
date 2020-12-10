import components from './components'

const App = function () {
    this.components = {}

    this.init = () => {
        components.forEach(comp => {
            let elements = document.querySelectorAll(comp.selector)

            if (elements.length === 0) {
                return
            }

            console.log(elements);

            let instances = Array.from(elements).map(element =>
                new comp.create(element).init()
            )
            this.components[comp.key] = instances.length > 1
                ? instances
                : instances[0]
        }, this)
    }
}

export default App
