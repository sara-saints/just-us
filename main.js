const botoes = document.querySelectorAll(".botao");

let item = 0;

const imagens = document.querySelectorAll(".imagem");

const maxItems = imagens.length;

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        const botaoEsquerdo = botao.classList.contains("botao-esquerda")
        
        if (botaoEsquerdo) {
            item -= 1;
        } else {
            item += 1;
        }

        if (item >= maxItems) {
            item = 0;
        }

        if (item <= -1) {
            item = maxItems - 1;
        }

        imagens[item].scrollIntoView({
            behavior: "smooth",
            inline: "center"
          });

        console.log ("clicado")
    })
})


//quando clicar na imagem abrir um modal 

imagens.forEach((imagem) =>{
    imagem.addEventListener("click", (event) => {
        console.log(event.target)
    })
})

