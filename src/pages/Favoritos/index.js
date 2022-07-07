import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Filme from "../Filme";
import './index.css'

function Favoritos(){
    const [ filme, setFilme ] =  useState([]);

    useEffect(()=>{
        const minhaLista = localStorage.getItem("@filmeLista");
        setFilme(JSON.parse(minhaLista) || []);
    },[])

    function removerFilme(id){
        let filtroFilmes = filme.filter((item) => {
            return (item.id !== id)
        })

        setFilme(filtroFilmes);
        localStorage.setItem("@filmeLista", JSON.stringify(filtroFilmes));
        //alert("clicou remover filme " + id);
    }
    
    return(
        <div className="meus-filmes">
            {filme.length === 0 && <span>Sua lista de filmes salvos está vazia!</span>}
            
            <ul>
                {filme.map((item) => {
                    return(
                        <li className="caixaFilme">
                            <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}/>
                            <div>
                                <div className="info">
                                    <h3 className="title">{item.title}</h3>
                                    <h4 className="overview">{item.overview}</h4>
                                    
                                </div> 
                                <div className="botoes">
                                        <button className="btnTrailer">
                                            <a target="blank" rel ="external" 
                                            href={`https://youtube.com/results?search_query=${item.title}+_trailer`}>
                                            Trailer
                                            </a>
                                        </button>
                                        <button className="btnRemove" onClick={() => removerFilme(item.id)}>
                                            Remover
                                        </button> 
                                    </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Favoritos;
















/*
    const minhaLista = localStorage.getItem("@filmeLista");
    const [ filmes,setFilme ] = useState([]);
    
    useEffect(() => {
        const arrFilmes = localStorage.getItem("@item");
        setFilme(JSON.parse(minhaLista) || []);
    },[])
    
    function mostraLista(){

    }
    
    return(
        <div className="meus-filmes">
            <ul>
                {filmes.map((item) => {
                    return(
                        <li>
                            {item.id}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
*/