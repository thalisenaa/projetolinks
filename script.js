function toggleMode() {
  /*Document quer dizer que é todo meu documento em html*/
  const html = document.documentElement
  /* Se existe uma classe light no meu html*/
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
  //O toggle faz todas essas etapas anteriores de encontrar e remover ou de não encontrar e inserir
  html.classList.toggle("light")

  //Alterando imagem do profile
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar1-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar1.png")
  }
}
