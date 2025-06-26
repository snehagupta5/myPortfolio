import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Hero from './component/Hero'
import About from './component/About'
import Skills from './component/Skills'
import Services from './component/Services'
import Projects from './component/Projects'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {

  return (
    <div className="App  text-white scroll-smooth h-full w-full overflow-x-hidden">
      <Header />

      <main>
        <section id="hero" >
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contacts">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
