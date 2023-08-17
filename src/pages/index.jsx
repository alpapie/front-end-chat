import React, { useEffect, useState } from 'react';
import Header from './header'
import Footer from './footer'
import Content from './content'


export default function Index() {
    const [Showmenu, setpopsign] = useState(false);    return (
        <>


                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="shortcut icon" type="image/x-icon" href={'/assets/images/fav.png'} />
                    <title>GOpdf</title>
                    <link rel="stylesheet" href={'/assets/css/plugins/fontawesome-6.css'} />
                    <link rel="stylesheet" href={'/assets/css/plugins/unicons.css'} />
                    <link rel="stylesheet" href={'/assets/css/plugins/swiper.min.css'} />
                    <link rel="stylesheet" href={'/assets/css/vendor/magnific-popup.css'} />
                    <link rel="stylesheet" href={'/assets/css/vendor/metismenu.css'} />
                    <link rel="stylesheet" href={'/assets/css/vendor/bootstrap.min.css'} />
                    <link rel="stylesheet preload" href={'/assets/css/style.css'} />
                </head>

                <body>
                    <Header setpopsign={setpopsign} />
                    <Content Showmenu={Showmenu} setpopsign={setpopsign}/>
                    <Footer />
                    <script src={'/assets/js/vendor/jquery.min.js'} defer></script>
                    <script src={'/assets/js/vendor/metismenu.js'} defer></script>
                    <script src={'/assets/js/vendor/imagesloaded.pkgd.min.js'} defer></script>
                    <script src={'/assets/js/vendor/isotope.pkgd.min.js'} defer></script>
                    <script src={'/assets/js/vendor/magnific-popup.js'} defer></script>
                    <script src={'/assets/js/plugins/bootstrap.min.js'} defer></script>
                    <script src={'/assets/js/plugins/swiper.js'} defer></script>
                    <script src={'/assets/js/plugins/contact.form.js'} defer></script>
                    <script src={'/assets/js/main.js'} defer></script>
                </body>
        </>
    )
}