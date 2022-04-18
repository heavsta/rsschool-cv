document.addEventListener('DOMContentLoaded', () => {
    const links = document.getElementsByClassName('link')
    let previous = 'summary'

    for (let link of links) {
        link.addEventListener('click', e => {
            document.getElementById(previous).style.display = 'none'

            sectionName = e.target.innerText.toLowerCase()
            const section = document.getElementById(sectionName)
            section.style.display = 'block'

            previous = sectionName
        })
    }
})