
let contentSectionWrapper = document.querySelector('.contentSectionWrapper')

function showCourse(e) {
    let index = e.dataset.index

    if (index) {

        if (document.title == "HTML") {
            contentSectionWrapper.innerHTML = ''

            let html_template = document.getElementById('detailed_course_template')

            fetch("json/html.json")
                .then(response => response.json())
                .then(data => {
                    const keys = Object.keys(data);
                    const selectedCourse = data[keys[index]];

                    // HTML-Tab HTML Karten
                    const htmlkarte = html_template.content.cloneNode(true)

                    const title = htmlkarte.querySelector('[data-detailed-card-title]')
                    const description = htmlkarte.querySelector('[data-detailed-card-description]')
                    const picture = htmlkarte.querySelector('[data-detailed-card-image]')
                    const learn_more = htmlkarte.querySelector('[data-detailed-card-learn-more]')

                    // Title
                    if (selectedCourse.title === "") {
                        title.remove()
                    } else {
                        title.textContent = selectedCourse.title
                    }

                    // Infos
                    if (selectedCourse.description === "") {
                        description.remove()
                    } else {
                        description.textContent = selectedCourse.description
                    }

                    // HTML Bilder
                    if (selectedCourse.picture.src === "") {
                        picture.remove()
                    } else {
                        picture.setAttribute("src", selectedCourse.picture.src)
                        picture.setAttribute("alt", selectedCourse.picture.alt)
                        picture.setAttribute("width", selectedCourse.picture.width)
                        picture.setAttribute("height", selectedCourse.picture.height)
                    }

                    // Learn More Button
                    if (selectedCourse.learn_more === "") {
                        learn_more.remove()
                    } else {
                        learn_more.setAttribute("href", selectedCourse.learn_more)
                    }

                    contentSectionWrapper.appendChild(htmlkarte)
                })
                .catch(error => console.error('Fehler beim Laden der JSON-Daten:', error));
        } else if (document.title == "JavaScript") {
            contentSectionWrapper.innerHTML = ''

            let javascript_template = document.getElementById('detailed_course_template')

            fetch("json/javascript.json")
                .then(response => response.json())
                .then(data => {
                    const keys = Object.keys(data);
                    const selectedCourse = data[keys[index]];

                    // Javascript-Tab Javascript Karten
                    const javascriptkarte = javascript_template.content.cloneNode(true)

                    const title = javascriptkarte.querySelector('[data-detailed-card-title]')
                    const description = javascriptkarte.querySelector('[data-detailed-card-description]')
                    const picture = javascriptkarte.querySelector('[data-detailed-card-image]')
                    const learn_more = javascriptkarte.querySelector('[data-detailed-card-learn-more]')

                    // Infos
                    if (selectedCourse.title === "") {
                        title.remove()
                    } else {
                        title.textContent = selectedCourse.title
                    }

                    if (selectedCourse.description === "") {
                        description.remove()
                    } else {
                        description.textContent = selectedCourse.description
                    }

                    // JavaScript Bilder
                    if (selectedCourse.picture.src === "") {
                        picture.remove()
                    } else {
                        picture.setAttribute("src", selectedCourse.picture.src)
                        picture.setAttribute("alt", selectedCourse.picture.alt)
                        picture.setAttribute("width", selectedCourse.picture.width)
                        picture.setAttribute("height", selectedCourse.picture.height)
                    }

                    // Learn More Button
                    if (selectedCourse.learn_more === "") {
                        learn_more.remove()
                    } else {
                        learn_more.setAttribute("href", selectedCourse.learn_more)
                    }

                    contentSectionWrapper.appendChild(javascriptkarte)
                })
                .catch(error => console.error('Fehler beim Laden der JSON-Daten:', error));
        } else if (document.title == "Datenbanken") {
            contentSectionWrapper.innerHTML = ''

            const datenbanken_template = document.getElementById('detailed_course_template')

            fetch("json/datenbanken.json")
                .then(response => response.json())
                .then(data => {
                    const keys = Object.keys(data);
                    const selectedCourse = data[keys[index]];

                    // Datenbanken-Tab Datenbanken Karten
                    const datenbankenkarte = datenbanken_template.content.cloneNode(true)

                    const title = datenbankenkarte.querySelector('[data-detailed-card-title]')
                    const description = datenbankenkarte.querySelector('[data-detailed-card-description]')
                    const picture = datenbankenkarte.querySelector('[data-detailed-card-image]')
                    const download = datenbankenkarte.querySelector('[data-detailed-card-download]')

                    // Title
                    if (selectedCourse.title === "") {
                        title.remove()
                    } else {
                        title.textContent = selectedCourse.title
                    }

                    // Infos
                    if (selectedCourse.description === "") {
                        description.remove()
                    } else {
                        description.textContent = selectedCourse.description
                    }

                    // HTML Bilder
                    if (selectedCourse.picture.src === "") {
                        picture.remove()
                    } else {
                        picture.setAttribute("src", selectedCourse.picture.src)
                        picture.setAttribute("alt", selectedCourse.picture.alt)
                        picture.setAttribute("width", selectedCourse.picture.width)
                        picture.setAttribute("height", selectedCourse.picture.height)
                    }

                    // Download Button
                    if (selectedCourse.download.button_link === "") {
                        download.remove()
                    } else {
                        download.setAttribute("href", selectedCourse.download.button_link)
                        download.textContent = selectedCourse.download.button_link.split("/").pop()
                    }

                    contentSectionWrapper.appendChild(datenbankenkarte)
                })
                .catch(error => console.error('Fehler beim Laden der JSON-Daten:', error));
        } else if (document.title == "Aufgaben") {
            contentSectionWrapper.innerHTML = ''

            const aufgaben_template = document.getElementById('detailed_course_template')

            fetch("json/aufgaben.json")
                .then(response => response.json())
                .then(data => {
                    const keys = Object.keys(data);
                    const selectedCourse = data[keys[index]];

                    // Aufgaben-Tab Aufgaben Karten
                    const aufgabenkarte = aufgaben_template.content.cloneNode(true)

                    const title = aufgabenkarte.querySelector('[data-detailed-card-title]')
                    const description = aufgabenkarte.querySelector('[data-detailed-card-description]')
                    const html_image_heading = aufgabenkarte.querySelector('[data-detailed-card-image-html-heading]')
                    const html_image = aufgabenkarte.querySelector('[data-detailed-card-html-image]')
                    const js_image_heading = aufgabenkarte.querySelector('[data-detailed-card-image-js-heading]')
                    const js_image = aufgabenkarte.querySelector('[data-detailed-card-js-image]')

                    // Title
                    if (selectedCourse.title === "") {
                        title.remove()
                    } else {
                        title.textContent = selectedCourse.title
                    }

                    // Infos
                    if (selectedCourse.description === "") {
                        description.remove()
                    } else {
                        description.textContent = selectedCourse.description
                    }

                    // HTML Bilder
                    if (selectedCourse.html_teil.src === "") {
                        html_image.remove()
                        html_image_heading.remove()
                    } else {
                        html_image.setAttribute("src", selectedCourse.html_teil.src)
                        html_image.setAttribute("alt", selectedCourse.html_teil.alt)
                        html_image.setAttribute("width", selectedCourse.html_teil.width)
                        html_image.setAttribute("height", selectedCourse.html_teil.height)
                    }


                    // JS Bilder
                    if (selectedCourse.js_teil.src === "") {
                        js_image.remove()
                        js_image_heading.remove()
                    } else {
                        js_image.setAttribute("src", selectedCourse.js_teil.src)
                        js_image.setAttribute("alt", selectedCourse.js_teil.alt)
                        js_image.setAttribute("width", selectedCourse.js_teil.width)
                        js_image.setAttribute("height", selectedCourse.js_teil.height)
                    }

                    contentSectionWrapper.appendChild(aufgabenkarte)
                })
                .catch(error => console.error('Fehler beim Laden der JSON-Daten:', error));
        }
    }
}