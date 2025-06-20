import React,{useEffect, useRef} from 'react'
import './About.css'
import { profile2 } from '../../images'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';



const About = () => {


  const container = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
      const el = container.current;
      gsap.fromTo(".about__container",{
        scale:0.7
      },{
        scale:1,
        ScrollTrigger:{
          trigger:el,
          scrub:true,
        }
      }
    )
    },[])
  



  return (
      <section id="about" ref={container} >
        <div className="section__wrapper about__container">
          <div className="me__container blur-effect">
            <div className="photo__container" >
              <img src={profile2} alt="" />
            </div>
          </div>
          <div className="section__header">
            <h2 className="primary__title">About Me</h2>
            <h1 className="title">I am <span className="color__primary">Asheesh Kumar</span></h1>
            <p className="text__muted description">
              Experienced Full Stack Developer with a passion for creating dynamic, intuitive, and
              responsive applications. Proficient in multiple programming languages and frameworks,
              as well as database design and management. Strong problem-solving and analytical skills,
              and a track record of delivering high-quality code on time and on budget.
            </p>
            <p className=' text-red-600'> Hiii</p>
          </div>
        </div>
      </section>
  )
}

export default About