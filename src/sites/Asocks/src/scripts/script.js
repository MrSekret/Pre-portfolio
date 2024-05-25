document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("burger").addEventListener("click", () => {
        document.querySelector("header").classList.toggle("open")
        document.body.style.overflow = (document.body.style.overflow == "visible") ? "hidden" : "visible"
    })
})


