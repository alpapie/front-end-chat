import React, { useEffect } from "react";


export default function SideBar() {
    return (
        <>
            <div class="techwave_fn_leftpanel">

                <div class="mobile_extra_closer"></div>

                <div class="leftpanel_logo">
                    <a href="index.html" class="fn_logo">
                        <span class="full_logo">
                            <img src="chatAssets/img/logo-desktop-full.png" alt="" class="desktop_logo" />
                            <img src="chatAssets/img/logo-retina-full.png" alt="" class="retina_logo" />
                        </span>
                        <span class="short_logo">
                            <img src="chatAssets/img/logo-desktop-mini.png" alt="" class="desktop_logo"/>
                            <img src="chatAssets/img/logo-retina-mini.png" alt="" class="retina_logo"/>
                        </span>
                    </a>
                            <a href="#" class="fn__closer fn__icon_button desktop_closer">
                                <img src="chatAssets/svg/arrow.svg" alt="" class="fn__svg" />
                            </a>
                            <a href="#" class="fn__closer fn__icon_button mobile_closer">
                                <img src="chatAssets/svg/arrow.svg" alt="" class="fn__svg" />
                            </a>
                        </div>

                        <div class="leftpanel_content">

                            <div class="nav_group">
                                <h2 class="group__title">Start Here</h2>
                                <ul class="group__list">
                                    <li>
                                        <a href="index.html" class="fn__tooltip menu__item" data-position="right" title="Home">
                                            <span class="icon"><img src="chatAssets/svg/home.svg" alt="" class="fn__svg" /></span>
                                            <span class="text">Home</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="image-generation.html" class="fn__tooltip menu__item" data-position="right" title="Image Generation">
                                            <span class="icon"><img src="chatAssets/svg/image.svg" alt="" class="fn__svg" /></span>
                                            <span class="text">Image Generation</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ai-chat-bot.html" class="fn__tooltip menu__item" data-position="right" title="AI Chat Bot">
                                            <span class="icon"><img src="chatAssets/svg/chat.svg" alt="" class="fn__svg" /></span>
                                            <span class="text">AI Chat Bot</span>
                                        </a>
                                    </li>
                                    {/* <li>
                                        <a href="community-feed.html" class="fn__tooltip menu__item" data-position="right" title="Community Feed">
                                            <span class="icon"><img src="chatAssets/svg/community.svg" alt="" class="fn__svg" /></span>
                                            <span class="text">Community Feed</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="personal-feed.html" class="fn__tooltip menu__item" data-position="right" title="Personal Feed">
                                            <span class="icon"><img src="chatAssets/svg/person.svg" alt="" class="fn__svg" /></span>
                                            <span class="text">Personal Feed<span class="count">48</span></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="models.html" class="fn__tooltip menu__item" data-position="right" title="Finetuned Models">
                                            <span class="icon"><img src="chatAssets/svg/cube.svg" alt="" class="fn__svg" /></span>
                                            <span class="text">Finetuned Models</span>
                                        </a>
                                    </li> */}
                                </ul>
                            </div>

                            {/* <div class="nav_group">
                                <h2 class="group__title">User Tools</h2>
                                <ul class="group__list">
                                    <li>
                                        <a href="image-generation.html" class="fn__tooltip menu__item" data-position="right" title="Image Generation">
                                            <span class="icon"><img src="chatAssets/svg/image.svg" alt="" class="fn__svg" /></span>
                                            <span class="text">Image Generation</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ai-chat-bot.html" class="fn__tooltip menu__item" data-position="right" title="AI Chat Bot">
                                            <span class="icon"><img src="chatAssets/svg/chat.svg" alt="" class="fn__svg" /></span>
                                            <span class="text">AI Chat Bot</span>
                                        </a>
                                    </li>
                                </ul>
                            </div> */}

                            <div class="nav_group">
                                <h2 class="group__title">Support</h2>
                                <ul class="group__list">
                                    <li>
                                        <a href="pricing.html" class="fn__tooltip menu__item" data-position="right" title="Pricing">
                                            <span class="icon"><img src="chatAssets/svg/dollar.svg" alt="" class="fn__svg" /></span>
                                            <span class="text">Pricing</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="sign-in.html" class="fn__tooltip menu__item" data-position="right" title="Log Out">
                                            <span class="icon"><img src="chatAssets/svg/logout.svg" alt="" class="fn__svg" /></span>
                                            <span class="text">Log Out</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>


                        </div>

                </div>
            </>
            )
}