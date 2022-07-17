import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { id, title, image, price, category, rating, } = product

    const navigate = useNavigate()
    const productDetail = id => {
        navigate(`/singleproduct/${id}`)
    }
    return (
        <div className=''>
            <div className="card card-details shadow-sm">
                <img src={image} className="card-details-img mx-auto p-3" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="fs-4"><span className='text-success'>Price</span>: ${price}</h6>
                    <h6 className="fs-4"><span className='text-success'>category</span>: {category}</h6>
                    <div className='d-flex justify-content-between pe-4 mt-2'>
                        <h6> Rate: {rating.rate}</h6>
                        <h6> Count: {rating.count}</h6>
                    </div>
                    <button onClick={() => productDetail(product.id)} className="btn-cart">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;