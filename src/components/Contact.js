//imports react as well as the render functions for the header and footer, and finally applies the universal styling file
import React from "react";
import '../App.css'

//a function that renders the html elements and exports the default version
export default function Contact(){
    return(
        <section id="contact-me" className="contact-me">
            <h1 className="contact-header">Contact Me</h1>
        
            <a href="mailto: stefanfelbeck@gmail.com">stefanfelbeck@gmail.com</a>
            <a href="tel: 425-503-0527">425-503-0527</a>
            <a href="https://github.com/SFelbeck">GitHub</a>
            <a href="https://www.linkedin.com/in/stefan-felbeck-11655b98/">LinkedIn</a>
            {/* note the pdf format is not supported meaning the resume link does not currently work */}
            <a href="https://docs.google.com/document/d/1xDGVRFLm5enuwFq7ob28L5Gz1HOMwsym/edit">Resume</a>
        </section>
    )
}