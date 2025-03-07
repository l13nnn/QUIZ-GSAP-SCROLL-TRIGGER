import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import '../styles/Header.css';

gsap.registerPlugin(ScrollTrigger);

function Header() {

  const buttonRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const textRef = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { x: 0, y: 0 }, 
      {
        x: 200, 
        duration: 2, 
        delay: 1,
        ease: "power2.inOut", 
        scrollTrigger: { 
          trigger: ".container", 
          start: "bottom top", 
          end: "bottom bottom", 
          pin: true, 
          scrub: 5, 
        },
      }
    );

    gsap.fromTo(
        textRef2.current,
        { x: 0, y: 0 }, 
        {
          y: 200, 
          duration: 2, 
          delay: 1,
          ease: "power2.inOut", 
          scrollTrigger: { 
            trigger: ".container", 
            start: "bottom top", 
            end: "bottom bottom", 
            pin: true, 
            scrub: 5, 
          },
        }
      );
  }, []);

  useEffect(() => {
    const handleEnter = () => {
      gsap.to(buttonRef.current, {
        duration: 0.5,
        x: 5,
        y: -5,
        ease: "power2.inOut",
      });
    };

    const handleLeave = () => {
      gsap.to(buttonRef.current, {
        duration: 0.5,
        x: 0,
        y: 0,
        ease: "power2.inOut",
      });
    };

    if(buttonRef.current) {
        buttonRef.current.addEventListener("mouseenter", handleEnter);
        buttonRef.current.addEventListener("mouseleave", handleLeave);
    }

    return () => {
      if(buttonRef.current) {
        buttonRef.current.removeEventListener("mouseenter", handleEnter);
        buttonRef.current.removeEventListener("mouseleave", handleLeave);
      }
    }
  }, []);

  useEffect(() => { 
    const images = [image1Ref.current, image2Ref.current];
    const tl = gsap.timeline({repeat: -1});
    tl.set(images, {y: -100, opacity: 0}) 
      .to(image1Ref.current, {y: 0, opacity: 1})
      .to(image1Ref.current, {y: 100, opacity: 0, delay: 1}, )
      .to(image2Ref.current, {y: 0, opacity: 1}) 
      .to(image2Ref.current, {y: 100, opacity: 0, delay: 1}, );
  }, []);

    return (
    <>
    <div className="button-inner">
        <div className="button-text" ref={buttonRef}>
            <h1>donate</h1>
        </div>
    </div>
    <div className="container">
        <div className="background">
            <div className="image" style={{position: "relative", width: "200px", height: "200px"}}>
                <img ref={image1Ref} style={{ width: "200px", height: "200px", position: "absolute", top: "0", left: "0" }} src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6265332e63b917130ca8d702_isa-logo-dog-clean.svg" />
                <img ref={image2Ref} style={{ width: "200px", height: "200px", position: "absolute", top: "0", left: "0" }} src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6264275680ed1a3a363d12d8_isa-logo-cat-clean.svg" />
            </div>
            <h1 ref={textRef}>Innovative <br /> Solutions <br /> for <br /> Animals</h1>
        </div>
        <div className="text" ref={textRef2}>
            <p>charity organization</p>
            <div className="sosial-media">
                <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6274433d06989d76edcff015_9055867_youtube_bxl.svg" />
                <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6274449bf840c377311f2e08_9055851_instagram_bxl.svg" />
                <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/627443d78de17d2c59c8352c_9055795_facebook_bxl.svg" />
                <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6274440c6a0ab7631dce0cd1_9055888_patreon_bxl.svg" />
                <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/627443f9ac91b492e4c220ba_9055800_telegram_bxl.svg" />
            </div>
        </div>
    </div>
    </>
    );
}

export default Header;