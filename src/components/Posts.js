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
      initialLikesAmount: "1002"
    },
    {
      id: 2,
      userName: "barked",
      userImagem: "assets/img/barked.svg",
      contentImage: "assets/img/dog.svg",
      likedByImage: "assets/img/adorable_animals.svg",
      likedByText: "adorable_animals",
      initialLikesAmount: "1024"
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
  const [curtido, setCurtido] = useState(false);
  const [numeroCurtidas, setNumeroCurtidas] = useState(props.initialLikesAmount);
  const [animation, setAnimation] = useState(false);

  function curtir() {
    if (curtido) {
      setNumeroCurtidas(numeroCurtidas - 1);
    } else {
      setNumeroCurtidas(numeroCurtidas + 1);
    }
    setCurtido(!curtido);
  }

  function curtirPelaImagem() {
    if (!curtido) {
      setNumeroCurtidas(numeroCurtidas + 1);
      setCurtido(true);
    }

    const animationTiming = 500;
    setAnimation(true);

    setTimeout(() => {
      setAnimation(false);
    }, animationTiming);
  }

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
        <ion-icon name="heart" class={`animated-heart ${animation ? "scale-up" : "invisible"}`} />
        <img onDoubleClick={curtirPelaImagem} src={props.contentImage} alt="gato-conteudo do post" />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon onClick={curtir} class={curtido ? "vermelho" : ""} name={curtido ? "heart" : "heart-outline"} />
            <ion-icon name="chatbubble-outline" />
            <ion-icon name="paper-plane-outline" />
          </div>
          <div>
            <ion-icon onClick={() => setSalvo(!salvo)} name={salvo ? "bookmark" : "bookmark-outline"}></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.likedByImage} alt={props.likedByText} />
          <div className="texto">
            Curtido por <strong>{props.likedByText}</strong> e <strong>outras {numeroCurtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Posts;