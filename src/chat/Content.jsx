import React, { useEffect } from "react";

export default function ChatContent() {
    return (
        <>
            <div class="techwave_fn_content">
                <div class="techwave_fn_page">
                    <div class="techwave_fn_aichatbot_page fn__chatbot">
                        <div class="chat__page">

                            <div class="font__trigger">
                                <span></span>
                            </div>

                            <div class="fn__title_holder">
                                <div class="container">
                                    <h1 class="title">Chat Bot Definition</h1>                        </div>
                            </div>

                            <div class="container">
                                <div class="chat__list">

                                    <div id="chat0" class="chat__item"></div>

                                    <div class="chat__item active" id="chat1">
                                        <div class="chat__box your__chat">
                                            <div class="author"><span>You</span></div>
                                            <div class="chat">
                                                <p>What is a chat bot?</p>
                                            </div>
                                        </div>
                                        <div class="chat__box bot__chat">
                                            <div class="author"><span>Bot</span></div>
                                            <div class="chat">
                                                <p>At the most basic level, a chatbot is a computer program that simulates and processes human conversation (either written or spoken), allowing humans to interact with digital devices as if they were communicating with a real person. Chatbots can be as simple as rudimentary programs that answer a simple query with a single-line response, or as sophisticated as digital assistants that learn and evolve to deliver increasing levels of personalization as they gather and process information.</p>
                                            </div>
                                        </div>
                                        <div class="chat__box your__chat">
                                            <div class="author"><span>You</span></div>
                                            <div class="chat">
                                                <p>How do chatbots work?</p>
                                            </div>
                                        </div>
                                        <div class="chat__box bot__chat">
                                            <div class="author"><span>Bot</span></div>
                                            <div class="chat">
                                                <p>Chatbots boost operational efficiency and bring cost savings to businesses while offering convenience and added services to internal employees and external customers. They allow companies to easily resolve many types of customer queries and issues while reducing the need for human interaction.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="chat__item" id="chat2"></div>

                                    <div class="chat__item" id="chat3"></div>

                                    <div class="chat__item" id="chat4"></div>

                                </div>
                            </div>


                            <div class="chat__comment">
                                <div class="container">
                                    <div class="fn__chat_comment">
                                        <div class="new__chat">
                                            <p>Ask it questions, engage in discussions, or simply enjoy a friendly chat.</p>
                                        </div>
                                        <textarea rows="1" class="fn__hidden_textarea" tabindex="-1"></textarea>
                                        <textarea rows="1" placeholder="Send a message..." id="fn__chat_textarea"></textarea>
                                        <button><img src="chatAssets/svg/enter.svg" alt="" class="fn__svg" /></button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="chat__sidebar">
                            <div class="sidebar_header">
                                <a href="#chat0" class="fn__new_chat_link">
                                    <span class="icon"></span>
                                    <span class="text">New Chat</span>
                                </a>
                            </div>
                            <div class="sidebar_content">
                                <div class="chat__group new">
                                    <h2 class="group__title">Today</h2>
                                    <ul class="group__list">
                                        <li class="group__item">
                                            <div class="fn__chat_link active" href="#chat1">
                                                <span class="text">Chat Bot Definition</span>
                                                <input type="text" value="Chat Bot Definition" />
                                                <span class="options">
                                                    <button class="trigger"><span></span></button>
                                                    <span class="options__popup">
                                                        <span class="options__list">
                                                            <button class="edit">Edit</button>
                                                            <button class="delete">Delete</button>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span class="save_options">
                                                    <button class="save">
                                                        <img src="chatAssets/svg/check.svg" alt="" class="fn__svg" />
                                                    </button>
                                                    <button class="cancel">
                                                        <img src="chatAssets/svg/close.svg" alt="" class="fn__svg" />
                                                    </button>
                                                </span>
                                            </div>
                                        </li>
                                        <li class="group__item">
                                            <div class="fn__chat_link" href="#chat2">
                                                <span class="text">Essay: Marketing</span>
                                                <input type="text" value="Essay: Marketing" />
                                                <span class="options">
                                                    <button class="trigger"><span></span></button>
                                                    <span class="options__popup">
                                                        <span class="options__list">
                                                            <button class="edit">Edit</button>
                                                            <button class="delete">Delete</button>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span class="save_options">
                                                    <button class="save">
                                                        <img src="chatAssets/svg/check.svg" alt="" class="fn__svg" />
                                                    </button>
                                                    <button class="cancel">
                                                        <img src="chatAssets/svg/close.svg" alt="" class="fn__svg" />
                                                    </button>
                                                </span>
                                            </div>
                                        </li>
                                        <li class="group__item">
                                            <div class="fn__chat_link" href="#chat3">
                                                <span class="text">Future of Social Media</span>
                                                <input type="text" value="Future of Social Media" />
                                                <span class="options">
                                                    <button class="trigger"><span></span></button>
                                                    <span class="options__popup">
                                                        <span class="options__list">
                                                            <button class="edit">Edit</button>
                                                            <button class="delete">Delete</button>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span class="save_options">
                                                    <button class="save">
                                                        <img src="chatAssets/svg/check.svg" alt="" class="fn__svg" />
                                                    </button>
                                                    <button class="cancel">
                                                        <img src="chatAssets/svg/close.svg" alt="" class="fn__svg" />
                                                    </button>
                                                </span>
                                            </div>
                                        </li>
                                        <li class="group__item">
                                            <div class="fn__chat_link" href="#chat4">
                                                <span class="text">Business Ideas</span>
                                                <input type="text" value="Business Ideas" />
                                                <span class="options">
                                                    <button class="trigger"><span></span></button>
                                                    <span class="options__popup">
                                                        <span class="options__list">
                                                            <button class="edit">Edit</button>
                                                            <button class="delete">Delete</button>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span class="save_options">
                                                    <button class="save">
                                                        <img src="chatAssets/svg/check.svg" alt="" class="fn__svg" />
                                                    </button>
                                                    <button class="cancel">
                                                        <img src="chatAssets/svg/close.svg" alt="" class="fn__svg" />
                                                    </button>
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
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