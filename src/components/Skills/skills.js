import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import DataScienceDesign from '../../assets/data-science-design.png';
import SoftwareEngImg from '../../assets/software.png';
import ToolsImg from '../../assets/tools.png';

const Skills = () => {
    return (
        <section id='skills'>
        <span className="skillTitle">Connecting Future</span>
        <span className="skillDesc">I am a creative and passionate Software Developer who enjoys leveraging technologies to deliver innovative solutions!</span>
        <div className="skillBars">
            <div className="skillBar">
                    <img src={SoftwareEngImg} alt="SoftwareEngImg" className="skillBarImg" />
                    <div className="skillBarText">
                        <h4>Software Engineering</h4>
                        <p>SQL, PostgreSQL, Java, python, C. </p>
                    </div>
            </div>
            <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h4>Web Designing</h4>
                        <p>HTML, CSS, Javascript, Angular JS, React JS, PHP, Java Spring Boot</p>
                    </div>
            </div>
            <div className="skillBar">
                    <img src={DataScienceDesign} alt="DataScienceDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h4>Data Science </h4>
                        <p>Machine Learning using python, Eclipse, Anaconda, Jupyter</p>
                    </div>
            </div>
            <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h4>UI/UX Design</h4>
                        <p> Figma, Adobe XD</p>
                    </div>
            </div>
            <div className="skillBar">
                    <img src={ToolsImg} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h4>Tools</h4>
                        <p> Visual Studio, GITHub </p>
                    </div>
            </div>
        </div>
        </section>
    )
}

export default Skills