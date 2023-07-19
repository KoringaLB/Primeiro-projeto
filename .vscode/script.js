function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
  if (html.classList.contains("light")) {
    img.setAttribute("alt", "imagem de yuji itadori")
  } else {
    img.setAttribute("alt", "Imagem de Ryomen Sukuna rindo")
  }
}
