function carregarDadosAPI() {
    fetch("http://localhost:5000/listar/musica")
      .then((response) => response.json())
      .then((resultado)=>{
        console.log(resultado)
          var linha = `<ol class="list-group">`;

          resultado.map((itens, ix) => {
            linha += `<li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">${itens.nomemusica}</div>
            </div>
            <span class=""><a href="musicas/${itens.musica}" download><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="" fill="currentColor" class="bi bi-arrow-bar-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"/>
          </svg></a></span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">${itens.descricao}</div>
            </div>
            <span class="badge bg-primary rounded-pill"></span>
          </li> 
            <div class="ms-2 me-auto">
              <div class="fw-bold"></div>
            </div>
            <span class="badge bg-primary rounded-pill"></span>
        </ol>`;

        document.getElementById("conteudo").innerHTML = linha;
        })
      })    
        .catch((erro)=>console.error(erro));

}
  
  