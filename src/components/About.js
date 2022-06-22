import React from 'react';
import api from '../assets/icons/api.svg' 
import html from '../assets/icons/html.png'
import css from '../assets/icons/css.png'
import java from '../assets/icons/java.svg.png' 
import cs from '../assets/icons/cs.png'
import Cl from '../assets/icons/Cl.png'
import clp from '../assets/icons/clp.jpg'

import Skillcard from './Skillcard';
const skills = [ 
    
    
    { 
     icon : html,
     title : <p><b>HTML <br/> </b>I have some basic Knowledge about html.I do some project for meself to use html</p> 
     
    }, 
    { 
        icon : css,
        title : <p><b>CSS <br/> </b>I have some basic Knowledge about CSS.I do some project for meself to use design in html use css</p> 
        
       }, 
       { 
        icon : java,
        title : <p><b>Java <br/> </b>I have some basic Knowledge about java.I do a project for versity regular class.The project is about medicine shop</p> 
        
       }, 
       { 
        icon : cs,
        title : <p><b>C# <br/> </b>I have some basic Knowledge about C#.png.I do a project for versity regular class.The project is about medicine shop</p> 
        
       }, 
       { 
     icon : Cl,
     title :<p><b>C<br/> </b>I have some basic Knowledge about C </p> 
     
    }, 


     {
         
        icon : clp, 
        title : <p><b>C++<br/> </b>I have some basic Knowledge about C++ </p> 

     }, ] 
        const About = () => {
             return ( 
             <div className="about"> 
             <h6 className="about__intro">
             I am a highly motivated computer science graduate eagerly looking
              forward to stepping out of my comfort zone for new professional
              challenges. My educational background endowed me with the
              necessary skill sets to approach a problem from various
              perspectives and get myself industryready. Currently, I am seeking
              for a growing and rewarding career in web development where I can
              apply my academic knowledge and technological skills
                   </h6>
              <div className="container about__container"> 
              <h6 className="about__heading">What I offer
              </h6> 
              <div className="row">
                  {
                      skills.map(skill =>
                        <Skillcard skill ={skill}/>
                        )
                  }


                   </div>
               </div>
                </div> ); 
                };
                export default About;