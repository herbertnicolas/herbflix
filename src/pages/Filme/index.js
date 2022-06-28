import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './filme.css';
import './logo-jsj.png' 

function Filme(){
    const { id } = useParams();

    const [ loading, setLoading ] = useState(true);
    const [ filme, setFilmes ] = useState({});

    function salvaFilme(){
        const arrFilmes = localStorage.getItem("@filmeLista");    //o armazenamento local
        let filmesSalvos = JSON.parse(arrFilmes) || []; //se ja existir uma lista, adicionar nela, caso contrário criar uma
        const hasFilme = filmesSalvos.some( (filmesSalvos) => filmesSalvos.id === filme.id); //comparando pra saer se já existe o filme em questao
        
        if(hasFilme){
            alert("Este filme já se encontra na sua lista!");
            return;
        }
        filmesSalvos.push(filme);
        localStorage.setItem("@filmeLista", JSON.stringify(filmesSalvos)) //inserindo no armazenamento local
        alert("Filme salvo com sucesso!");
    }

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

    let notaa = `${filme.vote_average}`;
    let rounded = parseFloat(notaa,10).toFixed(1);

    return(
        <div className='detalhes'>
            <h1 className='titulo'>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
            <h3 className='texto'>{filme.overview}</h3>
            <h3 className='nota'>Avaliação dos usuarios: <span className="note">{rounded}</span></h3>
            <div className='areaBtns'>
                <button onClick={salvaFilme}>Salvar</button>    
                <button>
                    <a target="blank" rel ="external" href={`https://youtube.com/results?search_query=${filme.title}+_trailer`}>
                        Trailer
                    </a>
                </button>    
            </div>             
        </div>
    )
}

export default Filme;