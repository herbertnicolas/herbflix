import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './filme.css';
import './logo-jsj.png' 

function Filme(){
    const { id } = useParams();

    const [ loading, setLoading ] = useState(true);
    const [ filme, setFilmes ] = useState({});

    useEffect(() => {
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: "06d5f500bf4ae4d74d0ebdea8d156b5f",
                    language: "pt-BR"
                }
            }).then((response) => {
                setFilmes(response.data);
                setLoading(false);
            }).catch(() => {
                console.log("FILME NAO ENCONTRADO")
            })
        }
        loadFilme();
    }, [])

    if(loading){
        return(
            <div className='detalhes'>
                <h1>Carregando a página de detalhes do filme...</h1>
            </div>
        )
    }

    return(
        <div className='detalhes'>
            <h1 className='titulo'>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
            <h3 className='texto'>{filme.overview}</h3>
            <h3>Nota</h3>
            <h3 className='nota'>{filme.vote_average}</h3>
            <img src='./logo-jsjs.png' alt='imagemaleatoria'/>
        </div>
    )
}

export default Filme;