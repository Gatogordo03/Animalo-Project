import React, { useState } from "react";
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
import Slider from "react-slick";
import "../assets/styles/slick-carousel/slick.css";
import "../assets/styles/slick-carousel/slick-theme.css";
import "../assets/styles/ProductCard.css";

const ProductCard = ({ product }) => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
          <Slider {...settings}>
            {product.images.map((img, index) => (
              <div key={index}>
                <img src={img} alt={product.name} style={{ width: "100%" }} />
              </div>
            ))}
          </Slider>
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
          <Button
            onClick={() => {
              /* lógica para agregar al carrito */
            }}
            color="primary"
          >
            Agregar al carrito
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProductCard;
