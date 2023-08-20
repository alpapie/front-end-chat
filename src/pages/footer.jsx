import React, { useState } from 'react'

export default function Footer() {

    return (
        <>
            <div class="rts-footer-area footer-two footer-mid bg-footer">
                <div class="container  ptb--100">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="footer-one-main-wrapper">
                                <div class="footer-singl-wized left-logo">
                                    <div class="head">
                                        <a href="#">
                                            <img src="assets/images/logo/02.svg" alt="logo" />
                                        </a>
                                    </div>
                                    <div class="body">
                                        <p class="dsic mb--25">
                                           Gopdfai est une intelligence artificielle qui permet de discuter avec n'importe quel fichier PDF et d'en apprendre plus sur le fichier en un rien de temps.
                                        </p>
                                        <div class="social-area-one">
                                            <ul>
                                                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fa-brands fa-behance"></i></a></li>
                                                <li><a href="#"><i class="fa-brands fa-discord"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="footer-singl-wized">
                                    <div class="head">
                                        <h6 class="title">Company</h6>
                                    </div>
                                    <div class="body">
                                        <ul class="menu">
                                            <li><a href="#">A propos</a></li>
                                            <li><a href="#">Communauté</a></li>
                                            <li><a href="#">Carrières</a></li>
                                            <li><a href="#">Programme d'affiliation</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <div class="footer-singl-wized">
                                    <div class="head">
                                        <h6 class="title">Use Cases</h6>
                                    </div>
                                    <div class="body">
                                        <ul class="menu">
                                            <li><a href="#">For Teams</a></li>
                                            <li><a href="#">For Email Marketers</a></li>
                                            <li><a href="#">For Blog Writers</a></li>
                                            <li><a href="#">For social managers</a></li>
                                        </ul>
                                    </div>
                                </div> */}

                                <div class="footer-singl-wized input-area">
                                    <div class="head">
                                        <h6 class="title">Coordonnées de contact</h6>
                                    </div>
                                    <div class="body">
                                        <p class="disc">
                                        KOUZOU CONSULTING 
                                    C/O excellentia Groupe 
                                    Route de Meyrin 49
                                        <br />1203 Genève, Suisse 
                                        </p>
                                        <a href="#" class="f-link">
                                            <h6 class="link">Support@gopdfai.com</h6>
                                        </a>
                                        {/* <a href="#" class="number">+2858 62359 32159</a> */}
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="copy-right-two">
                                <p><a href="https://gando-tech.vercel.app/">Gandotech</a> 2023. Tous droits réservés.</p>
                                <div class="menu">
                                    <ul>
                                        {/* <li><a href="#">Tearms</a></li> */}
                                        <li><a href="#">Politique de confidentialité</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
