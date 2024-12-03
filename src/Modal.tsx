import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Modal = ({ isOpen, itemGas, sendDataToParent }: any): JSX.Element => {
  const [open, setOpen] = React.useState(isOpen);

  const handleClose = () => {
    setOpen(false);
    sendDataToParent(false);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          C.P: {itemGas["C.P."]}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography>
            <b>Direccion:</b> {itemGas.Dirección}
          </Typography>
          <Typography>
            <b>Horario:</b> {itemGas.Horario}
          </Typography>
          <Typography>
            <b>Latitud:</b> {itemGas.Latitud}
          </Typography>
          <Typography>
            <b>Localidad:</b> {itemGas.Localidad}
          </Typography>
          <Typography>
            <b>Longitud:</b> {itemGas.Longitud}
          </Typography>
          <Typography>
            <b>Precio Biodiesel:</b> {itemGas["Precio Biodiesel"]}
          </Typography>
          <Typography>
            <b>Precio Bioetanol:</b> {itemGas["Precio Bioetanol"]}
          </Typography>
          <Typography>
            <b>Precio Gas Natural Comprimido:</b>{" "}
            {itemGas["Precio Gas Natural Comprimido"]}
          </Typography>
          <Typography>
            <b>Precio Gas Natural Licuado:</b>{" "}
            {itemGas["Precio Gas Natural Licuado"]}
          </Typography>
          <Typography>
            <b>Precio Gases licuados del petróleo:</b>{" "}
            {itemGas["Precio Gases licuados del petróleo"]}
          </Typography>
          <Typography>
            <b>Precio Gasoleo A:</b> {itemGas["Precio Gasoleo A"]}
          </Typography>
          <Typography>
            <b>Precio Gasoleo B:</b> {itemGas["Precio Gasoleo B"]}
          </Typography>
          <Typography>
            <b>Precio Gasoleo Premium:</b> {itemGas["Precio Gasoleo Premium"]}
          </Typography>
          <Typography>
            <b>Precio Gasolina 95 E10:</b> {itemGas["Precio Gasolina 95 E10"]}
          </Typography>
          <Typography>
            <b>Precio Gasolina 95 E5:</b> {itemGas["Precio Gasolina 95 E5"]}
          </Typography>
          <Typography>
            <b>Precio Gasolina 95 E5 Premium:</b>{" "}
            {itemGas["Precio Gasolina 95 E5 Premium"]}
          </Typography>
          <Typography>
            <b>Precio Gasolina 98 E10:</b> {itemGas["Precio Gasolina 98 E10"]}
          </Typography>
          <Typography>
            <b>Precio Gasolina 98 E5:</b> {itemGas["Precio Gasolina 98 E5"]}
          </Typography>
          <Typography>
            <b>Precio Hidrogeno:</b> {itemGas["Precio Hidrogeno"]}
          </Typography>
          <Typography>
            <b>Provincia:</b> {itemGas.Provincia}
          </Typography>
          <Typography>
            <b>Remisión:</b> {itemGas.Remisión}
          </Typography>
          <Typography>
            <b>Rótulo:</b> {itemGas.Rótulo}
          </Typography>
          <Typography>
            <b>Tipo Venta:</b> {itemGas["Tipo Venta"]}
          </Typography>
          <Typography>
            <b>% BioEtanol:</b> {itemGas["% BioEtanol"]}
          </Typography>
          <Typography>
            <b>% Éster metílico:</b> {itemGas["% Éster metílico"]}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cerrar
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default Modal;
