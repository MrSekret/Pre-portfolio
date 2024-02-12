/*Resizing&movingg*/
const fn = () => {
  if (window.innerWidth < 430){
    document.querySelector(".preview__text").innerHTML = 'Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostruercitation ullamco laboris'
    document.getElementById('overlay').style.display="block"
    document.querySelector('.about-us__satisfied-clients').before(document.querySelector('.about-us__imgblock'))
  }else if(window.innerWidth < 768){
    document.querySelector('.about-us__satisfied-clients').before(document.querySelector('.about-us__imgblock'))    
  }
}
window.addEventListener("DOMContentLoaded", fn);
/*Burger*/
let IsBurgerOpen = false
document.getElementById("menu-burger").addEventListener("click", e => {
  IsBurgerOpen = !IsBurgerOpen
  document.getElementById("header__menu").style.right = IsBurgerOpen ? "-20px" : "-255px"
  document.querySelector("html").style.overflow= IsBurgerOpen ? "hidden" : "scroll"
  document.getElementById("wrapper").classList.toggle("open")
  document.getElementById('overlay').classList.toggle("overlay-dark")
})

/*Increase animation*/
let aboutusIsUsed = false

function outNum(num, id, time=1400) {
  return new Promise(resolve => {
    let e = document.getElementById(id);
    let n = 0;

    function updateNumber() {
      n += 1
      e.innerHTML = n

      if (n < num) {
        setTimeout(updateNumber, time / num)
      } else {
        resolve()
      }
    }
    updateNumber()
  });
}
window.addEventListener('scroll', async function() {
  const triggerAboutus = document.getElementById("increaseing-percent")
  const triggerDigExperience = document.getElementById("increaseing-percent-75")
  const triggerAboutusPosition = triggerAboutus.getBoundingClientRect().top
  const triggerDigExperiencePosition = triggerDigExperience.getBoundingClientRect().top
  
  if (triggerDigExperiencePosition < window.innerHeight) {
    window.removeEventListener('scroll', arguments.callee)
    await outNum(75, "increaseing-percent-75", 1000)
    await outNum(85, "increaseing-percent-85", 1000)
    await outNum(65, "increaseing-percent-65", 1000)
  }
  if(!aboutusIsUsed){
    if (triggerAboutusPosition < window.innerHeight) {
      aboutusIsUsed = true
      outNum(85, "increaseing-percent")
    }
  }
})
