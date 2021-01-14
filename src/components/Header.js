import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Modal from '@material-ui/core/Modal';

import { ReactComponent as EmptyState } from '../assets/empty_state.svg';

import '../styles/header.css';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: '60%',
        height: '320px',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        overflow: 'scroll',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    svg: {
        height: '300px',
        width: '800px',
    },
}));

function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    };
}

function Header() {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [cartProducts, setCartProducts] = useState([]);
    const [modalStyle] = React.useState(getModalStyle);

    useEffect(() => {
        let products = localStorage.getItem('products');
        if (products === '' || products === null || products === undefined) {
            localStorage.setItem('products', '[]');
        }
    }, []);

    const fetchProducts = () => {
        let products = localStorage.getItem('products');
        setCartProducts(JSON.parse(products));
        console.log(cartProducts);
    };

    const handleOpen = () => {
        setOpen(true);
        fetchProducts();
    };

    const handleClose = () => {
        setOpen(false);
    };

    const removeItem = (event) => {
        const deleteId = event.target.getAttribute('productid');
        console.log(deleteId);
        let newProductsInCart = cartProducts.filter((product) => {
            console.log(product.id);
            if (product.id !== parseInt(deleteId)) {
                console.log('Inside');
                return product;
            }
        });
        console.log(newProductsInCart);
        setCartProducts(newProductsInCart);
    };

    const cart = (
        <div className="cart" style={modalStyle} className={classes.paper}>
            {cartProducts.length === 0 ? (
                <EmptyState className={classes.svg} />
            ) : null}
            {cartProducts.map((product) => (
                <div className="cart__product">
                    <div className="cart__productImage">
                        <img src={product.image} />
                    </div>
                    <div className="cart__productDetails">
                        <h4>{product.title}</h4>
                        <p>
                            {product.qty} | {product.color} | {product.size}{' '}
                        </p>
                        <p>{product.description}</p>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={removeItem}
                            productid={product.id}
                        >
                            Remove
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
    return (
        <div className="header">
            <div className="header__location">
                <img
                    src={`https://i.pinimg.com/736x/f8/67/6a/f8676ab428f22379f16d347362cb9eaa.jpg`}
                    alt="country"
                />
                <span>USA</span>
                <span>
                    <ArrowDropDownIcon />
                </span>
            </div>
            <div className="header__text">BONFIRE</div>
            <div className="header__cart">
                <Button variant="outlined" onClick={handleOpen}>
                    Cart
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {cart}
                </Modal>
            </div>
        </div>
    );
}

export default Header;
