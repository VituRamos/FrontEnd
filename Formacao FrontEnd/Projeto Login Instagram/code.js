var btn = document.getElementById("btnEntrar");
var username = document.getElementById("username");
var password = document.getElementById("password");

function atualizarEstadoDoBotao() {
  if (username.value.trim() !== "" && password.value.trim() !== "") {
    btn.disabled = false; // Desabilita o botão se qualquer campo estiver vazio
    btn.style.cursor = "default";
    btn.style.backgroundColor = "#4cb5f9";
  } else {
    btn.disabled = true; // Habilita o botão se ambos os campos tiverem valor
  }
}

username.addEventListener("input", atualizarEstadoDoBotao);
password.addEventListener("input", atualizarEstadoDoBotao);

atualizarEstadoDoBotao();

btn.addEventListener("mouseover", function () {
  if (!btn.disabled) {
    btn.style.backgroundColor = "#1877f2";
    btn.style.cursor = "pointer";
  }
});

// Adicionando o manipulador de eventos mouseout para reverter as mudanças
btn.addEventListener("mouseout", function () {
  if (!btn.disabled) {
    btn.style.backgroundColor = "#0095f6";
  }
});
