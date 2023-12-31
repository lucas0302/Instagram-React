import { useState } from "react";
function Posts() {
  const post = [
    {
      id: 1,
      userName: "meowed",
      userImagem: "assets/img/meowed.svg",
      contentImage: "assets/img/gato-telefone.svg",
      likedByImage: "assets/img/respondeai.svg",
      likedByText: "responasadeai",
      initialLikesAmount: "101502"
    },
    {
      id: 2,
      userName: "barked",
      userImagem: "assets/img/barked.svg",
      contentImage: "assets/img/dog.svg",
      likedByImage: "assets/img/adorable_animals.svg",
      likedByText: "adorable_animals",
      initialLikesAmount: "7033"
    }
  ]

  return (
    <div className="posts">

      {post.map((p) => (

        <Post key={p.id} userName={p.userName} userImagem={p.userImagem}
          contentImage={p.contentImage} likedByImage={p.likedByImage}
          likedByText={p.likedByText} initialLikesAmount={p.initialLikesAmount}>
        </Post>

      ))}

    </div>
  );
}

function Post(props) {
  const [salvo, setSalvo] = useState(false);
  const [salvoHeart, setSalvoHeart] = useState(false);
  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.userImagem} alt={props.userName} />
          {props.userName}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={props.contentImage} alt="gato-conteudo do post" />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon onClick={()=>setSalvoHeart(!salvoHeart)} name={salvoHeart ? "heart" : "heart-outline"}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon onClick={() => setSalvo(!salvo)} name={salvo ? "bookmark" : "bookmark-outline"}></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.likedByImage} alt={props.likedByText} />
          <div className="texto">
            Curtido por <strong>{props.likedByText}</strong> e <strong>outras {props.initialLikesAmount} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Posts;