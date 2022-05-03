import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import './home.css';

function Home(){
    const [filmes, setFilmes] = useState([]);

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
        }
        loadFilmes();
    },[])
    return(
        <div className="container">
            <div className="catalogo">
                {filmes.map((f)=>{
                    return(
                        <article key={f.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${f.poster_path}`} alt={f.title} className="capa"/>
                            <div className="dadosFilme">
                                <div className="campoTitulo">
                                    <strong className="titulo">{f.title}</strong>
                                    <strong className="nota">{f.vote_average}</strong>
                                </div>
                                <p className="sinopse">{f.overview}</p>
                                <Link to={`/filme/${f.id}`} className="botao">Acessar</Link>
                            </div>
                        </article>
                )
                })}
            </div>
        </div>
    )
}

export default Home;