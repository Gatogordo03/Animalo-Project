import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import {
  Typography,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "../assets/styles/Cart.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    clearCart(); // Resetear el carrito al cerrar el diálogo de confirmación
  };

  const total = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <Typography variant="h4" gutterBottom>
        Carrito de Compras
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">El carrito está vacío.</Typography>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <Typography variant="body1" className="cart-item-name">
              {item.product.name}
            </Typography>
            <Typography variant="body1" className="cart-item-quantity">
              Cantidad: {item.quantity}
            </Typography>
            <Typography variant="body1" className="cart-item-price">
              ${(item.product.price * item.quantity).toFixed(2)}
            </Typography>
            <IconButton
              onClick={() => removeFromCart(item.product.name)}
              color="secondary"
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <>
          <Typography variant="h6" style={{ marginTop: "16px" }}>
            Total: ${total.toFixed(2)}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "16px" }}
            onClick={handleClickOpen}
          >
            Pagar
          </Button>
        </>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirmación</DialogTitle>
        <DialogContent>
          <Typography>La compra se ha realizado con éxito.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Cart;
