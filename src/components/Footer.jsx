import React from "react";
import "../styles/Social.css";

function Footer() {
    return (
        <div className="footer-section">
            <div className="footer-container">
                <div className="footer-text">
                    <h1>Contact us</h1>
                    <p>Kyiv, Ukraine</p>
                    <p>mail@isa.co.ua</p>
                    <div className="sosial-media">
                        <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6274433d06989d76edcff015_9055867_youtube_bxl.svg" />
                        <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6274449bf840c377311f2e08_9055851_instagram_bxl.svg" />
                        <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/627443d78de17d2c59c8352c_9055795_facebook_bxl.svg" />
                        <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6274440c6a0ab7631dce0cd1_9055888_patreon_bxl.svg" />
                        <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/627443f9ac91b492e4c220ba_9055800_telegram_bxl.svg" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;