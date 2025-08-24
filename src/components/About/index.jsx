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
              Motivated and detail-oriented aspiring Test Engineer with a strong understanding of the Software Development Life Cycle (SDLC) and
Software Testing Life Cycle (STLC). Skilled in manual testing, basic automation testing, test case design, defect tracking, and QA
tools such as Jira. Eager to contribute to delivering high-quality, reliable software by applying industry-standard testing methodologies.
Seeking an entry-level Test Engineer position to leverage technical skills, analytical thinking, and a passion for continuous learning..            </p>
          
          </div>
        </div>
      </section>
  )
}

export default About
