import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://xpertlab.com/wp-content/uploads/2021/04/cover-1200x480.png')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
  },
});

function Cover() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.hero}>
        <Box textAlign="center">
          <Typography variant="h2">David J. Alonzo Monzón</Typography>
          <Typography variant="h5">
            Desarrollo de Aplicaciones en Red
          </Typography>
          <Typography variant="h5">Actividad 3 - Consumo de API</Typography>
          <Typography variant="h6">
            Universidad Internacional de la Rioja en México
          </Typography>
        </Box>
      </Box>
    </>
  );
}
export default Cover;
