import { useState } from "react";
function Usuario(props) {
  const[nomeUsuario, setNomeUsuario] = useState(props.nome);
  const[imagePerfil, setImagePerfil] = useState(props.image);

  function trocarNome (){
    const novoNome = prompt("Digite seu novo nome: ");
    if (novoNome !== null && novoNome !== undefined && novoNome !== ""){
    setNomeUsuario(novoNome);
    }
  }

  function trocarImagem () {
    const novoFoto = prompt("Digite o link da sua imagem nova: ");
    if (novoFoto !== null && novoFoto !== undefined && novoFoto !== ""){
      setImagePerfil(novoFoto);
    }
  }
    return(
        <div className="usuario">
          <img onClick={trocarImagem} src={imagePerfil} alt="Imagem de perfil"/>
          <div className="texto">
            <span>
              <strong>{nomeUsuario}</strong>
              <ion-icon onClick={trocarNome} name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    );
}
export default Usuario;