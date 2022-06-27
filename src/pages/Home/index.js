import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import './home.css';
import './like.png'

function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{         //assim que a page for atualizada, chama api
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", { //await esperando a requisiçao acontecer
                params:{
                    api_key: "06d5f500bf4ae4d74d0ebdea8d156b5f",
                    language: "pt-br",
                    page: 1,
                }
            })
            setFilmes(response.data.results.slice(0,10))
            setLoading(false);

        }
        loadFilmes();
    },[])
    
   
    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }
    
    return(
        
        <div className="container">
            <div className="catalogo">
                {filmes.map((f)=>{
                    return(
                        <div className="articleCont">
                            <img src={`https://image.tmdb.org/t/p/original/${f.backdrop_path}`} alt={f.title} className="fundo"/>
                            <article key={f.id}>
                                <div className="fotoBotao">
                                    <img src={`https://image.tmdb.org/t/p/original/${f.poster_path}`} alt={f.title} className="capa"/>
                                    <Link to={`/filme/${f.id}`} className="botao">Acessar</Link>
                                </div>
                                
                                <div className="dadosFilme">
                                    <div className="campoTitulo">
                                        <strong className="titulo" href={`/filme/${f.id}`}>{f.title}</strong>
                                        <strong className="nota">{f.vote_average}</strong>
                                    </div>
                                    <p className="sinopse">{f.overview}</p>
                                </div>
                            </article>
                            
                        </div>
                )})}
            </div>
        </div>
    )
}

export default Home;