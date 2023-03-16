/*A função alterarImagem altera a imagem de um botão quando o botão é clicado. Se a imagem atual é "Imagens/Redstone_Lamp_JE3_BE2.webp", a imagem é alterada para "Imagens/Lit_Redstone_Lamp_JE2_BE1.webp" e vice-versa.*/
function alterarImagem() {
  var imagem = document.getElementById("btn-1");
			if (imagem.src.match("Imagens/Redstone_Lamp_JE3_BE2.webp")) {
				imagem.src = "Imagens/Lit_Redstone_Lamp_JE2_BE1.webp";
			} else {
				imagem.src = "Imagens/Redstone_Lamp_JE3_BE2.webp";
			}
		}
/*A função toggleDarkMode adiciona ou remove a classe "dark-mode" do elemento "body" da página. Isso permite que o usuário altere entre um tema claro e um tema escuro ao clicar no botão.*/
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  
  function executarFuncoes() {
    alterarImagem();
    toggleDarkMode();
  }
/* A função tocarSom toca um som de Minecraft quando o botão é clicado. A função usa uma lista de arquivos de áudio e toca o próximo arquivo de áudio na lista cada vez que o botão é clicado. Quando o fim da lista é alcançado, a função volta ao início da lista.*/
  var sons = [
    new Audio('Notas/minecraft-note-block---bass-By-Tuna.mp3'),
    new Audio('Notas/minecraft-note-block---bassattack-By-Tuna.mp3'),
    new Audio('Notas/minecraft-note-block---bell-By-Tuna.mp3'),
    new Audio('Notas/minecraft-note-block---cow-bell-By-Tuna.mp3'),
    new Audio('Notas/minecraft-note-block---flute-By-Tuna.mp3'),
    new Audio('Notas/minecraft-note-block---guitar-By-Tuna.mp3'),
    new Audio('Notas/minecraft-note-block---harp-By-Tuna.mp3'),
    new Audio('Notas/minecraft-note-block---ice-chime-By-Tuna.mp3'),
    new Audio('Notas/minecraft-note-block---pling-By-Tuna.mp3')
  ];

  var contador = 0;

  function tocarSom() {
    sons[contador].play();
    contador = (contador + 1) % sons.length;
  }