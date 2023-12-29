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
        <span className="skillTitle"> Technical Prowess </span>
        <span className="skillDesc">I am a creative and passionate Software Developer who enjoys leveraging technologies to deliver innovative solutions!</span>
        <div className="skillBars">
            <div className="skillBar">
                    <img src={SoftwareEngImg} alt="SoftwareEngImg" className="skillBarImg" />
                    <div className="skillBarText">
                        <h4>Software Engineering</h4>
                        <p>Java, python, C, SQL, MySQL, PostgreSQL, Oracle, MongoDB. </p>
                    </div>
            </div>
            <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h4>Web Designing</h4>
                        <p>HTML, CSS, Javascript, Angular JS, React JS, JSPsych, Email JS, PHP, Java, Spring Boot, Bootstrap.</p>
                    </div>
            </div>
            <div className="skillBar">
                    <img src={DataScienceDesign} alt="DataScienceDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h4>Data Science </h4>
                        <p>Machine Learning, AI, sklearn, SciPy, matplotlib, seaborn, NumPy, pandas.</p>
                    </div>
            </div>
            <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h4>UI/UX Design</h4>
                        <p> Figma, Adobe XD, Wireframing, Prototyping, User Research, Visual Communication.</p>
                    </div>
            </div>
            <div className="skillBar">
                    <img src={ToolsImg} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h4>Tools</h4>
                        <p> Visual Studio Code, GITHub, JIRA, Spring Tool Suite, BitBucket, SAP BW. </p>
                    </div>
            </div>
        </div>
        </section>
    )
}

export default Skills