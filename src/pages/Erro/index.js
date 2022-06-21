import { Link } from "react-router-dom";
import './erro.css'

function Erro(){
    return(
        <div className="notFound">
            <h1>404</h1>
            <h2>Ops! Parece que essa página não existe...</h2>
            <Link to="/">Ver filmes em cartaz</Link>
        </div>
    )
}

export default Erro;