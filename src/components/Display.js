import React from 'react';

function mainPage(){
    return(
        <body>
            {/* <header class="header">
            h1>Stefan Felbeck</h1>
        
            <nav>
            <a href="#about-me">About Me</a>
            <a href="#work">Work</a>
            <a href="#contact-me">Contact Me</a>
            <a href="./public/assets/resume.pdf">Resume</a>
        </nav>
    </header> */}

    <main>
        <section class="underheader">
            <img src="./assets/assets/banner.png" width="100%" height="300px"/>
            <img class="headshot" src="./assets/assets/60100563936__D1A41A9A-F3C0-4440-85FF-E12C2A9B3511.jpg"/>
        </section>

        <section id="about-me" class="about-me">
            <h1>About Me</h1>
            <p>
                Hi! My name is Stefan, I am an aspiring UX designer and programmer! Here you can find my works related to Web development!
            </p>
        </section>

        {/* <section id="work" class="work">
            <h1>Work</h1>

            <section id="main" class="work-card">
                <a href="https://dreamtheme.herokuapp.com/login"><img class="back-pic" src="./assets/assets/Start.png" width="100%" height="300px" alt="Dream Theme" /></a>
            </section>

            <section class="work-card">
                <a href="https://jnbanks.github.io/Project1-Movie-Beverage/"><img class="back-pic" src="./assets/assets/Start.png" width="100%" height="300px" alt="Boozy Movies" /></a>
                <h3 class="image-header">Boozy Movies</h3>
            </section>

            <section class="work-card">
                <a href="https://sfelbeck.github.io/Quiz_SFelbeck/"><img class="back-pic" src="./assets/assets/victory.png" alt="Sci-fi quiz" width="100%" height="200px"/></a>
                <h3 class="image-header">Sci-fi quiz</h3>
            </section>

            <section class="work-card">
                <a href="https://sfelbeck.github.io/Weather_Dashboard_SFelbeck/"><img class="back-pic" src="./assets/assets/after.png" alt="Weather" width="100%" height="200px"/></a>
                <h3 class="image-header">Weather Dashboard</h3>
            </section>

        </section> */}
    </main>

    {/* <section id="contact-me" class="contact-me">
        <h1>Contact Me</h1>
        
        <a href="mailto: stefanfelbeck@gmail.com">stefanfelbeck@gmail.com</a>
        <a href="tel: 425-503-0527">425-503-0527</a>
        <a href="https://github.com/SFelbeck">GitHub</a>
        <a href="https://www.linkedin.com/in/stefan-felbeck-11655b98/">LinkedIn</a>
        <a href="./assets/assets/resume.pdf">Resume</a>
    </section> */}

    {/* <footer>
        <p>Portfolio by Stefan Felbeck</p>
    </footer> */}
</body>
    )
}

export default mainPage;