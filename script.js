// Mobile menu
const openBtn = document.querySelector(".btn")
const closeBtn = document.querySelector("#closebtn")
const links = document.querySelectorAll("#mobile-menu a")
const mobileMenu = document.querySelector("#mobile-menu")

openBtn.addEventListener("click", () => {
    mobileMenu.style.display = "flex"
})
closeBtn.addEventListener("click", () => {
    mobileMenu.style.display = "none"
})
for(let link of links) {
link.addEventListener("click", () => {
    mobileMenu.style.display = "none"
})
}
// scroll down header
const scrollHeader = document.querySelector("#home")
const about = document.querySelector("#first")
const aboutTop = about.getBoundingClientRect().top

document.addEventListener("scroll", () => {
    if(document.documentElement.scrollTop > aboutTop) {
        scrollHeader.style.position = "fixed" 
        scrollHeader.classList.add("fade-in")
    } else {
        scrollHeader.style.position = "relative"
        scrollHeader.classList.remove("fade-in")
    }
})

// Slider - promena fotki na click
const rightSlide = document.querySelector("#right-bg")
const leftSlide = document.querySelector("#left-bg")
const pictures = document.querySelectorAll(".picture")

let imgNum = 0

rightSlide.addEventListener("click", () => {
    displNone()
    imgNum++
    if(imgNum === pictures.length) {
        imgNum = 0
    }
    pictures[imgNum].style.display = "block" 
    
})
leftSlide.addEventListener("click", () => {
    displNone()
    imgNum--
    if(imgNum === -1) {
        imgNum = pictures.length -1
    }
    pictures[imgNum].style.display = "block" 
})

const displNone = () => {
    pictures.forEach((img) => {
        img.style.display = "none"
    })
}
// Animacija naslova 
const lastSec = document.querySelector("#third br")
const lastSecTop = lastSec.getBoundingClientRect().top


document.addEventListener("scroll", () => {
    if(document.documentElement.scrollTop >= lastSecTop) {

const textTag = document.querySelector(".h h1")
const text = textTag.innerText

const splittedText = text.split("")

textTag.innerHTML = ""

for(let i = 0; i < splittedText.length; i++) {
    if(splittedText[i] == " ") {
        splittedText[i] = "&nbsp;"
    }

    textTag.innerHTML += `<span>${splittedText[i]}</span>`
}

let k = 0
let interval = setInterval(() => {
    let spans = textTag.querySelectorAll("span")
    let singleSpans = spans[k]

    singleSpans.className = "fadeMove"
    k++

    if(k === spans.length) {
        clearInterval(interval)
    }
}, 80);
    }
})

// OOP - Validacija forme
let config = {
    "ime-prezime": {
        required: true,
        minlength: 3,
        maxlength: 50
    },
    "korisnicko-ime": {
        required: true,
        minlength: 5,
        maxlength: 50
    },
    "email": {
        required: true,
        email: true,
        minlength: 3,
        maxlength: 50
    },
    "broj": {
        minlength: 9,
        maxlength: 13
    },
    "lozinka": {
        required: true,
        minlength: 7,
        maxlength: 25,
        matching: "ponovi-lozinku"
    },
    "ponovi-lozinku": {
        required: true,
        minlength: 7,
        maxlength: 25,
        matching: "lozinka"
    }
}

let validator = new Validator(config)