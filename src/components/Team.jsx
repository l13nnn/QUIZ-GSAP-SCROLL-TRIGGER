import { useEffect } from 'react';
import gsap from 'gsap';
import '../styles/Team.css';

function Team() {

    useEffect(() => {
    
        const cards = document.querySelectorAll('.team-card'); 
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
                toggleActions: 'play none none reverse',
                scrub: 1, 
              },
            }
          );
        });
      }, []);

    useEffect(() => {
        const cardTexts = document.querySelectorAll('.team-card-text');
    
        cardTexts.forEach(card => {
          const handleEnter = () => {
            gsap.to(card, {
              duration: 0.5,
              scale: 0.9,
              ease: 'power2.inOut',
            });
          };
    
          const handleLeave = () => {
            gsap.to(card, {
              duration: 0.5,
              scale: 1,
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

    return (
        <>
        <div className='our-team-section'>
        <div className='team-section'>
            <h1>Our team</h1>
            <p>consists of completely different people who are united by a common desire - to help</p> <br />
            <div className='team-container'>
                <div className='team-card'>
                    <div className='team-card-text'>
                        <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744ee9fce7fbaf400c22f8_2.jpg" />
                        <h2>Daryna Deriy</h2>
                        <p>Chairman of the Board</p>
                    </div>
                </div>
                <div className='team-card'>
                    <div className='team-card-text'>
                        <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744edaac91b4183ac27e10_5.jpg" />
                        <h2>Polina Snisarenko-Kulchytska</h2>
                        <p>Curator of the foundation</p>
                    </div>
                </div>
                <div className='team-card'>
                    <div className='team-card-text'>
                        <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744ec97586a996f48f7a85_1.jpg" />
                        <h2>Bohdan Kulchytska</h2>
                        <p>Executive Manager</p>
                    </div>
                </div>
                <div className='team-card'>
                    <div className='team-card-text'>
                        <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744eae22e10d8a15f909ef_9.jpg" />
                        <h2>Mykhaylo Deriy</h2>
                        <p>Operation Manager</p>
                    </div>
                </div>
                <div className='team-card'>
                    <div className='team-card-text'>
                        <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744e8e05f6c22bac85252a_7.jpg" />
                        <h2>Ksenia Nikishina</h2>
                        <p>Office manager</p>
                    </div>
                </div>
                <div className='team-card'>
                    <div className='team-card-text'>
                        <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744f0eb7cd3462ef475ebf_6.jpg" />
                        <h2>Anna Andriychuk</h2>
                        <p>SMM-manager</p>
                    </div>
                </div>
                <div className='team-card'>
                    <div className='team-card-text'>
                        <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744e6761e425c6956af3a5_3.jpg" />
                        <h2>Anastasia Kovalchuk</h2>
                        <p>Director</p>
                    </div>
                </div>
                <div className='team-card'>
                    <div className='team-card-text'>
                        <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/626ae0bcd92bf48017c14083_basil-square.png" />
                        <h2>Basil Gloo</h2>
                        <p>Web Developer</p>
                    </div>
                </div>
                <div className='team-card'>
                    <div className='team-card-text'>
                        <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/626ae01da2a805d176b1606b_%D0%AF%D0%BA%D0%BE%D0%B1%D1%87%D1%83%D0%BA.jpg" />
                        <h2>Lina Yakobchuk</h2>
                        <p>Designer</p>
                    </div>
                </div>
                <div className='team-card'>
                    <div className='team-card-text'>
                        <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fc796cf3602b53a7512cf_4.jpg" />
                        <h2>Anastasia Yevchenko</h2>
                        <p>Translator</p>
                    </div>
                </div>
                <div className='team-card'>
                    <div className='team-card-text'>
                        <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6265332e63b917130ca8d702_isa-logo-dog-clean.svg" />
                        <h2>Office Manager</h2>
                        <p>open vacancy</p>
                    </div>
                </div>
                <div className='team-card'>
                    <div className='team-card-text'>
                        <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6264275680ed1a3a363d12d8_isa-logo-cat-clean.svg" />
                        <h2>SEO specialist</h2>
                        <p>open vacancy</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Team;