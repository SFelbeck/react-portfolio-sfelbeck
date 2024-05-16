//imports react as well as the render functions for the header and footer, and finally applies the universal styling file
import React from 'react';
import '../App.css'

//a function that renders the html elements and exports the default version
function MainPage(){
    return(
        <body>
            <main>
                <section class="underheader">
                    <img src={require("./assets/banner.png")} alt='Ink Splash' width="100%" height="300px"/>
                    <img class="headshot" src={require("./assets/60100563936__D1A41A9A-F3C0-4440-85FF-E12C2A9B3511.jpg")} alt='Stefan'/>
                </section>

                <section id="about-me" class="about-me">
                    <h1>About Me</h1>
                    <p>
                        Hi! My name is Stefan, and welcome to my professional portfolio! I am an aspiring UX designer.
                        With experience in graphic design, animation, programming, as well as game development. I hope to use my many experiences in the pursuit of a career in UX design!
                </section>
                <section id="tech-skills" class="about-me">
                    <h1>Technical Skills</h1>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>NodeJS</li>
                        <li>SQL</li>
                    </ul>
                </section>
            </main>
        </body>
    )
}

export default MainPage;