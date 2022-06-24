//imports react as well as the render functions for the header and footer, and finally applies the universal styling file
import React from "react";

import '../App.css'

//a function that renders the html elements and exports the default version
export default function Project() {
    return(
        <section id="work" className="work">
                <h1 className="work-header">Work</h1>

                <section id="main" className="work-card">
                    <a href="https://dreamtheme.herokuapp.com/login"><img className="back-pic" src={require("./assets/DreamTheme.png")} width="100%" height="300px" alt="Dream Theme" /></a>
                    <h3 className="image-header">Dream Theme</h3>
                </section>

                <section className="work-card">
                    <a href="https://jnbanks.github.io/Project1-Movie-Beverage/"><img className="back-pic" src={require("./assets/Start.png")} width="100%" height="300px" alt="Boozy Movies" /></a>
                    <h3 className="image-header">Boozy Movies</h3>
                </section>

                <section className="work-card">
                    <a href="https://sfelbeck.github.io/Quiz_SFelbeck/"><img className="back-pic" src={require("./assets/victory.png")} alt="Sci-fi quiz" width="100%" height="200px"/></a>
                    <h3 className="image-header">Sci-fi quiz</h3>
                </section>

                <section className="work-card">
                    <a href="https://sfelbeck.github.io/Weather_Dashboard_SFelbeck/"><img className="back-pic" src={require("./assets/after.png")} alt="Weather" width="100%" height="200px"/></a>
                    <h3 className="image-header">Weather Dashboard</h3>
                </section>
        </section>
    )
}