import React, { useState, useContext } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/styles/ProductCard.css";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    handleClose();
  };

  return (
    <>
      <Card className="product-card" onClick={handleClickOpen}>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
      </Card>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{product.name}</DialogTitle>
        <DialogContent>
          <Carousel>
            {product.images.map((img, index) => (
              <div key={index}>
                <img src={img} alt={product.name} />
              </div>
            ))}
          </Carousel>
          <Typography variant="body1" style={{ marginTop: 16 }}>
            {product.fullDescription}
          </Typography>
          <div className="quantity-selector">
            <IconButton onClick={decreaseQuantity}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="body1" style={{ margin: "0 16px" }}>
              {quantity}
            </Typography>
            <IconButton onClick={increaseQuantity}>
              <AddIcon />
            </IconButton>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleAddToCart} color="primary">
            Agregar al carrito
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProductCard;
