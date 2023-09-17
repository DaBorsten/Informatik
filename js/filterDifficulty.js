

let filterBtn = document.querySelectorAll('.filterBtn')
let searchFailed = document.querySelector('.searchFailed')

filterBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterDifficulty(e)
    })
})

function setActiveFilterBtn(e) {
    filterBtn.forEach(btn => {
        btn.classList.remove('activeFilter')
    })

    e.target.classList.add('activeFilter')
}


function filterDifficulty(e) {
    setActiveFilterBtn(e)

    let btnType = e.target.dataset.difficulty
    let coursePreviewCard = document.querySelectorAll('.coursePreviewCard')

    let anySearchResults = false

    coursePreviewCard.forEach(card => {
        card.classList.add("hide")

        const cardType = card.dataset.difficulty

        if (cardType !== btnType) {
            card.classList.add("hide")
        }

        if (cardType == btnType) {
            card.classList.remove("hide")
        }

        if (!card.classList.contains("hide")) {
            anySearchResults = true
        }
    })

    if (!anySearchResults) {
        searchFailed.classList.remove("hide")
    } else {
        searchFailed.classList.add("hide")
    }
}

filterBtn[0].addEventListener('click', (e) => {
    setActiveFilterBtn(e)

    let coursePreviewCard = document.querySelectorAll('.coursePreviewCard')

    coursePreviewCard.forEach(card => {
        card.classList.remove("hide")
    })

    searchFailed.classList.add("hide")
})

