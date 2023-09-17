
let coursesWrapper = document.querySelector('.coursesWrapper')
let courseCardTemplate = document.getElementById('courseCardTemplate')

fetch("json/courses.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(course => {

            const courseCard = courseCardTemplate.content.cloneNode(true)
            const couseLink = courseCard.querySelector('[data-course-link]')
            const couseSymbol = courseCard.querySelector('[data-course-symbol]')
            const couseTitle = courseCard.querySelector('[data-course-title]')
            const couseCounter = courseCard.querySelector('[data-course-counter]')

            couseTitle.textContent = course.courseTitle
            /* couseCounter.textContent = "10 Kurse" */

            if (course.courseTitle == "HTML") {
                fetch("json/html.json")
                    .then(response => response.json())
                    .then(data => {
                        if (data.length == 1) {
                            couseCounter.textContent = `${data.length} Kurs`
                        } else {
                            couseCounter.textContent = `${data.length} Kurse`
                        }
                    })
            }

            if (course.courseTitle == "JavaScript") {
                fetch("json/javascript.json")
                    .then(response => response.json())
                    .then(data => {
                        if (data.length == 1) {
                            couseCounter.textContent = `${data.length} Kurs`
                        } else {
                            couseCounter.textContent = `${data.length} Kurse`
                        }
                    })
            }

            if (course.courseTitle == "Datenbanken") {
                fetch("json/datenbanken.json")
                    .then(response => response.json())
                    .then(data => {
                        if (data.length == 1) {
                            couseCounter.textContent = `${data.length} Kurs`
                        } else {
                            couseCounter.textContent = `${data.length} Kurse`
                        }
                    })
            }

            if (course.courseTitle == "Aufgaben") {
                fetch("json/aufgaben.json")
                    .then(response => response.json())
                    .then(data => {
                        if (data.length == 1) {
                            couseCounter.textContent = `${data.length} Kurs`
                        } else {
                            couseCounter.textContent = `${data.length} Kurse`
                        }
                    })
            }


            couseSymbol.style.backgroundImage = `url(${course.courseIconLink})`
            couseSymbol.style.backgroundColor = course.courseColor
            couseLink.addEventListener('click', () => {
                window.location.href = course.courseLink
            })

            coursesWrapper.appendChild(courseCard)
        })
    })