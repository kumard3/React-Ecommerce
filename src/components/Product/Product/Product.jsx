import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import useStyles from './styles'
import { AddShoppingCart } from "@material-ui/icons";
// import classes from "*.module.css";


const Product = ({ product,onAddToCart }) => {

  const classes = useStyles();
  const onclick = () => onAddToCart(product.id, 1);
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      <CardContent>
        <div className={classes.CardContent}>
          <Typography varient="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardAction}>
        <IconButton aria-label="Add to card" onClick={onclick}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
