import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

function Filme(){
    const { id } = useParams();

    const [ loading, setLoading ] = useState(true);
    const [ filme, setFilme ] = useState({});

    useEffect(() => {
        async function loadFilme(){
            await api.get(`/movie/${ id }`, {
                params:{
                    api_key: "06d5f500bf4ae4d74d0ebdea8d156b5f",
                    language: "pt-BR"
                }    
            }).then((response) => {
                setFilme(response.data);
                setLoading(false);
            }).catch(() => {
                console.log("FILME NÃO ENCONTRADO!")
            })

        }
        loadFilme();
    }, [])
    
    if(loading){
        return(
            <div className='detalhes'>
               <h1>Carregando detalhes do filme...</h1>
            </div>
        )
    }

    return(
        <div className='detalhes'>
            <h1 className='titulo'>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
            <h3 className='sinopse'>{filme.overview}</h3>
        </div>
    )
}

export default Filme;