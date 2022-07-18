import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}>



            <div className="hero min-h-screen">
                <div className="hero-content flex-col">

                    <div className="text-center lg:text-left">
                        <h4 className=' text-xl text-primary font-bold flex justify-center'>Contact Us</h4>
                        <h2 className='text-3xl flex justify-center text-white'>Stay Connected With Us</h2>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <PrimaryButton>Sumbit</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section >

    );
};

export default ContactUs;



