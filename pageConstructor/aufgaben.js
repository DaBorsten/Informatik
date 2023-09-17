
const aufgaben_template = document.getElementById('course_template')
const aufgaben_wrapper = document.querySelector('.coursesList')

fetch("json/aufgaben.json")
    .then(response => response.json())
    .then(data => {
        data.forEach((aufgabe, i) => {

            // Aufgaben-Tab Aufgaben Karten
            const aufgabenkarte = aufgaben_template.content.cloneNode(true)

            const coursePreviewCard = aufgabenkarte.querySelector('.coursePreviewCard')
            const title = aufgabenkarte.querySelector('[data-preview-card-title]')
            const description = aufgabenkarte.querySelector('[data-preview-card-description]')
            const difficulty = aufgabenkarte.querySelector('button[data-difficulty]')

            coursePreviewCard.dataset.index = i

            // Title
            if (aufgabe.title === "") {
                title.remove()
            } else {
                title.textContent = aufgabe.title
            }

            // Infos
            if (aufgabe.description === "") {
                description.remove()
            } else {
                description.textContent = aufgabe.description
            }

            // Difficulty
            if (aufgabe.difficulty === "") {
                difficulty.remove()
            } else if (aufgabe.difficulty === 1) {
                difficulty.textContent = "leicht".toUpperCase()
                difficulty.dataset.difficulty = "leicht"
                coursePreviewCard.dataset.difficulty = "leicht"
            } else if (aufgabe.difficulty === 2) {
                difficulty.textContent = "mittel".toUpperCase()
                difficulty.dataset.difficulty = "mittel"
                coursePreviewCard.dataset.difficulty = "mittel"
            } else if (aufgabe.difficulty === 3) {
                difficulty.textContent = "schwer".toUpperCase()
                difficulty.dataset.difficulty = "schwer"
                coursePreviewCard.dataset.difficulty = "schwer"
            }

            aufgaben_wrapper.appendChild(aufgabenkarte)
        })
    })