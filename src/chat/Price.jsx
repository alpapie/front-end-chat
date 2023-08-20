import React, { useEffect } from "react";


export default function SideBar() {
    return (
        <>
            <div class="techwave_fn_content">
                <div class="techwave_fn_page">
                    <div class="techwave_fn_pricing_page">

                        <div class="techwave_fn_title_holder">
                            <div class="container">
                                <h1 class="title">Simple Pricing, Unbeatable Value</h1>
                                <p class="desc fn__animated_text">Start small and free, upgrade as you go. Take control of everything.</p>
                            </div>
                        </div>
                        <div class="techwave_fn_pricing">
                            <div class="container">
                                <div class="pricing__toggle">
                                    <div class="toggle_in">
                                        <a href="#tab1" class="active">Yearly</a>
                                        <a href="#tab2">Monthly</a>
                                        <span class="bg"></span>
                                    </div>
                                </div>                                                <div class="pricing__tabs">
                                    <div class="pricing__tab active" id="tab1">

                                        <div class="fn__mobile_pricing">
                                            <div class="pricing__item">
                                                <div class="pricing__item_holder">
                                                    <div class="pricing__item__header">
                                                        <h2 class="title">Personal</h2>
                                                        <h3 class="price"><span>$10</span> / month</h3>
                                                        <p class="desc">billed yearly<br /><span>$15.00</span> billed monthly</p>
                                                        <p class="purchase">
                                                            <a href="#" class="techwave_fn_button"><span>Buy Personal</span></a>
                                                        </p>
                                                    </div>
                                                    <div class="pricing__item__heading">
                                                        <h2 class="title">Main Features</h2>
                                                    </div>
                                                    <div class="pricing__item_list">
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Tokens per month</h4>
                                                            <p class="desc">5,500</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Upscales per month</h4>
                                                            <p class="desc">1,500</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Background removals</h4>
                                                            <p class="desc">4,000</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Pending jobs</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Private generations</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Priority infrastructure</h4>
                                                            <p class="desc">—</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Relaxed generation</h4>
                                                            <p class="desc">—</p>
                                                        </div>
                                                    </div>
                                                    <div class="pricing__item__heading">
                                                        <h2 class="title">Other Features</h2>
                                                    </div>
                                                    <div class="pricing__item_list">
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Essential Frenify models</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Expanded Frenify models</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Community models</h4>
                                                            <p class="desc">—</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Custom Model</h4>
                                                            <p class="desc">—</p>
                                                        </div>
                                                    </div>
                                                    <div class="pricing__item_footer">
                                                        <a href="#" class="techwave_fn_button"><span>Buy Personal</span></a>
                                                    </div>
                                                </div>
                                            </div>                                                                        <div class="pricing__item">
                                                <div class="pricing__item_holder">
                                                    <div class="popular"><span>Most Popular</span></div>
                                                    <div class="pricing__item__header">
                                                        <h2 class="title">Premium</h2>
                                                        <h3 class="price"><span>$15</span> / month</h3>
                                                        <p class="desc">billed yearly<br /><span>$20.00</span> billed monthly</p>
                                                        <p class="purchase">
                                                            <a href="#" class="techwave_fn_button"><span>Buy Premium</span></a>
                                                        </p>
                                                    </div>
                                                    <div class="pricing__item__heading">
                                                        <h2 class="title">Main Features</h2>
                                                    </div>
                                                    <div class="pricing__item_list">
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Tokens per month</h4>
                                                            <p class="desc">12,500</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Upscales per month</h4>
                                                            <p class="desc">3,500</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Background removals</h4>
                                                            <p class="desc">8,000</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Pending jobs</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Private generations</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Priority infrastructure</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Relaxed generation</h4>
                                                            <p class="desc">—</p>
                                                        </div>
                                                    </div>
                                                    <div class="pricing__item__heading">
                                                        <h2 class="title">Other Features</h2>
                                                    </div>
                                                    <div class="pricing__item_list">
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Essential Frenify models</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Expanded Frenify models</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Community models</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Custom Model</h4>
                                                            <p class="desc">—</p>
                                                        </div>
                                                    </div>
                                                    <div class="pricing__item_footer">
                                                        <a href="#" class="techwave_fn_button"><span>Buy Premium</span></a>
                                                    </div>
                                                </div>
                                            </div>                                                                        <div class="pricing__item">
                                                <div class="pricing__item_holder">
                                                    <div class="pricing__item__header">
                                                        <h2 class="title">Enerprice</h2>
                                                        <h3 class="price"><span>$25</span> / month</h3>
                                                        <p class="desc">billed yearly<br /><span>$35.00</span> billed monthly</p>
                                                        <p class="purchase">
                                                            <a href="#" class="techwave_fn_button"><span>Buy Enterprice</span></a>
                                                        </p>
                                                    </div>
                                                    <div class="pricing__item__heading">
                                                        <h2 class="title">Main Features</h2>
                                                    </div>
                                                    <div class="pricing__item_list">
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Tokens per month</h4>
                                                            <p class="desc">20,000</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Upscales per month</h4>
                                                            <p class="desc">7,500</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Background removals</h4>
                                                            <p class="desc">15,000</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Pending jobs</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Private generations</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Priority infrastructure</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Relaxed generation</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                    </div>
                                                    <div class="pricing__item__heading">
                                                        <h2 class="title">Other Features</h2>
                                                    </div>
                                                    <div class="pricing__item_list">
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Essential Frenify models</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Expanded Frenify models</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Community models</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Custom Model</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                    </div>
                                                    <div class="pricing__item_footer">
                                                        <a href="#" class="techwave_fn_button"><span>Buy Enterpice</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pricing__content">
                                            <div class="pricing__header">
                                                <div class="item_row">
                                                    <div class="item_col"></div>
                                                    <div class="item_col">
                                                        <h2 class="title">Personal</h2>
                                                        <h3 class="price"><span>$10</span> / month</h3>
                                                        <p class="desc">billed yearly<br /><span>$15.00</span> billed monthly</p>
                                                        <p class="purchase">
                                                            <a href="#" class="techwave_fn_button"><span>Buy Personal</span></a>
                                                        </p>
                                                    </div>
                                                    <div class="item_col">
                                                        <div class="popular"><span>Most Popular</span></div>
                                                        <h2 class="title">Premium</h2>
                                                        <h3 class="price"><span>$15</span> / month</h3>
                                                        <p class="desc">billed yearly<br /><span>$20.00</span> billed monthly</p>
                                                        <p class="purchase">
                                                            <a href="#" class="techwave_fn_button"><span>Buy Premium</span></a>
                                                        </p>
                                                    </div>
                                                    <div class="item_col">
                                                        <h2 class="title">Enterprice</h2>
                                                        <h3 class="price"><span>$25</span> / month</h3>
                                                        <p class="desc">billed yearly<br /><span>$35.00</span> billed monthly</p>
                                                        <p class="purchase">
                                                            <a href="#" class="techwave_fn_button"><span>Buy Enterprice</span></a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pricing__heading">
                                                <div class="item"><span class="title">Main Features</span></div>
                                                <div class="item wide"></div>
                                            </div>
                                            <div class="pricing__fields">
                                                <div class="item_row">
                                                    <div class="item_col">
                                                        <span class="heading_text">Tokens per month</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">5,500</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">12,500</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">20,000</span>
                                                    </div>
                                                </div>
                                                <div class="item_row">
                                                    <div class="item_col">
                                                        <span class="heading_text">Upscales per month</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">1,500</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">3,500</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">7,500</span>
                                                    </div>
                                                </div>
                                                <div class="item_row">
                                                    <div class="item_col">
                                                        <span class="heading_text">Background removals</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">4,000</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">8,000</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">15,000</span>
                                                    </div>
                                                </div>
                                                <div class="item_row">
                                                    <div class="item_col">
                                                        <span class="heading_text">Pending jobs</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                </div>
                                                <div class="item_row">
                                                    <div class="item_col">
                                                        <span class="heading_text">Private generations</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                </div>
                                                <div class="item_row">
                                                    <div class="item_col">
                                                        <span class="heading_text">Priority infrastructure</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">—</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                </div>
                                                <div class="item_row">
                                                    <div class="item_col">
                                                        <span class="heading_text">Relaxed generation</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">—</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">—</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pricing__heading">
                                                <div class="item"><span class="title">Other Features</span></div>
                                                <div class="item wide"></div>
                                            </div>
                                            <div class="pricing__fields">


                                                <div class="item_row">
                                                    <div class="item_col">
                                                        <span class="heading_text">Essential Frenify models</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                </div>
                                                <div class="item_row">
                                                    <div class="item_col">
                                                        <span class="heading_text">Expanded Frenify models</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                </div>
                                                <div class="item_row">
                                                    <div class="item_col">
                                                        <span class="heading_text">Community models</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">—</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                </div>
                                                <div class="item_row">
                                                    <div class="item_col">
                                                        <span class="heading_text">Custom Model</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">—</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">—</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                </div>
                                            </div>                                                                        <div class="pricing__footer">
                                                <div class="item_row">
                                                    <div class="item_col"></div>
                                                    <div class="item_col">
                                                        <a href="#" class="techwave_fn_button"><span>Buy Personal</span></a>
                                                    </div>
                                                    <div class="item_col">
                                                        <a href="#" class="techwave_fn_button"><span>Buy Premium</span></a>
                                                    </div>
                                                    <div class="item_col">
                                                        <a href="#" class="techwave_fn_button"><span>Buy Enterprice</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="pricing__tab" id="tab2">

                                        <div class="fn__mobile_pricing">
                                            <div class="pricing__item">
                                                <div class="pricing__item_holder">
                                                    <div class="pricing__item__header">
                                                        <h2 class="title">Personal</h2>
                                                        <h3 class="price"><span>$15</span> / month</h3>
                                                        <p class="desc">billed yearly<br /><span>$20.00</span> billed monthly</p>
                                                        <p class="purchase">
                                                            <a href="#" class="techwave_fn_button"><span>Buy Personal</span></a>
                                                        </p>
                                                    </div>
                                                    <div class="pricing__item__heading">
                                                        <h2 class="title">Main Features</h2>
                                                    </div>
                                                    <div class="pricing__item_list">
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Tokens per month</h4>
                                                            <p class="desc">5,500</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Upscales per month</h4>
                                                            <p class="desc">1,500</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Background removals</h4>
                                                            <p class="desc">4,000</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Pending jobs</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Private generations</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Priority infrastructure</h4>
                                                            <p class="desc">—</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Relaxed generation</h4>
                                                            <p class="desc">—</p>
                                                        </div>
                                                    </div>
                                                    <div class="pricing__item__heading">
                                                        <h2 class="title">Other Features</h2>
                                                    </div>
                                                    <div class="pricing__item_list">
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Essential Frenify models</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Expanded Frenify models</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Community models</h4>
                                                            <p class="desc">—</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Custom Model</h4>
                                                            <p class="desc">—</p>
                                                        </div>
                                                    </div>
                                                    <div class="pricing__item_footer">
                                                        <a href="#" class="techwave_fn_button"><span>Buy Personal</span></a>
                                                    </div>
                                                </div>
                                            </div>                                                                        <div class="pricing__item">
                                                <div class="pricing__item_holder">
                                                    <div class="popular"><span>Most Popular</span></div>
                                                    <div class="pricing__item__header">
                                                        <h2 class="title">Premium</h2>
                                                        <h3 class="price"><span>$20</span> / month</h3>
                                                        <p class="desc">billed yearly<br /><span>$25.00</span> billed monthly</p>
                                                        <p class="purchase">
                                                            <a href="#" class="techwave_fn_button"><span>Buy Premium</span></a>
                                                        </p>
                                                    </div>
                                                    <div class="pricing__item__heading">
                                                        <h2 class="title">Main Features</h2>
                                                    </div>
                                                    <div class="pricing__item_list">
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Tokens per month</h4>
                                                            <p class="desc">12,500</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Upscales per month</h4>
                                                            <p class="desc">3,500</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Background removals</h4>
                                                            <p class="desc">8,000</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Pending jobs</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Private generations</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Priority infrastructure</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Relaxed generation</h4>
                                                            <p class="desc">—</p>
                                                        </div>
                                                    </div>
                                                    <div class="pricing__item__heading">
                                                        <h2 class="title">Other Features</h2>
                                                    </div>
                                                    <div class="pricing__item_list">
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Essential Frenify models</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Expanded Frenify models</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Community models</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Custom Model</h4>
                                                            <p class="desc">—</p>
                                                        </div>
                                                    </div>
                                                    <div class="pricing__item_footer">
                                                        <a href="#" class="techwave_fn_button"><span>Buy Premium</span></a>
                                                    </div>
                                                </div>
                                            </div>                                                                        <div class="pricing__item">
                                                <div class="pricing__item_holder">
                                                    <div class="pricing__item__header">
                                                        <h2 class="title">Enerprice</h2>
                                                        <h3 class="price"><span>$30</span> / month</h3>
                                                        <p class="desc">billed yearly<br /><span>$40.00</span> billed monthly</p>
                                                        <p class="purchase">
                                                            <a href="#" class="techwave_fn_button"><span>Buy Enterprice</span></a>
                                                        </p>
                                                    </div>
                                                    <div class="pricing__item__heading">
                                                        <h2 class="title">Main Features</h2>
                                                    </div>
                                                    <div class="pricing__item_list">
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Tokens per month</h4>
                                                            <p class="desc">20,000</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Upscales per month</h4>
                                                            <p class="desc">7,500</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Background removals</h4>
                                                            <p class="desc">15,000</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Pending jobs</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Private generations</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Priority infrastructure</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Relaxed generation</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                    </div>
                                                    <div class="pricing__item__heading">
                                                        <h2 class="title">Other Features</h2>
                                                    </div>
                                                    <div class="pricing__item_list">
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Essential Frenify models</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Expanded Frenify models</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Community models</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                        <div class="pricing__item_list_item">
                                                            <h4 class="title">Custom Model</h4>
                                                            <p class="desc">+</p>
                                                        </div>
                                                    </div>
                                                    <div class="pricing__item_footer">
                                                        <a href="#" class="techwave_fn_button"><span>Buy Enterpice</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pricing__content">
                                            <div class="pricing__header">
                                                <div class="item_row">
                                                    <div class="item_col"></div>
                                                    <div class="item_col">
                                                        <h2 class="title">Personal</h2>
                                                        <h3 class="price"><span>$15</span> / month</h3>
                                                        <p class="desc">billed yearly<br /><span>$20.00</span> billed monthly</p>
                                                        <p class="purchase">
                                                            <a href="#" class="techwave_fn_button"><span>Buy Personal</span></a>
                                                        </p>
                                                    </div>
                                                    <div class="item_col">
                                                        <div class="popular"><span>Most Popular</span></div>
                                                        <h2 class="title">Premium</h2>
                                                        <h3 class="price"><span>$20</span> / month</h3>
                                                        <p class="desc">billed yearly<br /><span>$25.00</span> billed monthly</p>
                                                        <p class="purchase">
                                                            <a href="#" class="techwave_fn_button"><span>Buy Premium</span></a>
                                                        </p>
                                                    </div>
                                                    <div class="item_col">
                                                        <h2 class="title">Enterprice</h2>
                                                        <h3 class="price"><span>$30</span> / month</h3>
                                                        <p class="desc">billed yearly<br /><span>$40.00</span> billed monthly</p>
                                                        <p class="purchase">
                                                            <a href="#" class="techwave_fn_button"><span>Buy Enterprice</span></a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pricing__heading">
                                                <div class="item"><span class="title">Main Features</span></div>
                                                <div class="item wide"></div>
                                            </div>
                                            <div class="pricing__fields">
                                                <div class="item_row">
                                                    <div class="item_col">
                                                        <span class="heading_text">Tokens per month</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">5,500</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">12,500</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">20,000</span>
                                                    </div>
                                                </div>
                                                <div class="item_row">
                                                    <div class="item_col">
                                                        <span class="heading_text">Upscales per month</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">1,500</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">3,500</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">7,500</span>
                                                    </div>
                                                </div>
                                                <div class="item_row">
                                                    <div class="item_col">
                                                        <span class="heading_text">Background removals</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">4,000</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">8,000</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">15,000</span>
                                                    </div>
                                                </div>
                                                <div class="item_row">
                                                    <div class="item_col">
                                                        <span class="heading_text">Pending jobs</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                </div>
                                                <div class="item_row">
                                                    <div class="item_col">
                                                        <span class="heading_text">Private generations</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                </div>
                                                <div class="item_row">
                                                    <div class="item_col">
                                                        <span class="heading_text">Priority infrastructure</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">—</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                </div>
                                                <div class="item_row">
                                                    <div class="item_col">
                                                        <span class="heading_text">Relaxed generation</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">—</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">—</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pricing__heading">
                                                <div class="item"><span class="title">Other Features</span></div>
                                                <div class="item wide"></div>
                                            </div>
                                            <div class="pricing__fields">


                                                <div class="item_row">
                                                    <div class="item_col">
                                                        <span class="heading_text">Essential Frenify models</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                </div>
                                                <div class="item_row">
                                                    <div class="item_col">
                                                        <span class="heading_text">Expanded Frenify models</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                </div>
                                                <div class="item_row">
                                                    <div class="item_col">
                                                        <span class="heading_text">Community models</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">—</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                </div>
                                                <div class="item_row">
                                                    <div class="item_col">
                                                        <span class="heading_text">Custom Model</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">—</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">—</span>
                                                    </div>
                                                    <div class="item_col">
                                                        <span class="option_text">+</span>
                                                    </div>
                                                </div>
                                            </div>                                                                        <div class="pricing__footer">
                                                <div class="item_row">
                                                    <div class="item_col"></div>
                                                    <div class="item_col">
                                                        <a href="#" class="techwave_fn_button"><span>Buy Personal</span></a>
                                                    </div>
                                                    <div class="item_col">
                                                        <a href="#" class="techwave_fn_button"><span>Buy Premium</span></a>
                                                    </div>
                                                    <div class="item_col">
                                                        <a href="#" class="techwave_fn_button"><span>Buy Enterprice</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <footer class="techwave_fn_footer">
                    <div class="techwave_fn_footer_content">
                        <div class="copyright">
                            <p>2023© Frenify Team</p>
                        </div>
                        <div class="menu_items">
                            <ul>
                                <li><a href="terms.html">Terms of Service</a></li>
                                <li><a href="privacy.html">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}