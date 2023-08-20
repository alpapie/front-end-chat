import React, { useEffect, useState } from 'react';

export default function Header({setpopsign}) {
   
    return (
        <>
            <header class="header-area header-two">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="header-top-two">
                                <div class="social-area">
                                    {/* <ul>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-behance"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-discord"></i></a>
                                        </li>
                                    </ul> */}
                                </div>
                                <div class="right-area">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/profile.php?id=100095327058255&sk=about"><i class="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-behance"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-discord"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="header-main-two header--sticky">
                                <a href="index.html">
                                    <img src="assets/images/logo/03.svg" alt="logo" />
                                </a>
                                <div class="nav-area-main d-xl-block d-lg-block d-md-none d-sm-none d-none">
                                </div>

                                <div class="button-area">
                                    <a href="log-in.html">Se connecter</a>
                                    <a href="about.html" class="rts-btn btn-primary">Démarrer</a>
                                </div>
                                <div class="menu-btn d-xl-none d-lg-none d-md-block d-sm-block" id="menu-btn" onClick={()=>{
                                    setpopsign(true)
                                }}>
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="14" width="20" height="2" fill="#1F1F25"></rect>
                                        <rect y="7" width="20" height="2" fill="#1F1F25"></rect>
                                        <rect width="20" height="2" fill="#1F1F25"></rect>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}