import React, { useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Product from './components/Product';

function App() {
    useEffect(() => {
        // console.log(localStorage.getItem('products'));
        // localStorage.setItem(
        //     'products',
        //     localStorage.getItem('products') || []
        // );
    }, []);
    return (
        <div className="App">
            <Header />
            <hr />
            <Navigation />
            <hr />
            <Product />
        </div>
    );
}

export default App;
