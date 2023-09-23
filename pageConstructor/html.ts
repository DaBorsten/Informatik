

const html_template = document.getElementById('course_template') as HTMLTemplateElement
const html_wrapper = document.querySelector('.coursesList')

fetch("json/html.json")
    .then(response => response.json())
    .then(data => {
        data.forEach((html: any, i: string) => {

            // HTML-Tab HTML Karten
            const htmlkarte = html_template.content.cloneNode(true)

            const coursePreviewCard = (htmlkarte as HTMLElement).querySelector('.coursePreviewCard') as HTMLElement
            const title = (htmlkarte as HTMLElement).querySelector('[data-preview-card-title]')
            const description = (htmlkarte as HTMLElement).querySelector('[data-preview-card-description]')
            const difficulty = (htmlkarte as HTMLElement).querySelector('button[data-difficulty]') as HTMLElement

            coursePreviewCard.dataset.index = i

            // Title
            if (title !== null) {
                if (html.title === "") {
                    title.remove()
                } else {
                    title.textContent = html.title
                }
            }

            // Infos
            if (description !== null) {
                if (html.description === "") {
                    description.remove()
                } else {
                    description.textContent = html.description
                }
            }

            // Difficulty
            if (difficulty !== null) {
                if (html.difficulty === "") {
                    difficulty.remove()
                } else if (html.difficulty === 1) {
                    difficulty.textContent = "leicht".toUpperCase()
                    difficulty.dataset.difficulty = "leicht"
                    coursePreviewCard.dataset.difficulty = "leicht"
                } else if (html.difficulty === 2) {
                    difficulty.textContent = "mittel".toUpperCase()
                    difficulty.dataset.difficulty = "mittel"
                    coursePreviewCard.dataset.difficulty = "mittel"
                } else if (html.difficulty === 3) {
                    difficulty.textContent = "schwer".toUpperCase()
                    difficulty.dataset.difficulty = "schwer"
                    coursePreviewCard.dataset.difficulty = "schwer"
                }
            }

            if (html_wrapper !== null) {
                html_wrapper.appendChild(htmlkarte)
            }
        })
    })
