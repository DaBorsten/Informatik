
const aufgaben_template = document.getElementById('course_template') as HTMLTemplateElement
const aufgaben_wrapper = document.querySelector('.coursesList')

fetch("json/aufgaben.json")
    .then(response => response.json())
    .then(data => {
        data.forEach((aufgabe: any, i: string) => {

            // Aufgaben-Tab Aufgaben Karten
            const aufgabenkarte = aufgaben_template.content.cloneNode(true)

            const coursePreviewCard = (aufgabenkarte as HTMLElement).querySelector('.coursePreviewCard') as HTMLElement
            const title = (aufgabenkarte as HTMLElement).querySelector('[data-preview-card-title]')
            const description = (aufgabenkarte as HTMLElement).querySelector('[data-preview-card-description]')
            const difficulty = (aufgabenkarte as HTMLElement).querySelector('button[data-difficulty]') as HTMLElement

            coursePreviewCard.dataset.index = i

            // Title
            if (title !== null) {
                if (aufgabe.title === "") {
                    title.remove()
                } else {
                    title.textContent = aufgabe.title
                }
            }

            // Infos
            if (description !== null) {
                if (aufgabe.description === "") {
                    description.remove()
                } else {
                    description.textContent = aufgabe.description
                }
            }

            // Difficulty
            if (difficulty !== null) {
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
            }

            if (aufgaben_wrapper !== null) {
                aufgaben_wrapper.appendChild(aufgabenkarte)
            }
        })
    })