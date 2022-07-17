import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { AiOutlineMail } from 'react-icons/ai';
import google from '../../Assets/Images/Rectangle 38.png'
const Contact = () => {
    return (
        <div>
            <h1 className='text-center mt-2'>Contact Us</h1>
            <img className='w-100 mt-2' src={google} alt="" />

            <div className='d-flex justify-content-between me-5 ms-5 row gx-5 mt-5'>
                <div className='w-50'>
                    <h3>Contact Information</h3>
                    <p>Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>

                    <div>
                        <div>
                            <h1>The Office</h1>
                            <div className='d-flex align-items-center'>
                                <p> <GoLocation></GoLocation></p>
                                <p className='ms-2'>70 Washington Square South New York, NY 10012, United States</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <p> <BsTelephone></BsTelephone></p>
                                <p className='ms-2'>+92 423 567</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <p> <AiOutlineMail></AiOutlineMail></p>
                                <p className='ms-2'>info@Molla.com</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='w-50'>

                    <h3>Got Any Questions?</h3>
                    <h6>Use the form below to get in touch with the sales team</h6>
                    <form action="">
                        <div class="mb-3">

                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Message' rows="3"></textarea>
                        </div>
                        <button type="button" class="btn btn-outline-success">Submit</button>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Contact;