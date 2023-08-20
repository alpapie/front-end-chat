import React,{useEffect} from "react";
import ChatHeader from "./Header";
import ChatContent from './Content'
import SideBar from "./Sidebar";
import {Helmet} from "react-helmet";

export default function ChatIndex() {
    useEffect(() => {
        if (!localStorage.getItem('frenify_skin')) {
          localStorage.setItem('frenify_skin', 'dark');
        }
    
        if (!localStorage.getItem('frenify_panel')) {
          localStorage.setItem('frenify_panel', '');
        }
    
        document.documentElement.setAttribute(
          'data-techwave-skin',
          localStorage.getItem('frenify_skin')
        );
    
        if (localStorage.getItem('frenify_panel') !== '') {
          document.documentElement.classList.add(
            localStorage.getItem('frenify_panel')
          );
        }
      }, []);
    return (
        <>
            <html lang="en">

                <head>

                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="description" content="TechWave" />
                    <meta name="author" content="Frenify" />

                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

                    <title>Gopdf</title>

                    <link rel="preconnect" href={'https://fonts.googleapis.com'} />
                    <link rel="preconnect" href={'https://fonts.gstatic.com" crossorigin'}/>
                    <link href={'https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'} rel="stylesheet" />

                    <link type="text/css" rel="stylesheet" href={'chatAssets/css/plugins.css'} />
                    <link type="text/css" rel="stylesheet" href={'chatAssets/css/style.css'} />
                    <script type="text/javascript" src={'/chatAssets/js/modernizr.custom.js'}></script>

                    </head>
                      <div class="techwave_fn_wrapper fn__has_sidebar">
                        <div class="techwave_fn_wrap">
                          <div class="techwave_fn_searchbar">
                            <div class="search__bar">
                              <input class="search__input" type="text" placeholder="Search here..."/>
                              <img src="chatAssets/svg/search.svg" alt="" class="fn__svg search__icon"/>
                              <a class="search__closer" href="#"><img src="chatAssets/svg/close.svg" alt="" class="fn__svg"/></a>
                            </div>
                            <div class="search__results">
                              <div class="results__title">Results</div>
                              <div class="results__list">
                                <ul>
                                  <li><a href="#">Artificial Intelligence</a></li>
                                  <li><a href="#">Learn about the impact of AI on the financial industry</a></li>
                                  <li><a href="#">Delve into the realm of AI-driven manufacturing</a></li>
                                  <li><a href="#">Understand the ethical implications surrounding AI</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <ChatHeader/>
                          <SideBar/>
                          <ChatContent/>
                          
                        </div>
                    </div>
                <body>
                  <Helmet>
                    <script type="text/javascript" src={'/chatAssets/js/jquery.js'}></script>
                    <script type="text/javascript" src={'/chatAssets/js/plugins.js'}></script>
                    <script type="text/javascript" src={'/chatAssets/js/ie8.js'}></script> 
                    <script type="text/javascript" src={'/chatAssets/js/init.js'}></script>
                  </Helmet>

                </body>
            </html>
        </>
    )
}