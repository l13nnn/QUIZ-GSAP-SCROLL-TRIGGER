import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "../styles/Social.css";

gsap.registerPlugin(ScrollTrigger);

function Social() {

    useEffect(() => {
        const cards = document.querySelectorAll('.social-card'); 
        cards.forEach((card) => {
        gsap.fromTo(
            card,
            { x: 0, y: 50, opacity: 0 }, 
            {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 2,
            delay: 1,
            stagger: 1,
            scrollTrigger: {
                trigger: card,
                start: "top 40%",
                end: 'bottom bottom',
                toggleActions: 'play none none reverse',
                scrub: 1,
            },
            }
        );
        });
    }, []);

    return (
        <>
            <div className="social-activity-section">
                <div className="social-section">
                    <h1>Socially active citizens</h1>
                    <p>support us</p> <br />
                    <div className="social-container">
                        <div className="social-card">
                            <div className="social-card-text">
                                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/628398012a964488bb09078d_13.jpg" />
                                <p>Oleksiy Tritenko</p>
                                <p>theater and film actor</p>
                            </div>
                        </div>
                        <div className="social-card">
                            <div className="social-card-text">
                                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/628397b3f06d2066cfe8e9a2_14.jpg" />
                                <p>Stanislav Boklan</p>
                                <p>People's Artist of Ukraine</p>
                            </div>
                        </div>
                        <div className="social-card">
                            <div className="social-card-text">
                                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcdfcb2137dcf7db53e7f_12.jpg" />
                                <p>Alexander Rudinsky</p>
                                <p>theater and film actor</p>
                            </div>
                        </div>
                        <div className="social-card">
                            <div className="social-card-text">
                                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcdd72d729d8ecacf6de7_11-p-500.jpeg" />
                                <p>Oksana Zhdanova</p>
                                <p>theater and film actress</p>
                            </div>
                        </div>
                        <div className="social-card">
                            <div className="social-card-text">
                                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcdaedc0f8eea17c92429_10.jpg" />
                                <p>Natalka Denisenko</p>
                                <p>theater and film actress</p>
                            </div>
                        </div>
                        <div className="social-card">
                            <div className="social-card-text">
                                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcd87d51b9051dfcbf349_09-p-500.jpeg" />
                                <p>Maksym Samchyk</p>
                                <p>theater and film actor</p>
                            </div>
                        </div>
                        <div className="social-card">
                            <div className="social-card-text">
                                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcd5ca9508410b3a0d824_08.jpg" />
                                <p>Kateryna Vyshneva</p>
                                <p>theater and film actress</p>
                            </div>
                        </div>
                        <div className="social-card">
                            <div className="social-card-text">
                                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcd3288758547e6ee0e22_07.jpg" />
                                <p>Irma Vitovska</p>
                                <p>Honored Actress of Ukraine</p>
                            </div>
                        </div>
                        <div className="social-card">
                            <div className="social-card-text">
                                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcd1790c298c49bc7c436_06.jpg" />
                                <p>Igor Portyanko</p>
                                <p>actor of theater and cinema</p>
                            </div>
                        </div>
                        <div className="social-card">
                            <div className="social-card-text">
                                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fccf0fc672a5dcfa87ee9_05.jpg" />
                                <p>Dmytro Surzhikov</p>
                                <p>Honored Artist of Ukraine</p>
                            </div>
                        </div>
                        <div className="social-card">
                            <div className="social-card-text">
                                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fccc57c3cb5177369015e_04-p-500.jpeg" />
                                <p>Daria Barihashvili</p>
                                <p>theater and film actress</p>
                            </div>
                        </div>
                        <div className="social-card">
                            <div className="social-card-text">
                                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcc9bc50d7acc036982a9_03-p-500.jpeg" />
                                <p>Vera Kobzar</p>
                                <p>theater and film actress</p>
                            </div>
                        </div>
                        <div className="social-card">
                            <div className="social-card-text">
                                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcc7339e6f5389ed03013_02.jpg" />
                                <p>Andriy Fedynchyk</p>
                                <p>theater and film actor</p>
                            </div>
                        </div>
                        <div className="social-card">
                            <div className="social-card-text">
                                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcc4b694dfd4d65a13230_01.jpg " />
                                <p>Anastasia Nesterenko</p>
                                <p>theater and film actress</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Social;