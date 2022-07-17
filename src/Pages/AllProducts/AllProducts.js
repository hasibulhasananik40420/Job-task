import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const AllProducts = () => {
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
            <div class="allcard mt-5">

                {
                    products?.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }

            </div>
        </div>
    );
};

export default AllProducts;