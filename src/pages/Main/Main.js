import React from 'react'
import { Helmet } from 'react-helmet'

import Navbar from '../../components/Navbar/Navbar'
// import Footer from '../../components/Footer/Footer'
import Landing from '../../components/Landing/Landing'
import About from '../../components/About/About'
import Education from '../../components/Education/Education'
import Skills from '../../components/Skills/Skills'
import Experience from '../../components/Experience/Experience'
import Projects from '../../components/Projects/Projects'
import Achievement from '../../components/Achievement/Achievement'
import Services from '../../components/Services/Services'
// import Testimonials from '../../components/Testimonials/Testimonials'
// import Blog from '../../components/Blog/Blog'
import Contacts from '../../components/Contacts/Contacts'

import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Achievement />
            <Services />
            {/* <Testimonials /> */}
            {/* <Blog /> */}
            <Contacts />
            {/* <Footer /> */}
        </div>
    )
}

export default Main
