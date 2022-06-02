import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../App.css'

export default function Contact(){
    return(
        <section id="contact-me" className="contact-me">
            <Header />
            <h1 className="contact-header">Contact Me</h1>
        
            <a href="mailto: stefanfelbeck@gmail.com">stefanfelbeck@gmail.com</a>
            <a href="tel: 425-503-0527">425-503-0527</a>
            <a href="https://github.com/SFelbeck">GitHub</a>
            <a href="https://www.linkedin.com/in/stefan-felbeck-11655b98/">LinkedIn</a>
            {/* note the pdf format is not supporter meaning the resume link does not currently work */}
            <a href="./assets/resume.pdf">Resume</a>
            <Footer />
        </section>
    )
}