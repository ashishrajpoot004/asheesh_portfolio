import React, { useEffect, useRef } from 'react'
import './Services.css'
import { FaPaintBrush } from 'react-icons/fa';
import { BsCodeSquare } from 'react-icons/bs';
import { TfiWrite } from 'react-icons/tfi';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';



const Services = () => {

  const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const el = container.current
    gsap.fromTo(".services__header",{
      opacity:0,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:el,
      }
    }
  )

  gsap.fromTo(".service",{
    y:-50,
    opacity:0,
  },
  {
    x:0,
    opacity:1,
    duration:1,
    ScrollTrigger:{
      trigger:el,
      start:"-100% bottom",
      end:"bottom 20%",
      scrub:true
    }
  }
)
  },[])

  return (
    <section id="services" ref={container}>
      <div className="section__wrapper services__wrapper">
        <div className="section__header center">
          <h2 className="primary__title">Services</h2>
          <p className="text__muted description">
            I transform your ideas, and consequently your desires, into a
            distinctive web project that both inspires you and captivates your customers.
          </p>
        </div>
        <div className="services__group">
          <article className="service">
            <div className="service__top">
              <div className="icon__container">
                <FaPaintBrush className='icon' />
              </div>
              <h3 className="title">UI/UX Design</h3>
            </div>
            <div className="service__middle">
              <p className="text__muted description">
                Our UI/UX design services transform ideas into intuitive,
                engaging experiences. We specialize in user-centered design,
                crafting interfaces that blend functionality with seamless
                navigation. From wireframing to prototyping, our process
                ensures every detail enhances user satisfaction and achieves

              </p>
            </div>
            <div className="service__bottom">
              <button className="btn btn__primary">Read more</button>
            </div>
          </article>
          {/* End UI/UX */}



          <article className="service" style={{'--color-primary':'var(--color-success)'}}>
            <div className="service__top">
              <div className="icon__container">
                <BsCodeSquare className='icon' />
              </div>
              <h3 className="title">FullStack </h3>
            </div>
            <div className="service__middle">
              <p className="text__muted description">
                the MERN stack, a powerful combination of 
                technologies for building dynamic web applications.
                <br />
                MongoDB ( NoSQL database) <br />
                Next.js (server framework) <br />
                React.js (client-side JavaScript framework) <br />
                Node.js (server runtime enviroment) <br />

              </p>
            </div>
            <div className="service__bottom">
              <button className="btn btn__primary">Read more</button>
            </div>
          </article>
          {/* End fullstack */}



          <article className="service" style={{'--color-primary':'aqua'}}>
            <div className="service__top">
              <div className="icon__container">
                <TfiWrite className='icon' />
              </div>
              <h3 className="title">DSA</h3>
            </div>
            <div className="service__middle">
              <p className="text__muted description">
                Data structure refer to the various ways data can
                be organized, stored, and manipulated within a
                computer program. In Java, the standard library
                provides a rich set of built-in data
                structures that allow efficient handling of data.
                <br />
                Algorithms are step-by-step procedures for solving
                specific problems. They rely on data structures for
                efficient execution.

              </p>
            </div>
            <div className="service__bottom">
              <button className="btn btn__primary">Read more</button>
            </div>
          </article>
          {/*DSA*/}


        </div>
      </div>
    </section>
  )
}

export default Services