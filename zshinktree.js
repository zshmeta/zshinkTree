//Color Switcher

const body = document.querySelector("body");
const cartouche = document.querySelectorAll(".cartouche");
const p = document.querySelectorAll("p");
const randomThemes = [cyberpunkZ, cobaltZ, retroZ, neonZ, matrixZ, bloodZ, monokaiZ, gruvboxZ, contrastZ];
const whatTheme = document.querySelector(".whatTheme");

function toggleTheme(randomThemes) {
    body.classList.toggle(randomThemes);
    themes.forEach((t) => {
      if (t !== theme) {
    document.querySelector()(".whatTheme").textContent = "theme: " + t
        body.classList.remove(t);
        cartouche.forEach((cartouche) => {
          cartouche.classList.remove(t);
        });
      }
    });
  }


function cyberpunkZ() {
    body.classList.toggle("cyberpunk");
    cartouche.forEach((cartouche) => {
    cartouche.classList.toggle("cyberpunk");
    })
    whatTheme.textContent ="theme: Cyberpunk"
    return
}

function cobaltZ() {
    body.classList.toggle("cobalt");
    cartouche.forEach((cartouche) => {
    cartouche.classList.toggle("cobalt");
    })
    whatTheme.textContent ="theme: Cobalt"
    return
}

function retroZ() {
    body.classList.toggle("retro");
    cartouche.forEach((cartouche) => {
    cartouche.classList.toggle("retro");
    })
    whatTheme.textContent ="theme: Retro"
    return
}

function neonZ() {
    body.classList.toggle("neon");
    cartouche.forEach((cartouche) => {
    cartouche.classList.toggle("neon");
    })
    whatTheme.textContent ="theme: Neon"
    return
}

function matrixZ() {
    body.classList.toggle("matrix");
    cartouche.forEach((cartouche) => {
    cartouche.classList.toggle("matrix");
    })
    whatTheme.textContent ="theme: Matrix"
    return
}

function bloodZ() {
    body.classList.toggle("blood");
    cartouche.forEach((cartouche) => {
    cartouche.classList.toggle("blood");
    })
    whatTheme.textContent = "theme: Blood"
    return
}

function monokaiZ() {
    body.classList.toggle("monokai");
    cartouche.forEach((cartouche) => {
    cartouche.classList.toggle("monokai");
    })
    whatTheme.textContent ="theme: Monokai";
    return
}

function gruvboxZ() {
    body.classList.toggle("gruvbox");
    cartouche.forEach((cartouche) => {
    cartouche.classList.toggle("gruvbox");
    })
    whatTheme.textContent ="theme: Gruvbox";
    return
}

function contrastZ() {
    body.classList.toggle("contrast");
    cartouche.forEach((cartouche) => {
    cartouche.classList.toggle("contrast");
    })
    whatTheme.textContent ="theme: Contrast"
    return
}



setInterval(() => {
    const randomTheme = randomThemes[Math.floor(Math.random() * randomThemes.length)];
    randomTheme();
}, 10000);