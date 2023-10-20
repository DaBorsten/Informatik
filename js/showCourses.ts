"use strict";
const contentSectionWrapper = document.querySelector('.contentSectionWrapper');
const course_template = document.getElementById('detailed_course_template') as HTMLTemplateElement;

let courseOpen = false;
const homeButton = document.querySelector('.homeButton') as HTMLElement
const backButton = document.querySelector('.backButton') as HTMLElement


function createCourseCard(url: string, index: any) {
    if (contentSectionWrapper !== null) {
        contentSectionWrapper.innerHTML = '';
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const keys = Object.keys(data);
            const selectedCourse = data[keys[index]];
            // HTML-Tab HTML Karten
            if (course_template !== null) {
                const courseCard = course_template.content.cloneNode(true) as HTMLElement;
                const title = courseCard.querySelector('[data-detailed-card-title]');
                const description = courseCard.querySelector('[data-detailed-card-description]');

                const picturesWrapper = courseCard.querySelector('[data-detailed-card-pictures-wrapper]');

                const download = courseCard.querySelector('[data-detailed-card-download]');
                const learn_more = courseCard.querySelector('[data-detailed-card-learn-more]');

                // Title
                if (title !== null) {
                    if ("title" in selectedCourse) {
                        if (selectedCourse.title === "") {
                            title.remove();
                        }
                        else {
                            title.textContent = selectedCourse.title;
                        }
                    } else {
                        title.remove();
                    }
                }
                // Description
                if (description !== null) {
                    if ("description" in selectedCourse) {
                        if (selectedCourse.description === "") {
                            description.remove();
                        }
                        else {
                            description.textContent = selectedCourse.description;
                        }
                    } else {
                        description.remove();
                    }
                }

                // Bilder
                if (picturesWrapper !== null) {
                    if ("pictures" in selectedCourse && selectedCourse.pictures.length > 0) {

                        selectedCourse.pictures.forEach((picture: { src: string; heading: string | null | undefined; alt: string; width: string; height: string; }) => {

                            let pictureWrapper = document.createElement('div');
                            pictureWrapper.classList.add('pictureWrapper')

                            if (picture.src === "") {
                                return
                            }
                            else {
                                let pictureHeading = document.createElement('h3');
                                let pictureImage = document.createElement('img');

                                if (picture.heading !== undefined) {
                                    pictureHeading.textContent = picture.heading;
                                    pictureWrapper.appendChild(pictureHeading)
                                }
                                else {
                                    pictureHeading.remove();
                                }

                                pictureImage.classList.add('screenshots')
                                pictureImage.setAttribute("src", picture.src);
                                pictureImage.setAttribute("alt", picture.alt);
                                pictureImage.setAttribute("width", picture.width);
                                pictureImage.setAttribute("height", picture.height);

                                pictureWrapper.appendChild(pictureImage)

                                picturesWrapper.appendChild(pictureWrapper)
                            }
                        })
                    } else {
                        picturesWrapper.remove()
                    }
                }

                if ("learn_more" in selectedCourse || "download" in selectedCourse) {
                    // Download Button
                    if (download !== null) {
                        if ("download" in selectedCourse) {
                            if (selectedCourse.download.button_link === "") {
                                download.remove();
                            }
                            else {
                                download.setAttribute("href", selectedCourse.download.button_link);
                                download.textContent = selectedCourse.download.button_link.split("/").pop();
                                download.setAttribute("download", "");
                            }
                        } else {
                            download.remove();
                        }
                    }
                    // Learn More Button
                    if (learn_more !== null) {
                        if ("learn_more" in selectedCourse) {
                            if (selectedCourse.learn_more === "") {
                                learn_more.remove();
                            }
                            else {
                                learn_more.setAttribute("href", selectedCourse.learn_more);
                            }
                        } else {
                            learn_more.remove()
                        }
                    }
                } else {
                    courseCard.querySelector('.courseActionButtons')?.remove()
                }

                if (contentSectionWrapper !== null) {
                    contentSectionWrapper.appendChild(courseCard);
                }

                courseOpen = true;
            }
        })
        .catch(error => console.error('Fehler beim Laden der JSON-Daten:', error));
}

function showCourse(e: any) {
    const target = e;
    if (target instanceof HTMLElement && target.dataset) {
        const index = target.dataset.index;
        if (index) {
            if (document.title == "HTML") {
                createCourseCard("json/html.json", index)
                courseOpen = true;
                changeNavigation(courseOpen)
            }
            else if (document.title == "JavaScript") {
                createCourseCard("json/javascript.json", index)
                courseOpen = true;
                changeNavigation(courseOpen)
            }
            else if (document.title == "Datenbanken") {
                createCourseCard("json/datenbanken.json", index)
                courseOpen = true;
                changeNavigation(courseOpen)
            }
            else if (document.title == "Aufgaben") {
                createCourseCard("json/aufgaben.json", index)
                courseOpen = true;
                changeNavigation(courseOpen)
            }
        }
    }
}





changeNavigation(courseOpen)

function changeNavigation(courseOpen: boolean) {
    if (courseOpen) {
        // Show Back Button and hide Home Button
        if (homeButton != null) {
            homeButton.style.display = 'none'
        }

        if (backButton != null) {
            backButton.style.display = 'flex'
        }

    } else {
        // Show Home Button and hide Back Button
        if (homeButton != null) {
            homeButton.style.display = 'flex'
        }

        if (backButton != null) {
            backButton.style.display = 'none'
        }

    }
}
