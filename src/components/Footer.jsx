import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "../styles/Footer.css";

gsap.registerPlugin(ScrollTrigger);

function Footer() {

    useEffect(() => {
        const images = document.querySelectorAll(".footer-image img");
    
        gsap.fromTo(
          images,
          { y: 50, opacity: 0 }, 
          {
            y: 0, 
            opacity: 1,
            duration: 1.5,
            stagger: 1,
            scrollTrigger: {
              trigger: ".footer-container", 
              start: "top 50%",
              end: "bottom bottom",
              toggleActions: "play none none reverse",
              scrub: 1,
            },
          }
        );
      }, []);
    
    return (
        <>
            <div className="footer-container">
                <div className="footer-text">
                    <h1>Contact us</h1>
                    <p>Kyiv, Ukraine</p>
                    <p>mail@isa.co.ua</p>
                    <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6274433d06989d76edcff015_9055867_youtube_bxl.svg" />
                    <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6274449bf840c377311f2e08_9055851_instagram_bxl.svg" />
                    <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/627443d78de17d2c59c8352c_9055795_facebook_bxl.svg" />
                    <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6274440c6a0ab7631dce0cd1_9055888_patreon_bxl.svg" />
                    <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/627443f9ac91b492e4c220ba_9055800_telegram_bxl.svg" />
                </div>
                <div className="footer-image">
                    <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/62647f9fbe07235ba9b28d67_star-white-with-animals.svg" />
                </div>
            </div>
        </>
    );
}

export default Footer;