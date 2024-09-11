const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

// Evento Click para cada botao
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Botao Click
    console.log(e);

    // Remover seleção botoes
    buttons.forEach((btn) => {
      btn.querySelector(".color").classList.remove("selected");
    });

    // Identificar/setar botao
    const button = e.target;
    const id = button.getAttribute("id");
    button.querySelector(".color").classList.add("selected");

    // Alterar imagem
    image.classList.add("changing");
    image.setAttribute("src", `img/iphone_${id}.jpg`);

    setTimeout(() => {
      image.classList.toggle("changing");
    }, 300);
  });
});
