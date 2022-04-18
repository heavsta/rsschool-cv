document.addEventListener('DOMContentLoaded', () => {
    const links = document.getElementsByClassName('link')
    let previous = 'summary'

    for (let link of links) {
        link.addEventListener('click', e => {
            for (let link of links) {
                link.classList.remove('active')
            }
            link.classList.add('active')
            document.getElementById(previous).style.display = 'none'

            sectionName = e.target.innerText.toLowerCase()
            const section = document.getElementById(sectionName)
            section.style.display = 'block'

            previous = sectionName
        })
    }
})

// Canceling initial animation delay
setTimeout(function(){
    const sections = document.querySelectorAll('section')
    for(let section of sections) {
        section.style.animationDelay = 'unset'
    }
}, 2000);