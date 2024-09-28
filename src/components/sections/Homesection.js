import React from 'react';
import Photogallery from '../photogallery/Photogallery';

import youtube from '../../images/socials/youtube.png';
import instagram from '../../images/socials/instagram.png';
import facebook from '../../images/socials/facebook.png';
import whatsapp from '../../images/socials/whatsapp.png'
 // Assuming your styles are in this file

const HomeSection = () => {
  return (
    <div className="row mb-2">
        <div className="col-xs-12">
            <div className="card mt-2 mb-1">
                <div className="video-container" >
                    <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/YWpXkcD627g?autoplay=1&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&mute=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                </div>
                <div className="card-title">
                    Evolving Mind Body and Personality
                </div>
                <p className=''>
                Providing comprehensive early childhood education from for the next generation of innovators
                </p>
                <button className="applynow">
                    Apply Now
                </button>
            </div>
        </div>
        <div className="col-xs-12">
            <div className="card pb-2">
                <div className="card-title">
                    <h3>Toppers 2024-25</h3>
                </div>
                <div className="imagearea">
                    <img src={`${process.env.PUBLIC_URL}/images/toppers24.png`} alt="" className="imgtoppers"/>
                </div>
            </div>
        </div>
        <div className="col-xs-12">
            <div className="card pb-2">                
                <div className="imagearea">
                    <img src={`${process.env.PUBLIC_URL}/images/photo1.png`} alt="" className="photo"/>
                </div>
                <div className="card-title">
                    <h3>Our Vision</h3>
                </div> 
                <p>
                    New Angels Senior Secondary School is the first CBSE school in Pratapgarh.
                    Our vision is to be a leading institution in providing quality education 
                    to prepare students for the challenges of the future and contribute to the 
                    development of society.
                </p>   
            </div>
        </div>
        <div className="col-xs-12">
            <div className="card pb-2">                
                <div className="imagearea">
                    <img src={`${process.env.PUBLIC_URL}/images/photo2.png`} alt="" className="photo"/>
                </div>
                <div className="card-title">
                    <h3>Our Curriculum</h3>
                </div> 
                <p>
                Introducing Robotics for the first time only at  New Angels Senior Secondary School in Pratapgarh.
                Our new Robotics curriculum is designed to provide a well-rounded education that encourages critical thinking, creativity, and innovation, and prepares our students for success in a rapidly changing world. Incorporating Robotics in early childhood education is a must in a time where technology is Booming.
                </p>   
            </div>
        </div>
        <div className="col-xs-12">
            <div className="card">
                <Photogallery />
            </div>
        </div>
        <div className="col-xs-12">
            <div className="card mt-2 mb-2">
                <div className="card-title contact">
                    <h3>
                        Contact-Us
                    </h3>
                </div>
                <p>
                    We are excited to be accepting applications for the upcoming session! Download our Admission Form or Apply Online . We look forward to hearing from you
                </p>
                <button className="messageusonwhatsapp">
                    <img src={whatsapp} alt="" />
                    <span>Message us on Whatsapp</span>
                </button>
                <p>
                New Angels senior secondary school, Katra Road, Pratapgarh, Uttar Pradesh, India
                </p>
                <div className="card-title">
                    <h2>
                        Hours
                    </h2>
                </div>
            </div>
        </div>
        <div className="col-xs-12">
            <div className="card">
                <div className="card-title">
                    <h3>
                        Social
                    </h3>
                </div>
                <div class="socials">
                    <a href="#"><img src={instagram} alt="" /></a>
                    <a href="1"><img src={youtube} alt="" /></a>
                    <a href="2"><img src={facebook} alt="" /></a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HomeSection;
