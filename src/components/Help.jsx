import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/Help.css';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

function Help() {
  const buttonRef = useRef(null)
  const helpName = [
    "Shelter of Victoria Bulbyna",
    "City of faithful hearts",
    "Shelter of Natalia Tymoshenko",
    "Shelter of Jeanne Sass",
    "Shelter of Victoria Bondarenko",
    "Sterilization center",
    "Zoo chance",
    "Save lives",
    "City Center for the Treatment of Animals",
    "Society for Proctection of Animals in Sumy",
    "The right to life",
    "4 paws",
    "The kingdom of cats",
    "Zvir",
    "Mercy",
    "Happy dog",
    "Give me a paw, friend",
    "Friend",
    "Hope",
    "We are for the right to life",
    "Planeta",
    "Second Life",
    "Happy shore",
    "Retrieverteam",
    "Shelter of Irina Dobrolyubova",
    "Matilda",
    "Life",
    "Second chance",
    "SOS",
    "Best friends",
  ];


  useEffect(() => {
    const handleEnter = () => {
      gsap.to(buttonRef.current, {
        duration: 0.5,
        x: 10,
        ease: 'power2.inOut',
      });
    };

    const handleLeave = () => {
      gsap.to(buttonRef.current, {
        duration: 0.5,
        x: 0,
        y: 0,
        ease: 'power2.inOut',
      });
    };

    if(buttonRef.current) {
    buttonRef.current.addEventListener('mouseenter', handleEnter);
    buttonRef.current.addEventListener('mouseleave', handleLeave);
  }

    return () => {
      if (buttonRef.current) {
      buttonRef.current.removeEventListener('mouseenter', handleEnter);
      buttonRef.current.removeEventListener('mouseleave', handleLeave);
    };
  }
  }, [])


  useEffect(() => {
    const cardTexts = document.querySelectorAll('.help-card-text'); 

    cardTexts.forEach(card => {
      const handleEnter = () => {
        gsap.to(card, {
          duration: 0.5,
          x: 10,
          y: -10,
          ease: 'power2.inOut',
        });
      };

      const handleLeave = () => {
        gsap.to(card, {
          duration: 0.5,
          x: 0,
          y: 0,
          ease: 'power2.inOut',
        });
      };

      card.addEventListener('mouseenter', handleEnter);
      card.addEventListener('mouseleave', handleLeave);

      return () => {
        card.removeEventListener('mouseenter', handleEnter);
        card.removeEventListener('mouseleave', handleLeave);
      };
    });
  }, []);

  useEffect(() => {
    
    const cards = document.querySelectorAll('.help-card'); 
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { x: 0, y: 50, opacity: 0 }, 
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 2,
          stagger: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 40%',
            end: 'bottom bottom', 
            scrub: 1, 
          },
        }
      );
    });
  }, []);

  return (
    <div className="help-section">
      <div className="help-text">
        <h2>We Want To Help</h2>
        <p>homeless packs, volunteers, guardians, overstayers, shelter, and other organisations.</p>
        <br />
      </div>
      <div className="help-container">
        {helpName.map((help, index) => (
          <div key={index} className="help-card">
            <div className="help-card-text">
              <p>{help}</p>
            </div>
          </div>
        ))}  
      </div>
      <div className='button-help' >
        <button ref={buttonRef}>apply for help <img style={{width: '40px', height: '10px', transform: 'scaleX(-1)'}} src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6273a272fe3407579aa3d6c9_PngItem_344959.png" /></button>
      </div>
    </div>
  );
}

export default Help;