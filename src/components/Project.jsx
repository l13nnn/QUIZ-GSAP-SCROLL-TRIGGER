import { useRef, useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import '../styles/Project.css';

gsap.registerPlugin(ScrollTrigger);

function Project() {

    const button1Ref = useRef(null);
    const button2Ref = useRef(null);
    const button3Ref = useRef(null);
    const cardScroll1 = useRef(null);
    const cardScroll2 = useRef(null);
    const cardScroll3 = useRef(null);

    useEffect(() => {
        const targets = [cardScroll1.current, cardScroll2.current, cardScroll3.current];

        gsap.fromTo(
        targets,
        { x: 20, y: 0, opacity: 0 }, 
        {
            x: 0,
            opacity: 1,
            duration: 2,
            delay: 1,
            stagger: 1,
            scrollTrigger: {
            trigger: ".card-project-container",
            start: "top top",
            end: 'bottom bottom',
            scrub: 1,
        },
        }
        );
    }, []);

    useEffect(() => { 
        const handleEnter1 = () => {
            gsap.to(button1Ref.current,{
                duration: 0.5,
                x: 5,
                y: -20,
                ease: "power2.inOut",
            });
        };

        const handleLeave1 = () => {
            gsap.to(button1Ref.current, {
                duration: 0.5,
                x: 0,
                y: 0,
                ease: "power2.inOut",
            });
        };

        if(button1Ref.current) {
            button1Ref.current.addEventListener("mouseenter", handleEnter1);
            button1Ref.current.addEventListener("mouseleave", handleLeave1);
        }

        return () => {
            if(button1Ref.current) {
                button1Ref.current.removeEventListener("mouseenter", handleEnter1);
                button1Ref.current.removeEventListener("mouseleave", handleLeave1);
            }
        }
    }, []);

    useEffect(() => { 
        const handleEnter2 = () => {
            gsap.to(button2Ref.current,{
                duration: 0.5,
                x: 5,
                y: -20,
                ease: "power2.inOut",
            });
        };

        const handleLeave2 = () => {
            gsap.to(button2Ref.current, {
                duration: 0.5,
                x: 0,
                y: 0,
                ease: "power2.inOut",
            });
        };

        if(button2Ref.current) {
            button2Ref.current.addEventListener("mouseenter", handleEnter2);
            button2Ref.current.addEventListener("mouseleave", handleLeave2);
        }

        return () => {
            if(button2Ref.current) {
                button2Ref.current.removeEventListener("mouseenter", handleEnter2);
                button2Ref.current.removeEventListener("mouseleave", handleLeave2);
            }
        }
    }, []);

    useEffect(() => { 
        const handleEnter3 = () => {
            gsap.to(button3Ref.current,{
                duration: 0.5,
                x: 5,
                y: -20,
                ease: "power2.inOut",
            });
        };

        const handleLeave3 = () => {
            gsap.to(button3Ref.current, {
                duration: 0.5,
                x: 0,
                y: 0,
                ease: "power2.inOut",
            });
        };

        if(button3Ref.current) {
            button3Ref.current.addEventListener("mouseenter", handleEnter3);
            button3Ref.current.addEventListener("mouseleave", handleLeave3);
        }

        return () => {
            if(button3Ref.current) {
                button3Ref.current.removeEventListener("mouseenter", handleEnter3);
                button3Ref.current.removeEventListener("mouseleave", handleLeave3);
            }
        }
    }, []);

    return (
        <>
        <div className="project-container">
            <div className="project-text">
                <h1>Our Projects</h1>
                <br />
                <p>are very different in terms of priority, scale and complexity of implementation</p>
            </div>
        <div className="card-project-container">
            <div className="card-project" ref={cardScroll1}>
                <div className="card-project-text" ref={button1Ref}>
                    <h2>Emergency Aid. WAR 2022.</h2>
                    <p>providing food and medicine to the shelters and animals which lost their home and families due to the war</p>
                </div>
            </div>
            <div className="card-project-2" ref={cardScroll2}>
                <div className="card-project-text-2" ref={button2Ref}>
                    <h2>Non-commercial feed line</h2>
                    <p>construction of industrial production base where food for shelters will be produced on a free basis</p>
                </div>
            </div>
            <div className="card-project-3" ref={cardScroll3}>
                <div className="card-project-text-3" ref={button3Ref}>
                    <h2>Education and Control</h2>
                    <p>lectures on communication, organisation, and coordination of processes, control over the use of aid</p>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Project;