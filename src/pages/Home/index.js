import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./home.css";
import "./like.png";
import { Grid2, Pagination } from "@mui/material";
import Skeleton from "../../components/CustomSkeleton/CustomSkeleton";
import usePagination from "@mui/material/usePagination";

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Exemplo de total de páginas

  const { items } = usePagination({
    count: totalPages,
    page: currentPage,
    onChange: (event, page) => setCurrentPage(page),
  });

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "06d5f500bf4ae4d74d0ebdea8d156b5f",
          language: "pt-br",
          page: currentPage,
        },
      });
      setFilmes(response.data.results.slice(0, 50));
      setLoading(false);
    }
    loadFilmes();
  }, [currentPage]);
       
  //   if (loading) {
  //     return (
  //       <div className="loading">
  //         <h2>Carregando filmes...</h2>
  //       </div>
  //     );
  //   }

  return (
    <div className="container">
      <Grid2 container className="catalogo">
        {filmes.map((item) => {
          return (
            <Skeleton loading={loading}>
              <div className="articleCont">
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  alt={item.title}
                  className="fundo"
                />
                <article key={item.id}>
                  <div className="fotoBotao">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                      alt={item.title}
                      className="capa"
                    />
                    <Link to={`/filme/${item.id}`} className="botao">
                      Acessar
                    </Link>
                  </div>

                  <div className="dadosFilme">
                    <div className="campoTitulo">
                      <strong className="titulo" href={`/filme/${item.id}`}>
                        {item.title}
                      </strong>
                      <strong className="nota">
                        {item.vote_average.toFixed(1)}
                      </strong>
                    </div>
                    <p className="sinopse">{item.overview}</p>
                  </div>
                </article>
              </div>
            </Skeleton>
          );
        })}
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event, page) => setCurrentPage(page)}
          style={{ display: "flex", alignContent: "center" }}
          variant="outlined"
          color="primary"
        />
      </Grid2>
    </div>
  );
}

export default Home;