
let coursesWrapper = document.querySelector('.coursesWrapper')
let courseCardTemplate = document.getElementById('courseCardTemplate') as HTMLTemplateElement

fetch("json/courses.json")
    .then(response => response.json())
    .then(data => {
        data.forEach((course: any) => {

            const courseCard = courseCardTemplate.content.cloneNode(true)
            const courseLink = (courseCard as HTMLElement).querySelector('[data-course-link]')
            const courseSymbol = (courseCard as HTMLElement).querySelector('[data-course-symbol]') as HTMLElement
            const courseTitle = (courseCard as HTMLElement).querySelector('[data-course-title]')
            const courseCounter = (courseCard as HTMLElement).querySelector('[data-course-counter]')

            if (courseTitle !== null) {
                courseTitle.textContent = course.courseTitle
            }

            if (courseCounter !== null) {
                if (course.courseTitle == "HTML") {
                    fetch("json/html.json")
                        .then(response => response.json())
                        .then(data => {
                            if (data.length == 1) {
                                courseCounter.textContent = `${data.length} Kurs`
                            } else {
                                courseCounter.textContent = `${data.length} Kurse`
                            }
                        })
                }

                if (course.courseTitle == "JavaScript") {
                    fetch("json/javascript.json")
                        .then(response => response.json())
                        .then(data => {
                            if (data.length == 1) {
                                courseCounter.textContent = `${data.length} Kurs`
                            } else {
                                courseCounter.textContent = `${data.length} Kurse`
                            }
                        })
                }

                if (course.courseTitle == "Datenbanken") {
                    fetch("json/datenbanken.json")
                        .then(response => response.json())
                        .then(data => {
                            if (data.length == 1) {
                                courseCounter.textContent = `${data.length} Kurs`
                            } else {
                                courseCounter.textContent = `${data.length} Kurse`
                            }
                        })
                }

                if (course.courseTitle == "Aufgaben") {
                    fetch("json/aufgaben.json")
                        .then(response => response.json())
                        .then(data => {
                            if (data.length == 1) {
                                courseCounter.textContent = `${data.length} Kurs`
                            } else {
                                courseCounter.textContent = `${data.length} Kurse`
                            }
                        })
                }

            }

            if (courseSymbol !== null) {
                courseSymbol.style.backgroundImage = `url(${course.courseIconLink})`
                courseSymbol.style.backgroundColor = course.courseColor
            }
            if (courseLink !== null) {
                courseLink.addEventListener('click', () => {
                    window.location.href = course.courseLink
                })
            }

            if (coursesWrapper !== null) {
                coursesWrapper.appendChild(courseCard)
            }
        })
    })