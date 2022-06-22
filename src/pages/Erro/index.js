import { Link } from "react-router-dom";
import './erro.css'

function Erro(){
    return(
        <div className="notFound">
            <h1>Bem vindo!</h1>
            <h2>Clique no botão abaixo e descubra o melhor do cinema!</h2>
            <Link to="/">Ver filmes em cartaz</Link>
        </div>
    )
}

export default Erro;