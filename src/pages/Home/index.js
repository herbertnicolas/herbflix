import { useEffect, useState } from "react";
import api from "../../services/api";

function Home(){
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "06d5f500bf4ae4d74d0ebdea8d156b5f",
                    language: "pt-br",
                    page: 1,
                }
            })
            console.log(response);
        }
        loadFilmes();
    },[])
    return(
        <div>
            <h1>Bem vindo a Home!</h1>
        </div>
    )
}

export default Home;