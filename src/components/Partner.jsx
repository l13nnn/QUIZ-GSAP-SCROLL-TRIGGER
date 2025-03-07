import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "../styles/Partner.css";

gsap.registerPlugin(ScrollTrigger);

function Partner() {

    useEffect(() => {
        const images = document.querySelectorAll(".partner-logos img");
    
        gsap.fromTo(
          images,
          { y: 50, opacity: 0 }, 
          {
            y: 0, 
            opacity: 1,
            duration: 1.5,
            stagger: 1,
            scrollTrigger: {
              trigger: ".partner-container", 
              start: "top 40%",
              end: "bottom bottom",
              toggleActions: "play none none reverse",
              scrub: 1,
            },
          }
        );
      }, []);    

    return (

        <>
        <div className="partner-container">
            <h1>Our partners</h1>
            <p>are take care of our fund and help us with many questions</p> <br />
            <div className="partner-logos">
                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62aa3401042d425391235aaa_Logo-adviRES.jpg" />
                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62aa33e1380de680b7110ebf_ovid-wind-logo.png" />
                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6265d803f32677c8352bc485_tbs_logo1-02.png" />
                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6265d7edf0c46ce38f559328_download.png" /> 
                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6265d7d930a5c2377aedf9d4_logo_laudis_accountancy.png" />
                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6265d7c51ad96b1cbf31b0c0_photo_2022-04-21%2020.43.09.jpeg" />
            </div>
        </div>
        </>

    )

}

export default Partner;