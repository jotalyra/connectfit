// Verifica se há dados armazenados no localStorage
if(localStorage.getItem('profileImg') !== null &&
   localStorage.getItem('nome-que-quero-ser-chamado') !== null &&
   localStorage.getItem('nome') !== null &&
   localStorage.getItem('idade') !== null &&
   localStorage.getItem('academias') !== null &&
   localStorage.getItem('localizacao') !== null &&
   localStorage.getItem('about') !== null) {

    // Carrega os valores do localStorage
    var profileImg = localStorage.getItem('profileImg');
    var nomeQueQueroSerChamado = localStorage.getItem('nome-que-quero-ser-chamado');
    var nome = localStorage.getItem('nome');
    var idade = localStorage.getItem('idade');
    var academias = localStorage.getItem('academias');
    var localizacao = localStorage.getItem('localizacao');
    var about = localStorage.getItem('about');

    // Atribui os valores aos elementos HTML
    document.getElementById('user-Photo').src = profileImg;
    document.getElementById('user-Name').textContent = nomeQueQueroSerChamado;
    document.getElementById('user-Full-Name').textContent = nome;
    document.getElementById('user-Age').textContent = idade;
    document.getElementById('user-Gyms').textContent = academias;
    document.getElementById('user-Location').textContent = localizacao;
    document.getElementById('user-Description').textContent = about;
} else {
    // Caso não haja dados no localStorage, exibe uma mensagem de erro ou realiza outra ação apropriada
    console.log('Dados não encontrados no localStorage.');
}
function previaImagem() {
    var preview = document.getElementById("previaImagem");
    preview.style.display = "flex"
    const file = document.getElementById("upload").files[0];
    const reader = new FileReader();
  
    reader.addEventListener(
      "load",
      () => {
        // convert image file to base64 string
        preview.src = reader.result;
      },
      false,
    );
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }

function publicarPostagem(){
    var textoASerPublicado = document.getElementById("textoPulicacao").value;
    var previaImagem = document.getElementById("previaImagem");
    if (!textoASerPublicado || !previaImagem){
        alert("Por favor preencha todos os campos antes e publicar a mensagem (inclusive upload da imagem a ser publicada)!");    
    }else{
        var novaDivCriada = document.createElement("div");
        novaDivCriada.classList.add("post");
        var srcPreviaImagem = document.getElementById("previaImagem").src;
        novaDivCriada.innerHTML = "<div class='icone-perfil'><img src='img/foto_menu.png' alt='Sofia'>Sofia</div><p class='texto-post'>"+textoASerPublicado+"</p><img src='"+srcPreviaImagem+"' alt='Foto Postada'>";
        var primeiraDivPost = document.querySelectorAll(".post")[0];
        primeiraDivPost.parentElement.insertBefore(novaDivCriada, primeiraDivPost);
        textoASerPublicado = document.getElementById("textoPulicacao").value = "";
        previaImagem.src = "";
        previaImagem.style.display = "none";
    }
}

function abrirCaixaPublicarEvento(idDivDiaCalendarioClicado){
  var divDiaCalendarioClicado = document.getElementById(idDivDiaCalendarioClicado);
  var divCaixaPublicarEvento = document.getElementById('publicaEvento');
  divCaixaPublicarEvento.style.display = "block";
  var divGuardarIdCalendario = document.getElementById('idGuardaiDDIvCalendario');
  divGuardarIdCalendario.innerHTML = idDivDiaCalendarioClicado
  divGuardarIdCalendario.style.display = "none";
  document.getElementById('dataEvento').innerHTML = idDivDiaCalendarioClicado;
  document.getElementById('textoPublicacaoEvento').value = divDiaCalendarioClicado.innerHTML;
}

function salvarEventoCalendario(){
  var idDivDiaCalendaASalvar = document.getElementById('idGuardaiDDIvCalendario').innerHTML;
  var divCalendarioCalendaASalvar = document.getElementById(idDivDiaCalendaASalvar);
  textoPublicacaoEvento = document.getElementById('textoPublicacaoEvento').value;
  divCalendarioCalendaASalvar.innerHTML = textoPublicacaoEvento;
  divCalendarioCalendaASalvar.classList.add('event');
  document.getElementById('publicaEvento').style.display = "none";
}

function comentar(e) {
  var post = e.target.closest('.post');
  var novoComentario = post.querySelector('#novo-comentario-texto');
  var textoComentario = novoComentario.value;
  novoComentario.value = '';
  if (textoComentario.trim() === '') {
    return;
  }

  var nenhumComentario = post.querySelector('.comentarios > p');

  if (nenhumComentario) {
    nenhumComentario.remove();
  }

  var comentarios = post.querySelector('.comentarios ul');
  if (!comentarios) {
    comentarios = document.createElement('ul');
    post.querySelector('.comentarios').appendChild(comentarios);
  }

  // Busca os dados do usuário no localStorage
  var profileImg = localStorage.getItem('profileImg');
  var nomeQueQueroSerChamado = localStorage.getItem('nome-que-quero-ser-chamado');

  // Cria o novo comentário usando os dados do localStorage
  var comentario = document.createElement('li');
  comentario.classList.add('comentario');
  comentario.innerHTML = '<img class="comentario-avatar" src="' + profileImg + '"><span class="comentario-autor">' + nomeQueQueroSerChamado + '</span><p class="comentario-texto">' + textoComentario + '</p>';
  comentarios.appendChild(comentario);
}
  
  function adicionarComentario(textoComentario) {
    var comentario = document.createElement('li');
    comentario.classList.add('comentario');
    comentario.innerHTML = `<img class="comentario-avatar" src="${profileImg}"><span class="comentario-autor">Sophia</span><p class="comentario-texto">${textoComentario}</p>`;
    document.getElementById('comentarios').appendChild(comentario);
}


function curtir(e) {
  var curtido = e.target.classList.contains('fa-thumbs-up');
  if (curtido) {
    e.target.classList.remove('fa-thumbs-up');
    e.target.classList.add('fa-thumbs-o-up');
  } else {
    e.target.classList.remove('fa-thumbs-o-up');
    e.target.classList.add('fa-thumbs-up');
  }
}