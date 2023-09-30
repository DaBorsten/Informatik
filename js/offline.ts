let popupShown = false

document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement

    if (target && target.classList.contains('actionButton')) {
        const online = navigator.onLine

        if (!online) {
            e.preventDefault()

            if (!popupShown) {
                const offlineNotification = document.querySelector('.offline') as HTMLElement
                if (offlineNotification) {
                    offlineNotification.dataset.offline = online ? 'false' : 'true'
                    popupShown = true

                    setTimeout(() => {
                        offlineNotification.dataset.offline = 'false'
                        popupShown = false
                    }, 3000)
                }
            }
        }
    }
})
