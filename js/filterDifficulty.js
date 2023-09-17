

let filterBtn = document.querySelectorAll('.filterBtn')

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


    coursePreviewCard.forEach(card => {
        card.classList.add("hide")

        const cardType = card.dataset.difficulty

        if (cardType !== btnType) {
            card.classList.add("hide")
        }

        if (cardType == btnType) {
            card.classList.remove("hide")
        }
    })


}

filterBtn[0].addEventListener('click', (e) => {
    setActiveFilterBtn(e)

    let coursePreviewCard = document.querySelectorAll('.coursePreviewCard')

    coursePreviewCard.forEach(card => {
        card.classList.remove("hide")
    })
})

