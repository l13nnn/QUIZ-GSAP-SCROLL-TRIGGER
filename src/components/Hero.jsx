import React from "react";
import "../styles/Hero.css";

function Hero() {
    return (
        <>
        <div className="hero-container">
            <h1>We are</h1>
            <p>team of like-minded people, socially active companies, media personalities, volunteers who help low-income shelters and foster carers to support homeless animals.</p>
            <br/>
            <h1>Our primary goal</h1>
            <p>is to provide animals with the most necessary things - food, medicine, and urgent needs for the livelihood of shelters. We believe in our power and the power of conscious citizens who care about the environment and their health, who understand the importance of helping each other, especially our little friends. Growth begins with your care for your loved ones. Animals are one of the closest creatures to humans who remain with us throughout our lives. We all know the healing power of warmth, grace, and big loving eyes.</p>
            <br/>
            <div className="quote">
                <blockquote>
                "Animals need to have friends. Just like humans."
                <br />
                - James Herriot, All Creatures Great and Small
                </blockquote>
            </div>
            <br />
            <p>Who else if not we should support our younger brothers, especially in difficult times? Let's be friends!</p>
        </div>
        </>
    );
}

export default Hero;