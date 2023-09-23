
const datenbanken_template = document.getElementById('course_template') as HTMLTemplateElement
const datenbanken_wrapper = document.querySelector('.coursesList')

fetch("json/datenbanken.json")
    .then(response => response.json())
    .then(data => {
        data.forEach((datenbank: any, i: string) => {

            // Datenbanken-Tab Datenbanken Karten
            const datenbankenkarte = datenbanken_template.content.cloneNode(true)

            const coursePreviewCard = (datenbankenkarte as HTMLElement).querySelector('.coursePreviewCard') as HTMLElement
            const title = (datenbankenkarte as HTMLElement).querySelector('[data-preview-card-title]')
            const description = (datenbankenkarte as HTMLElement).querySelector('[data-preview-card-description]')
            const difficulty = (datenbankenkarte as HTMLElement).querySelector('button[data-difficulty]') as HTMLElement

            coursePreviewCard.dataset.index = i

            // Title
            if (title !== null) {
                if (datenbank.title === "") {
                    title.remove()
                } else {
                    title.textContent = datenbank.title
                }
            }

            // Infos
            if (description !== null) {
                if (datenbank.description === "") {
                    description.remove()
                } else {
                    description.textContent = datenbank.description
                }
            }

            // Difficulty
            if (difficulty !== null) {
                if (datenbank.difficulty === "") {
                    difficulty.remove()
                } else if (datenbank.difficulty === 1) {
                    difficulty.textContent = "leicht".toUpperCase()
                    difficulty.dataset.difficulty = "leicht"
                    coursePreviewCard.dataset.difficulty = "leicht"
                } else if (datenbank.difficulty === 2) {
                    difficulty.textContent = "mittel".toUpperCase()
                    difficulty.dataset.difficulty = "mittel"
                    coursePreviewCard.dataset.difficulty = "mittel"
                } else if (datenbank.difficulty === 3) {
                    difficulty.textContent = "schwer".toUpperCase()
                    difficulty.dataset.difficulty = "schwer"
                    coursePreviewCard.dataset.difficulty = "schwer"
                }
            }

            if (datenbanken_wrapper !== null) {
                datenbanken_wrapper.appendChild(datenbankenkarte)
            }
        })
    })