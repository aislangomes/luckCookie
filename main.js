const cookie = document.querySelector("#cookie")
const btnReset = document.querySelector("#btnreset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const phrases = [
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
  'A amizade desenvolve a felicidade e reduz o sofrimento, duplicando a nossa alegria e dividindo a nossa dor.',
  'Um navio no porto é seguro, mas não é para isso que os navios foram feitos.',
  'As melhores e mais belas coisas do mundo não podem ser vistas nem tocadas, mas o coração as sente.',
  'Você só vive uma vez, mas se você fizer tudo certo, uma vez é suficiente.'
]

cookie.addEventListener('click', openCookie)
btnReset.addEventListener('click', toggleScreen)


function openCookie(){
  toggleScreen()
  randonPhrase()
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function randonPhrase() {
  screen2.querySelector('p').innerText = phrases[Math.floor(Math.random() * phrases.length)]
}
