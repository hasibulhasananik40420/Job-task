import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Products.css'
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })
    }, [])
    return (
        <div>
            <h3 className='heading'>Products</h3>
            <Link to='/products' className='container d-flex justify-content-end me-5 fs-5 text-danger mb-3'>see more <BsArrowRightShort className='mt-2'></BsArrowRightShort></Link>

            <div class="allcard">

                {
                    products.slice(0, 6)?.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }

            </div>
        </div>
    );
};

export default Products;