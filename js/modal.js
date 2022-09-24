searchModal = () => {
    const searchModal = document.querySelector(".search-model")
    const modalBtn = document.querySelector(".icon_search")
    const modalClose = searchModal.querySelector(".search-close-switch")

    modalBtn.addEventListener('click', (e) => {
        searchModal.style.display = "block"
    })

    modalClose.addEventListener('click', () => {
        searchModal.style.display = "none"
    })
}

searchModal()