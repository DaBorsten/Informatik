"use strict";
const contentSectionWrapper = document.querySelector('.contentSectionWrapper');
const course_template = document.getElementById('detailed_course_template');
function createCourseCard(url, index) {
    if (contentSectionWrapper !== null) {
        contentSectionWrapper.innerHTML = '';
    }
    fetch(url)
        .then(response => response.json())
        .then(data => {
        var _a;
        const keys = Object.keys(data);
        const selectedCourse = data[keys[index]];
        // HTML-Tab HTML Karten
        if (course_template !== null) {
            const courseCard = course_template.content.cloneNode(true);
            const title = courseCard.querySelector('[data-detailed-card-title]');
            const description = courseCard.querySelector('[data-detailed-card-description]');
            const picture_1_heading = courseCard.querySelector('[data-detailed-card-image-1-heading]');
            const picture_1 = courseCard.querySelector('[data-detailed-card-image-1]');
            const picture_2_heading = courseCard.querySelector('[data-detailed-card-image-2-heading]');
            const picture_2 = courseCard.querySelector('[data-detailed-card-image-2]');
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
                }
                else {
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
                }
                else {
                    description.remove();
                }
            }
            // Bild 1
            if (picture_1 !== null) {
                if ("picture_1" in selectedCourse) {
                    if (selectedCourse.picture_1.src === "") {
                        picture_1.remove();
                    }
                    else {
                        if (picture_1_heading !== null) {
                            if (selectedCourse.picture_1.heading !== undefined) {
                                picture_1_heading.textContent = selectedCourse.picture_1.heading;
                            }
                            else {
                                picture_1_heading.remove();
                            }
                        }
                        picture_1.setAttribute("src", selectedCourse.picture_1.src);
                        picture_1.setAttribute("alt", selectedCourse.picture_1.alt);
                        picture_1.setAttribute("width", selectedCourse.picture_1.width);
                        picture_1.setAttribute("height", selectedCourse.picture_1.height);
                    }
                }
                else {
                    picture_1.remove();
                    if (picture_1_heading !== null) {
                        picture_1_heading.remove();
                    }
                }
            }
            // Bild 2
            if (picture_2 !== null) {
                if ("picture_2" in selectedCourse) {
                    if (selectedCourse.picture_2.src === "") {
                        picture_2.remove();
                    }
                    else {
                        if (picture_2_heading !== null) {
                            if (selectedCourse.picture_2.heading !== undefined) {
                                picture_2_heading.textContent = selectedCourse.picture_2.heading;
                            }
                            else {
                                picture_2_heading.remove();
                            }
                        }
                        picture_2.setAttribute("src", selectedCourse.picture_2.src);
                        picture_2.setAttribute("alt", selectedCourse.picture_2.alt);
                        picture_2.setAttribute("width", selectedCourse.picture_2.width);
                        picture_2.setAttribute("height", selectedCourse.picture_2.height);
                    }
                }
                else {
                    picture_2.remove();
                    if (picture_2_heading !== null) {
                        picture_2_heading.remove();
                    }
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
                            download.setAttribute("download", selectedCourse.download.button_link.split("/").pop());
                        }
                    }
                    else {
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
                    }
                    else {
                        learn_more.remove();
                    }
                }
            }
            else {
                (_a = courseCard.querySelector('.courseActionButtons')) === null || _a === void 0 ? void 0 : _a.remove();
            }
            if (contentSectionWrapper !== null) {
                contentSectionWrapper.appendChild(courseCard);
            }
        }
    })
        .catch(error => console.error('Fehler beim Laden der JSON-Daten:', error));
}
function showCourse(e) {
    const target = e;
    if (target instanceof HTMLElement && target.dataset) {
        const index = target.dataset.index;
        if (index) {
            if (document.title == "HTML") {
                createCourseCard("json/html.json", index);
            }
            else if (document.title == "JavaScript") {
                createCourseCard("json/javascript.json", index);
            }
            else if (document.title == "Datenbanken") {
                createCourseCard("json/datenbanken.json", index);
            }
            else if (document.title == "Aufgaben") {
                createCourseCard("json/aufgaben.json", index);
            }
        }
    }
}
