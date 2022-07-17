import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const { id } = useParams()
    const [singleproduct, setSingleProduct] = useState({})
    console.log(singleproduct);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSingleProduct(data)
            })
    }, [])
    return (
        <div className='container mt-5'>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={singleproduct.image} class="w-50 rounded-start p-3" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{singleproduct?.title}</h5>
                            <p class="card-text">{singleproduct?.description}</p>
                            <div className='d-flex justify-content-between pe-4 mt-2'>
                                <h6 class="fs-4"><span className='text-success'>Price</span>: ${singleproduct?.price}</h6>
                                <h6 class="fs-4"><span className='text-success'>category</span>: {singleproduct?.category}</h6>
                            </div>

                            <div className='d-flex justify-content-between pe-4 mt-2'>
                                <h6> Rate: {singleproduct?.rating?.rate}</h6>
                                <h6> Count: {singleproduct?.rating?.count}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Order Now
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Welcome to Porto shop</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Your order is confirm .
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;