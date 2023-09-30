"use strict";
const course_preview_template = document.getElementById('course_template');
const course_preview_wrapper = document.querySelector('.coursesList');
function loadPreviewCourseCards(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
        data.forEach((course, i) => {
            // Course Preview Card
            const courseCard = course_preview_template.content.cloneNode(true);
            const coursePreviewCard = courseCard.querySelector('.coursePreviewCard');
            const title = courseCard.querySelector('[data-preview-card-title]');
            const description = courseCard.querySelector('[data-preview-card-description]');
            const difficulty = courseCard.querySelector('.difficultyBtn[data-difficulty]');
            coursePreviewCard.dataset.index = i;
            // Title
            if (title !== null) {
                if (course.title === "") {
                    title.remove();
                }
                else {
                    title.textContent = course.title;
                }
            }
            // Description
            if (description !== null) {
                if (course.description === "") {
                    description.remove();
                }
                else {
                    description.textContent = course.description;
                }
            }
            // Difficulty
            if (difficulty !== null) {
                if (course.difficulty === "") {
                    difficulty.remove();
                }
                else if (course.difficulty === 1) {
                    difficulty.textContent = "leicht".toUpperCase();
                    difficulty.dataset.difficulty = "leicht";
                    coursePreviewCard.dataset.difficulty = "leicht";
                }
                else if (course.difficulty === 2) {
                    difficulty.textContent = "mittel".toUpperCase();
                    difficulty.dataset.difficulty = "mittel";
                    coursePreviewCard.dataset.difficulty = "mittel";
                }
                else if (course.difficulty === 3) {
                    difficulty.textContent = "schwer".toUpperCase();
                    difficulty.dataset.difficulty = "schwer";
                    coursePreviewCard.dataset.difficulty = "schwer";
                }
            }
            if (course_preview_wrapper !== null) {
                course_preview_wrapper.appendChild(courseCard);
            }
        });
    });
}
if (document.title == "HTML") {
    loadPreviewCourseCards("json/html.json");
}
else if (document.title == "JavaScript") {
    loadPreviewCourseCards("json/javascript.json");
}
else if (document.title == "Datenbanken") {
    loadPreviewCourseCards("json/datenbanken.json");
}
else if (document.title == "Aufgaben") {
    loadPreviewCourseCards("json/aufgaben.json");
}
