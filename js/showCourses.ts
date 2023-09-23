
let contentSectionWrapper = document.querySelector('.contentSectionWrapper') as HTMLElement | null

function showCourse(e: any) {

    const target = e as HTMLElement;

    if (target instanceof HTMLElement && target.dataset) {
        const index: any = target.dataset.index;


        if (index) {

            if (document.title == "HTML") {
                if (contentSectionWrapper !== null) {
                    contentSectionWrapper.innerHTML = ''
                }

                let html_template = document.getElementById('detailed_course_template') as HTMLTemplateElement

                fetch("json/html.json")
                    .then(response => response.json())
                    .then(data => {
                        const keys = Object.keys(data);
                        const selectedCourse = data[keys[index]];

                        // HTML-Tab HTML Karten
                        if (html_template !== null) {
                            const htmlkarte = html_template.content.cloneNode(true)


                            const title = (htmlkarte as HTMLElement).querySelector('[data-detailed-card-title]')
                            const description = (htmlkarte as HTMLElement).querySelector('[data-detailed-card-description]')
                            const picture = (htmlkarte as HTMLElement).querySelector('[data-detailed-card-image]')
                            const learn_more = (htmlkarte as HTMLElement).querySelector('[data-detailed-card-learn-more]')


                            // Title
                            if (title !== null) {
                                if (selectedCourse.title === "") {
                                    title.remove()
                                } else {
                                    title.textContent = selectedCourse.title
                                }

                                // Infos
                                if (description !== null) {
                                    if (selectedCourse.description === "") {
                                        description.remove()
                                    } else {

                                        description.textContent = selectedCourse.description
                                    }
                                }
                            }

                            // HTML Bilder
                            if (picture !== null) {
                                if (selectedCourse.picture.src === "") {
                                    picture.remove()
                                } else {
                                    picture.setAttribute("src", selectedCourse.picture.src)
                                    picture.setAttribute("alt", selectedCourse.picture.alt)
                                    picture.setAttribute("width", selectedCourse.picture.width)
                                    picture.setAttribute("height", selectedCourse.picture.height)
                                }
                            }

                            // Learn More Button
                            if (learn_more !== null) {
                                if (selectedCourse.learn_more === "") {
                                    learn_more.remove()
                                } else {
                                    learn_more.setAttribute("href", selectedCourse.learn_more)
                                }
                            }

                            if (contentSectionWrapper !== null) {
                                contentSectionWrapper.appendChild(htmlkarte)
                            }

                        }
                    })
                    .catch(error => console.error('Fehler beim Laden der JSON-Daten:', error));
            } else if (document.title == "JavaScript") {
                if (contentSectionWrapper !== null) {
                    contentSectionWrapper.innerHTML = ''
                }

                let javascript_template = document.getElementById('detailed_course_template') as HTMLTemplateElement

                fetch("json/javascript.json")
                    .then(response => response.json())
                    .then(data => {
                        const keys = Object.keys(data);
                        const selectedCourse = data[keys[index]];

                        // Javascript-Tab Javascript Karten
                        const javascriptkarte = javascript_template.content.cloneNode(true)

                        const title = (javascriptkarte as HTMLElement).querySelector('[data-detailed-card-title]')
                        const description = (javascriptkarte as HTMLElement).querySelector('[data-detailed-card-description]')
                        const picture = (javascriptkarte as HTMLElement).querySelector('[data-detailed-card-image]')
                        const learn_more = (javascriptkarte as HTMLElement).querySelector('[data-detailed-card-learn-more]')

                        // Infos
                        if (title !== null) {
                            if (selectedCourse.title === "") {
                                title.remove()
                            } else {
                                title.textContent = selectedCourse.title
                            }
                        }

                        if (description !== null) {
                            if (selectedCourse.description === "") {
                                description.remove()
                            } else {
                                description.textContent = selectedCourse.description
                            }
                        }

                        // JavaScript Bilder
                        if (picture !== null) {
                            if (selectedCourse.picture.src === "") {
                                picture.remove()
                            } else {
                                picture.setAttribute("src", selectedCourse.picture.src)
                                picture.setAttribute("alt", selectedCourse.picture.alt)
                                picture.setAttribute("width", selectedCourse.picture.width)
                                picture.setAttribute("height", selectedCourse.picture.height)
                            }
                        }

                        // Learn More Button
                        if (learn_more !== null) {
                            if (selectedCourse.learn_more === "") {
                                learn_more.remove()
                            } else {
                                learn_more.setAttribute("href", selectedCourse.learn_more)
                            }
                        }

                        if (contentSectionWrapper !== null) {
                            contentSectionWrapper.appendChild(javascriptkarte)
                        }
                    })
                    .catch(error => console.error('Fehler beim Laden der JSON-Daten:', error));
            } else if (document.title == "Datenbanken") {
                if (contentSectionWrapper !== null) {
                    contentSectionWrapper.innerHTML = ''
                }

                const datenbanken_template = document.getElementById('detailed_course_template') as HTMLTemplateElement

                fetch("json/datenbanken.json")
                    .then(response => response.json())
                    .then(data => {
                        const keys = Object.keys(data);
                        const selectedCourse = data[keys[index]];

                        // Datenbanken-Tab Datenbanken Karten
                        const datenbankenkarte = datenbanken_template.content.cloneNode(true)

                        const title = (datenbankenkarte as HTMLElement).querySelector('[data-detailed-card-title]')
                        const description = (datenbankenkarte as HTMLElement).querySelector('[data-detailed-card-description]')
                        const picture = (datenbankenkarte as HTMLElement).querySelector('[data-detailed-card-image]')
                        const download = (datenbankenkarte as HTMLElement).querySelector('[data-detailed-card-download]')

                        // Title
                        if (title !== null) {
                            if (selectedCourse.title === "") {
                                title.remove()
                            } else {
                                title.textContent = selectedCourse.title
                            }
                        }

                        // Infos
                        if (description !== null) {
                            if (selectedCourse.description === "") {
                                description.remove()
                            } else {
                                description.textContent = selectedCourse.description
                            }
                        }

                        // HTML Bilder
                        if (picture !== null) {
                            if (selectedCourse.picture.src === "") {
                                picture.remove()
                            } else {
                                picture.setAttribute("src", selectedCourse.picture.src)
                                picture.setAttribute("alt", selectedCourse.picture.alt)
                                picture.setAttribute("width", selectedCourse.picture.width)
                                picture.setAttribute("height", selectedCourse.picture.height)
                            }
                        }

                        // Download Button
                        if (download !== null) {
                            if (selectedCourse.download.button_link === "") {
                                download.remove()
                            } else {
                                download.setAttribute("href", selectedCourse.download.button_link)
                                download.textContent = selectedCourse.download.button_link.split("/").pop()
                            }
                        }
                        if (contentSectionWrapper !== null) {
                            contentSectionWrapper.appendChild(datenbankenkarte)
                        }
                    })
                    .catch(error => console.error('Fehler beim Laden der JSON-Daten:', error));
            } else if (document.title == "Aufgaben") {
                if (contentSectionWrapper !== null) {
                    contentSectionWrapper.innerHTML = ''
                }

                const aufgaben_template = document.getElementById('detailed_course_template') as HTMLTemplateElement

                fetch("json/aufgaben.json")
                    .then(response => response.json())
                    .then(data => {
                        const keys = Object.keys(data);
                        const selectedCourse = data[keys[index]];

                        // Aufgaben-Tab Aufgaben Karten
                        const aufgabenkarte = aufgaben_template.content.cloneNode(true)

                        const title = (aufgabenkarte as HTMLElement).querySelector('[data-detailed-card-title]')
                        const description = (aufgabenkarte as HTMLElement).querySelector('[data-detailed-card-description]')
                        const html_image_heading = (aufgabenkarte as HTMLElement).querySelector('[data-detailed-card-image-html-heading]')
                        const html_image = (aufgabenkarte as HTMLElement).querySelector('[data-detailed-card-html-image]')
                        const js_image_heading = (aufgabenkarte as HTMLElement).querySelector('[data-detailed-card-image-js-heading]')
                        const js_image = (aufgabenkarte as HTMLElement).querySelector('[data-detailed-card-js-image]')

                        // Title
                        if (title !== null) {
                            if (selectedCourse.title === "") {
                                title.remove()
                            } else {
                                title.textContent = selectedCourse.title
                            }
                        }

                        // Infos
                        if (description !== null) {
                            if (selectedCourse.description === "") {
                                description.remove()
                            } else {
                                description.textContent = selectedCourse.description
                            }
                        }

                        // HTML Bilder
                        if (html_image !== null) {
                            if (selectedCourse.html_teil.src === "") {
                                html_image.remove()
                                if (html_image_heading !== null) {
                                    html_image_heading.remove()
                                }
                            } else {
                                html_image.setAttribute("src", selectedCourse.html_teil.src)
                                html_image.setAttribute("alt", selectedCourse.html_teil.alt)
                                html_image.setAttribute("width", selectedCourse.html_teil.width)
                                html_image.setAttribute("height", selectedCourse.html_teil.height)
                            }
                        }


                        // JS Bilder
                        if (js_image !== null) {
                            if (selectedCourse.js_teil.src === "") {
                                js_image.remove()
                                if (js_image_heading !== null) {
                                    js_image_heading.remove()
                                }
                            } else {
                                js_image.setAttribute("src", selectedCourse.js_teil.src)
                                js_image.setAttribute("alt", selectedCourse.js_teil.alt)
                                js_image.setAttribute("width", selectedCourse.js_teil.width)
                                js_image.setAttribute("height", selectedCourse.js_teil.height)
                            }
                        }

                        if (contentSectionWrapper !== null) {
                            contentSectionWrapper.appendChild(aufgabenkarte)
                        }
                    })
                    .catch(error => console.error('Fehler beim Laden der JSON-Daten:', error));
            }
        }
    }
}