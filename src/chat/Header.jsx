import React,{useEffect} from "react";

export default function ChatHeader(){
    return (
        <>
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
    
    <header class="techwave_fn_header">
    
        <div class="header__left">
            <div class="fn__token_info">
                <span class="token_summary">
                    <span class="count">120</span>
                    <span class="text">Tokens<br/>Remain</span>
                </span>
                <a href="pricing.html" class="token_upgrade techwave_fn_button"><span>Upgrade</span></a>
                <div class="token__popup">
                    Resets in <span>19 hours.</span><br/>
                    Daily limit is <span>200 tokens</span>
                </div>
            </div>
        </div>
        
        
        <div class="header__right">
            <div class="fn__nav_bar">
                
                <div class="bar__item bar__item_search">
                    <a href="#" class="item_opener">
                        <img src="chatAssets/svg/search.svg" alt="" class="fn__svg"/>
                    </a>
                    <div class="item_popup">
                        <input type="text" placeholder="Search"/>
                    </div>
                </div>
                
                <div class="bar__item bar__item_notification has_notification">
                    <a href="#" class="item_opener">
                        <img src="chatAssets/svg/bell.svg" alt="" class="fn__svg"/>
                    </a>
                    <div class="item_popup">
                        <div class="ntfc_header">
                            <h2 class="ntfc_title">Notifications</h2>
                            <a href="notifications.html">View All</a>
                        </div>
                        <div class="ntfc_list">
                            <ul>
                                <li>
                                    <p><a href="notification-single.html">Version 4.1.2 has been launched</a></p>
                                    <span>34 Min Ago</span>
                                </li>
                                <li>
                                    <p><a href="notification-single.html">Video Generation has been released</a></p>
                                    <span>12 Apr</span>
                                </li>
                                <li>
                                    <p><a href="notification-single.html">Terms has been updated</a></p>
                                    <span>12 Apr</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="bar__item bar__item_fullscreen">
                    <a href="#" class="item_opener">
                        <img src="chatAssets/svg/fullscreen.svg" alt="" class="fn__svg f_screen"/>
                        <img src="chatAssets/svg/smallscreen.svg" alt="" class="fn__svg s_screen"/>
                    </a>
                </div>
                
                <div class="bar__item bar__item_language">
                    <a href="#" class="item_opener">
                        <img src="chatAssets/svg/language.svg" alt="" class="fn__svg"/>
                    </a>
                    <div class="item_popup">
                        <ul>
                            <li>
                                <span class="active">English</span>
                            </li>
                            <li>
                                <a href="#">Spanish</a>
                            </li>
                            <li>
                                <a href="#">French</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="bar__item bar__item_skin">
                    <a href="#" class="item_opener">
                        <img src="chatAssets/svg/sun.svg" alt="" class="fn__svg light_mode"/>
                        <img src="chatAssets/svg/moon.svg" alt="" class="fn__svg dark_mode"/>
                    </a>
                    <div class="item_popup">
                        
                    </div>
                </div>
                
                <div class="bar__item bar__item_user">
                    <a href="#" class="user_opener">
                        <img src="chatAssets/img/user/user.jpg" alt=""/>
                    </a>
                    <div class="item_popup">
                        <div class="user_profile">
                            <div class="user_img">
                                <img src="chatAssets/img/user/user.jpg" alt=""/>
                            </div>
                            <div class="user_info">
                                <h2 class="user_name">Caden Smith<span>Free</span></h2>
                                <p><a href="mailto:cadmail@gmail.com" class="user_email">cadmail@gmail.com</a></p>
                            </div>
                        </div>
                        <div class="user_nav">
                            <ul>
                                <li>
                                    <a href="user-profile.html">
                                        <span class="icon"><img src="chatAssets/svg/person.svg" alt="" class="fn__svg"/></span>
                                        <span class="text">Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="user-settings.html">
                                        <span class="icon"><img src="chatAssets/svg/setting.svg" alt="" class="fn__svg"/></span>
                                        <span class="text">Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="user-billing.html">
                                        <span class="icon"><img src="chatAssets/svg/billing.svg" alt="" class="fn__svg"/></span>
                                        <span class="text">Billing</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="sign-in.html">
                                        <span class="icon"><img src="chatAssets/svg/logout.svg" alt="" class="fn__svg"/></span>
                                        <span class="text">Log Out</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
        
    </header>
        </>
    )
}