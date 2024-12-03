import {
  Backdrop,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { Commet } from "react-loading-indicators";
import { IInfo, IListaEESSPrecio } from "./Interfaces/InfoGas";
import InfiniteScroll from "react-infinite-scroll-component";
import Modal from "./Modal";

const useStyles = makeStyles({
  blogContainer: {
    paddingTop: "1rem",
    minHeight: 400,
  },
  blogTitle: {
    fontWeight: 800,
    paddingBotton: "1rem",
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
});

const baseURL =
  "https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/";

function Blog() {
  const classes = useStyles();
  const [info, setInfo] = useState<IInfo>();
  const [loading, setLoading] = useState(false);
  const [itemsPerPage] = useState(50);
  const [open, setOpen] = useState(false);
  const [itemGas, setItemGas] = useState();

  const [characters, setCharacters] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  function handleDataFromChild(data: boolean) {
    setOpen(data);
  }

  const filtrado = (item: any) => {
    setOpen(true);
    setItemGas(item);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    if (info && page == totalPages + 1) {
      setHasMore(false);
      return;
    }

    let data: IInfo | undefined = info;
    let currentItems: number = 0;
    let newItems: number = itemsPerPage;
    let pages: number = 1;
    setLoading(true);

    if (!info) {
      const response = await axios.get(baseURL);
      data = response.data;
      pages = data?.ListaEESSPrecio.length / itemsPerPage;
      setInfo(data);
    }

    if (page > 1) {
      currentItems = page * itemsPerPage;
      newItems = currentItems + itemsPerPage;
    }

    setCharacters((prevPosts: []) => [
      ...prevPosts,
      ...data?.ListaEESSPrecio.slice(currentItems, newItems),
    ]);

    setPage((prevPage) => prevPage + 1);
    setTotalPages(pages);

    setLoading(false);
  };

  return (
    <Container maxWidth="lg" className={classes.blogContainer}>
      <Typography variant="h4" className={classes.blogTitle}>
        Estaciones Terrestres
      </Typography>
      <Typography variant="h5" className={classes.blogTitle}>
        Fecha de consulta: {info?.Fecha}
      </Typography>
      {open && (
        <Modal
          isOpen={open}
          itemGas={itemGas}
          sendDataToParent={handleDataFromChild}
        />
      )}

      <InfiniteScroll
        dataLength={characters.length}
        next={fetchInfo}
        hasMore={hasMore}
        loader={
          <Backdrop
            sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
            open={loading}
          >
            <Commet color="#32CD32" size="large" text="Cargando" textColor="" />
          </Backdrop>
        }
        endMessage={
          <p>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Grid2 container spacing={3}>
          {characters &&
            characters.map((item: IListaEESSPrecio, key: number) => {
              return (
                <Grid2 key={key} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          C.P: {item["C.P."]}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          Dirección: {item.Dirección}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          Horario: {item.Horario}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          Localidad: {item.Localidad}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          Municipio: {item.Municipio}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          Provincia: {item.Provincia}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" onClick={() => filtrado(item)}>
                        Leer más
                      </Button>
                    </CardActions>
                  </Card>
                </Grid2>
              );
            })}
        </Grid2>
      </InfiniteScroll>
      {/* )} */}
    </Container>
  );
}
export default Blog;
