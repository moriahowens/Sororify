import React from 'react';
import './AboutUs.css';
import amithaheadshot from './amithaheadshot.jpg';
import juliaheadshot from './juliaheadshot.jpg';
import moriahheadshot from './moriahheadshot.jpeg';
import shayheadshot from './shayheadshot.jpeg';
import mayaheadshot from './mayaheadshot.jpeg';


const AboutUs = () => {
    return (
        <div className = "AboutUs">
            <h1>About Us</h1>
            <h2>Our Why</h2>
            <p>“Sororify” seeks to streamline the Villanova Panhellenic Recruitment process. At Villanova roughly 600 girls rush eight sororities in the first round of recruitment known as Sisterhood Round. The process of “matching” girls to each sorority’s existing members based on like qualities takes hours to ensure that potential members have a good experience. All of the tedious work done by hand still doesn’t guarantee the PNMs will be matched with their compatible counterparts in sororities.</p>
            <p>Our algorithm bridges the gap by ensuring the best possible match between PNMS and current chapter members the sorority that fits them the best.</p>
            <h2>About Our Team</h2>
            <p></p>
            <p>Front End Team: Shay McDowell and Amitha Soundararajan</p>
             <div className="team-images">
             <img src={shayheadshot} alt="Shay's headshot" className="circle-image" />
             <img src={amithaheadshot} alt="Amitha's headshot" className="circle-image" />
             </div>
            <p> Back End Team: Julia Foy,Moriah Owens, Maya McFadden </p>
            <div className="team-images">
             <img src={juliaheadshot} alt="Julia's headshot" className="circle-image" />
             <img src={moriahheadshot} alt="Moriah's headshot" className="circle-image" />
             <img src={mayaheadshot} alt="Mayas's headshot" className="circle-image" />
            </div>
        </div>
    );
};

export default AboutUs;