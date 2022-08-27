/*Função para criptografar texto*/
const inputTexto = document.querySelector(".texto-digitado");
const mensagem = document.querySelector(".mensagem");


function btnEncriptar() {
  const textoEncriptado = encriptar(inputTexto.value);
  mensagem.value = textoEncriptado;
  document.querySelector('.mensagem').style.backgroundImage= 'none';
  document.querySelector('.texto').style.display = 'none';
  document.querySelector('.texto-menor').style.display = 'none';
  document.querySelector('.copiar').style.display = 'block';
}


function encriptar(stringEncriptada) {
  let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringEncriptada;
}


/*Função para descriptografar texto*/
function btnDescriptografar() {
  const textoDesencriptado = desencriptar(inputTexto.value);
  mensagem.value = textoDesencriptado;
  document.querySelector('.mensagem').style.backgroundImage= 'none';
  document.querySelector('.texto').style.display = 'none';
  document.querySelector('.texto-menor').style.display = 'none';
  document.querySelector('.copiar').style.display = 'block';
}


function desencriptar(stringDesencriptada) {
  let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return stringDesencriptada;
}


/*Função para copiar texto*/
function copiar() {

    var content = document.querySelector('.mensagem');

    content.select();
    document.execCommand('copy');

    alert("Texto Copiado");
}
