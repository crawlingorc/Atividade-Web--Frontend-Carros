const idImgRed = "red";
const idBtnRed = "vermelho";

const idImgWhite = "white";
const idBtnWhite = "branco";

document.getElementById("white").addEventListener("click", function () {
  adicionarInteracaoImg("white");
});
document.getElementById("branco").addEventListener("click", function () {
  adicionarInteracaoBtn("white", "branco");
});

document.getElementById("red").addEventListener("click", function () {
  adicionarInteracaoImg("red");
});
document.getElementById("vermelho").addEventListener("click", function () {
  adicionarInteracaoBtn("red", "vermelho");
});

document.querySelector("#resetar").addEventListener("click", function () {
  reset();
});

function corDeFundo(novaCor) {
  document.querySelector("body").style.background = novaCor;
  document.querySelector("body").style.color = "black";
  document.querySelector("#result").innerHTML = novaCor;
}

function aparecerBotoes() {
  let botoesResetar = document.querySelector("#resetar");
  let botoesAcelerar = document.querySelector("#acelerar");
  let botoesDesacelerar = document.querySelector("#desacelerar");

  botoesResetar.style.display = "block";
  botoesAcelerar.style.display = "block";
  botoesDesacelerar.style.display = "block";
}

function desaparecerBotoes() {
  let botoesResetar = document.querySelector("#resetar");
  let botoesAcelerar = document.querySelector("#acelerar");
  let botoesDesacelerar = document.querySelector("#desacelerar");

  botoesResetar.style.display = "none";
  botoesAcelerar.style.display = "none";
  botoesDesacelerar.style.display = "none";
}

function reset() {
  location.reload();
}

function acelerar(imgId) {
  let alturaAtual = parseInt(
    window.getComputedStyle(document.querySelector(imgId)).width
  );
  alturaAtual -= 2;
  document.querySelector(imgId).style.width = alturaAtual + "px";

  if (imgId == "red") {
    let direcaoDireita = parseInt(
      window.getComputedStyle(document.querySelector(imgId)).width
    );
    direcaoDireita -= 10;
    document.querySelector(imgId).style.width = direcaoDireita + "px";
  }

  console.log(alturaAtual);
}

function desacelerar(imgId) {
  let alturaAtual = parseInt(
    window.getComputedStyle(document.querySelector(imgId)).width
  );
  alturaAtual += 2;
  document.querySelector(imgId).style.width = alturaAtual + "px";

  if (imgId == "red") {
    let direcaoDireita = parseInt(
      window.getComputedStyle(document.querySelector(imgId)).width
    );
    direcaoDireita += 10;
    document.querySelector(imgId).style.width = direcaoDireita + "px";
  }

  console.log(alturaAtual);
}

function adicionarInteracaoImg(idImg) {
  document.getElementById(idImg).addEventListener("click", function () {
    corDeFundo(idImg);
    aparecerBotoes();

    document.querySelector("#acelerar").addEventListener("click", function () {
      acelerar("#" + idImg);
    });
    document
      .querySelector("#desacelerar")
      .addEventListener("click", function () {
        desacelerar("#" + idImg);
      });
  });
}

function adicionarInteracaoBtn(idImg, idBtn) {
  document.getElementById(idBtn).addEventListener("click", function () {
    corDeFundo(idImg);
    aparecerBotoes();

    document.querySelector("#acelerar").addEventListener("click", function () {
      acelerar("#" + idImg);
    });
    document
      .querySelector("#desacelerar")
      .addEventListener("click", function () {
        desacelerar("#" + idImg);
      });
  });
}
