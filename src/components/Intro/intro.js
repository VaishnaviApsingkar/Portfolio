import React from 'react';
import './intro.css';
import ProfileImg from '../../assets/Profile.jpg';
import { Link } from 'react-scroll';
// import btnImg from '../../assets/hireme.png';
import SggsImg from '../../assets/sggs.png';
import IupuiImg from '../../assets/iupui.jpg';
import WorkImg from '../../assets/work.png';
import EducationImg from '../../assets/education.png';
import TcsImg from '../../assets/Tcs.jpg';

const Intro = () => {

    return (
        <section id="intro">
        <div className='introSect'>
            <div className="profileImg">
                <img src={ProfileImg} alt="Profile" className="myimage" />
            </div>
            <div className="introContent">
                <span className="hello">Welcome!</span>
                <span className="introText">I'm <span className="introText1">Vaishnavi</span><br/></span>
                <span className='introText1'>I bring creativity to the digital realm!</span>
                
                <p className='introPara'><br/>Passionate software engineer with a knack for problem <br/>solving  and a love for clean, efficient code.</p>
                <p className='introPara'>Currently pursuing masters in Computer Science from <br/> Purdue School of Science, IUPUI.</p>

                {/* <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/>Hire Me</button></Link> */}
                <button className="hellobtn"><a  href="mailto:vaishnaviapsingkar@gmail.com">Say Hello</a></button>
            </div>
            
        </div> 
            
        <div>
            <h2 className="eduExpHead">Education and Experience</h2>
        </div>
            <br/>
            <div className='Professional'>
                <h3 className='headings'>Education</h3>
                <br/>
                <div className='edurow'>
                    {/*<div className='eduimage'>
                         <img src={EducationImg} className='worknEduImg'></img>  
                        
                    </div>*/}
                    {/* <div className='education'> */}
                        <div className='edunworkbar'>
                            <img src={IupuiImg} className='worknEduImg'></img>
                            <div className='workText'>
                                <h4>Purdue School of Science, IUPUI</h4>
                                <p>Master of Science | Computer and Information Science</p><p>Aug 2023 - Present</p>
                            </div>
                        </div>
                        <div className='edunworkbar'>
                            <img src={SggsImg} className='worknEduImg'></img>
                            <div className='workText'>
                                <h4>SGGS Institute of Engineering and Technology, Nanded</h4>
                                <p>Bachelor of Science | Computer Science</p><p>August 2017 - May 2021</p>
                            </div>
                        </div>
                    {/* </div> */}
                </div>    
                <br/>
                <h3 className='headings'>Experience</h3>
                <br/>
                <div className='exprow'>   
                        {/* if want to add image instead of experience text , use foll code
                         <div className='eduimage'>  
                            {/* <img src={WorkImg} className='worknEduImg'></img> 
                            
                        </div> */}
                        <div className='edunworkbar'>
                            <img src={TcsImg} className='worknEduImg'></img>
                            <div className='workText'>
                                <h4>Tata Consultancy Services</h4>
                                <p>Software Development Engineer</p><p>June 2021 - November 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
        
        </section>

    )
}

export default Intro;