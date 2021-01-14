import React, { useState } from 'react';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import toast from 'toasted-notes';
import 'toasted-notes/src/styles.css';

import '../styles/productDetails.css';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function ProductDetails() {
    const classes = useStyles();

    const [product, setProduct] = useState({
        title: 'FLANNEL CHECK OVERSHIRT',
        price: '499.00',
        image:
            'https://static.zara.net/photos///2021/V/0/2/p/0387/401/400/2/w/810/0387401400_2_3_1.jpg?ts=1605867999683',
        availability: 'In stock',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        code: '3792',
    });
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [qty, setQty] = useState('');
    const [disabled, setDisabled] = useState(true);

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };

    const handleQtyChange = (event) => {
        setQty(event.target.value);
    };

    const clearSelection = () => {
        setColor('');
        setSize('');
        setQty('');
    };

    const handleAddToCart = () => {
        let flag = color === '' && size === '' && qty === '';
        console.log(flag);
        if (flag) {
            toast.notify(
                'Please provide all the values to add the product to cart',
                {
                    duration: null,
                }
            );
        } else {
            let productsInCart = JSON.parse(localStorage.getItem('products'));
            console.log(productsInCart);
            productsInCart.push({
                ...product,
                color,
                size,
                qty,
                id: productsInCart.length + 1,
            });
            console.log(productsInCart);

            localStorage.setItem('products', JSON.stringify(productsInCart));
            toast.notify('Product added to cart successfully', {
                duration: 2000,
                position: 'top-right',
            });
        }
    };

    const handleWishlist = () => {
        toast.notify('Wishlist is in progress', {
            duration: 2000,
        });
    };

    return (
        <div className="product">
            <span>
                <ChevronLeftIcon /> Back to &nbsp;<a href="">Man</a>
            </span>
            <div className="product__details">
                <h2>{product.title}</h2>
                <p>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                    <span>
                        2 Review(s) | <a href="">ADD A REVIEW</a>
                    </span>
                </p>
                <h3>${product.price}</h3>
                <p>
                    <b>Availabilty: </b>&nbsp; {product.availability}
                </p>
                <p>
                    <b>Product code: </b>&nbsp; {product.code}
                </p>
                <p>
                    <b>Tags: </b>&nbsp; Fashion, Classic, Overshirt
                </p>
            </div>
            <div className="product__description">
                <p>{product.description}</p>
                <p>
                    <ul>
                        <li>100% Cotton</li>
                        <li>Regular Fit</li>
                        <li>Free shipping with 4 days delivery</li>
                    </ul>
                </p>
            </div>
            <div className="product__availability">
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">
                        COLOR
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={color}
                        onChange={handleColorChange}
                        label="Color"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={`Gray`}>Gray</MenuItem>
                        <MenuItem value={`Olive Green`}>Olive Green</MenuItem>
                        <MenuItem value={`Black`}>Black</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">
                        SIZE
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={size}
                        onChange={handleSizeChange}
                        label="Size"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={`Small`}>Small</MenuItem>
                        <MenuItem value={`Medium`}>Medium</MenuItem>
                        <MenuItem value={`Large`}>Large</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">
                        QTY
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={qty}
                        onChange={handleQtyChange}
                        label="Qty"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <span className="clear" onClick={clearSelection}>
                Clear selection
            </span>
            <div className="product__buttons">
                <Button onClick={handleAddToCart}>ADD TO CART</Button>
                <Button variant="outlined" onClick={handleWishlist}>
                    WISHLIST
                </Button>
            </div>
            <div className="social_network"></div>
        </div>
    );
}

export default ProductDetails;
