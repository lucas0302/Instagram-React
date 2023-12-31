function Sugestoes() {
const suggestions = [
  
  {name:"bad.vibes.memes", image:"assets/img/bad.vibes.memes.svg", reson:"Segue você" },
  {name:"chibirdart", image:"assets/img/chibirdart.svg", reson:"Segue você" },
  {name:"razoesparaacreditar", image:"assets/img/razoesparaacreditar.svg", reson:"Novo usuario" },
  {name:"adorable_animals", image:"assets/img/adorable_animals.svg", reson:"Segue você" },
  {name:"smallcutecats", image:"assets/img/smallcutecats.svg", reson:"Segue você" }

];

    return(
        <div className="sugestoes">
          <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          {suggestions.map((s)=> <Sugestao key={s.name} name={s.name} image={s.image} reson={s.reson}></Sugestao> )}
          
          </div>


    );
}
function Sugestao(props) {

  return(
    <div className="sugestao">
            <div className="usuario">
              <img src={props.image} alt={props.nome}/>
              <div className="texto">
                <div className="nome">{props.nome}</div>
                <div className="razao">{props.reson}</div>
              </div>
            </div>

            <div className="seguir">Seguir</div>
          </div>
        
  );
}
export default Sugestoes;