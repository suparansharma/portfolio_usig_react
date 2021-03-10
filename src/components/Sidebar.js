import React from 'react';
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import mightycoder from '../assets/mightycoder.svg'
import resume from '../assets/resume.pdf'

const Sidebar = () => {
    const handleEmailMe = ()=>{
        window.open("mailto:suparansharmap@gmail.com")
    }
    return (
        <div className="sidebar">
            <img src={mightycoder} alt="avatar" className="sidebar__avatar"/>
            <div className="sidebar__name">Suparan Sharma <span>Pranto</span></div>
            <div className="sidebar__item sidebar__title">Student</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar_item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon "/>Download Resume

                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="https://www.facebook.com/suparan.dada/"><img src={facebook} alt="facebook" className="sidebar__icon mr-3"/></a>
                <a href="https://www.instagram.com/suparan_sharma_pranto/"><img src={instagram} alt="instagram" className="sidebar__icon"/></a>
                
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/suparansharma"><img src={github} alt="github" className="sidebar__icon mr-3" /></a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3"/>
                    Dhaka,Bangladesh</div>
                <div className="sidebar__item">suparansharmap@gmail.com</div>
                <div className="sidebar__item">01789085098/01854232578</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email me</div>

        </div>
    );
};

export default Sidebar;