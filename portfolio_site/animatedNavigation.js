const sections = document.querySelectorAll('section')
const bubble = document.querySelector('.bubble')

const colors = [
    "#fda766",
    "#fd9346",
    "#fd7f2c",
    "#ff6200"
]

const options = {
    threshold: 0.7
}

let observer = new IntersectionObserver(navCheck, options)

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className
        // console.log(className)
        const activeAnchor = document.querySelector(`[data-page=${className}]`)
        const colorIndex = entry.target.getAttribute('data-index')
        const coords = activeAnchor.getBoundingClientRect()
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        }
        if (entry.isIntersecting) {
            bubble.style.setProperty('height', `${directions.height}px`)
            bubble.style.setProperty('width', `${directions.width}px`)
            bubble.style.setProperty('top', `${directions.top}px`)
            bubble.style.setProperty('left', `${directions.left}px`)
            bubble.style.backgroundColor = colors[colorIndex]
        }
    })
}

sections.forEach(section => {
    observer.observe(section)
})