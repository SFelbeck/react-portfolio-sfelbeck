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
                    <a href="https://github.com/SFelbeck/DreamTheme">Github Here</a><br></br>
                    <p>Dream Theme is an app that changes colors and fonts from a selection of stylsheets available in a local API. While currently localized it will help other applications create more customizable experiences for their users!</p>
                    <p>My role in this project focused heavily on the backend especially for login functionality.</p>
                    <p>The main Technology showcased in this project is Masonry for layout. We used a small local API to hold different style sheets so we could swap between them as needed.</p>
                </section>

                <section className="work-card">
                    <a href="https://jnbanks.github.io/Project1-Movie-Beverage/"><img className="back-pic" src={require("./assets/Start.png")} width="100%" height="300px" alt="Boozy Movies" /></a>
                    <h3 className="image-header">Boozy Movies</h3>
                    <a href="https://github.com/Jnbanks/Project1-Movie-Beverage">Github Here</a><br></br>
                    <p>Looking for a movie, and a drink? But don't know what to watch/drink? Boozy Movies Combines two existing APIs to randomly pick a movie and cocktail for you!</p>
                    <p>Technologies showcased include The Cocktail Database and The Movie Database. We used randomized API calls divided by existing settings of the APIs such as movie genre.</p>
                </section>

                <section id="last-card" className="work-card">
                    <a href="https://sfelbeck.github.io/Quiz_SFelbeck/"><img className="back-pic" src={require("./assets/victory.png")} alt="Sci-fi quiz" width="100%" height="300px"/></a>
                    <h3 className="image-header">Sci-fi quiz</h3>
                    <a href="https://github.com/SFelbeck/Quiz_SFelbeck">Github Here</a><br></br>
                    <p>A quiz app project that loops through some questions about science fiction and provides a score based on remaining time.</p>
                    <p>A very basic take on setting game states. This app works by starting a timer on quiz start and turning it off and resetting on quiz completion or failure. The app then tracks remaining time as a score locally.</p>
                </section>

                <section id="last-card" className="work-card">
                    <a href="https://sfelbeck.github.io/Weather_Dashboard_SFelbeck/"><img className="back-pic" src={require("./assets/after.png")} alt="Weather" width="100%" height="300px"/></a>
                    <h3 className="image-header">Weather Dashboard</h3>
                    <a href="https://github.com/SFelbeck/Weather_Dashboard_SFelbeck">Github Here</a><br></br>
                    <p>Functional weather app that connects to a weather api and displays current data for cities searched by user</p>
                    <p>This weather app uses calls to an existing weather database to pull current and forecasted weather data as sorted by city, with previous searches stored in an array with no limit.</p>
                </section>
        </section>
    )
}