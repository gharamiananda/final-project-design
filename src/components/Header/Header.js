import React from 'react';
import { BsEnvelopeOpen } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';
import './Header.css'


const Header = () => {
    return (
        <header className=" bg-primary">

            <div className="container bg-primary">
                <div className="header__top">


                </div>
            </div>
            <div className="header__bottom">



                <div class="navbar bg-base-100  bg-green-500">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Home</a></li>

                                <li><a>About Us</a></li>
                                <li><a>Our Services</a></li>
                                <li><a>Contact Us</a></li>
                                <button class="btn btn-active btn-primary ">Get Appointment</button>

                            </ul>
                        </div>
                        <a class="btn btn-ghost normal-case text-xl">daisyUI</a>


                        <div class="get-support clearfix get-support-color-white text-white">
                            <div class="get-support-icon">
                                <FiPhoneCall className='text-primary' />

                            </div>
                            <div class="get-support-info">
                                <h6>Get Support</h6>
                                <h4><a href="tel:+123456789">123-456-789-10</a></h4>
                            </div>
                        </div>

                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            <li><a>Home</a></li>

                            <li><a>About Us</a></li>
                            <li><a>Our Services</a></li>
                            <li><a>Contact Us</a></li>



                        </ul>
                    </div>
                    <div class="navbar-end">
                        <button class="btn btn-active btn-primary hidden sm:flex">Get Appointment</button>

                        <div class="dropdown dropdown-end white__box">
                            <label tabindex="0" class="btn btn-ghost btn-circle">
                                <div class="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span class="badge badge-sm indicator-item">8</span>
                                </div>
                            </label>
                            <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div class="card-body">
                                    <span class="font-bold text-lg">8 Items</span>
                                    <span class="text-info">Subtotal: $999</span>
                                    <div class="card-actions">
                                        <button class="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="dropdown dropdown-end white__box">
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
                                    <img src="https://api.lorem.space/image/face?hash=33791" />
                                </div>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a class="justify-between">
                                        Profile
                                        <span class="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>

                        </div>
                        <div class="dropdown dropdown-end white__box">
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">

                                <button class="btn btn-ghost btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <div class="form-control">
                                    <input type="text" placeholder="Search" class="input input-bordered" />
                                </div>
                            </ul>

                        </div>


                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;