//imports react as well as the render functions for the header and footer, and finally applies the universal styling file
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../App.css'

//a function that renders the html elements and exports the default version
function MainPage(){
    return(
        <body>
            {/* inserts the header render function here */}
            <Header />
            <main>
                <section class="underheader">
                    <img src={require("./assets/banner.png")} alt='Ink Splash' width="100%" height="300px"/>
                    <img class="headshot" src={require("./assets/60100563936__D1A41A9A-F3C0-4440-85FF-E12C2A9B3511.jpg")} alt='Stefan'/>
                </section>

                <section id="about-me" class="about-me">
                    <h1>About Me</h1>
                    <p>
                        Hi! My name is Stefan, and welcome to my professional portfolio! There isnt much here right now but boy oh boy there will be!
                    </p>
                </section>
            </main>
            {/* inserts the footer render function here */}
            <Footer />
        </body>
    )
}

export default MainPage;