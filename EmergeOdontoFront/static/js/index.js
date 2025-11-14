// CONTEÚDO PARA O SEU ARQUIVO index.js

// 1. Seletores
// Agora .option_image encontra as 3 imagens, pois a classe foi adicionada ao HTML.
const options = document.querySelectorAll('.option_image'); 
const mainImage = document.querySelector('.hero_image img'); // <--- NOVO SELETOR MAIS ESPECÍFICO
const circle = document.querySelector('.circle');
// 2. Cores (Swatches)
// Cor 0: para endo.png
// Cor 1: para bucomaxilo.png
// Cor 2: para oralMenor.png
let swatch = ["#191c26ff","#122350ff","#0f1831ff"]; 

// 3. Lógica
options.forEach((image, index) => {
    image.addEventListener("click", () => {
        
        // Troca o SRC da imagem principal
        mainImage.src = image.src; 
        
        // Troca a cor de fundo do círculo
        circle.style.background = swatch[index];
    });
});