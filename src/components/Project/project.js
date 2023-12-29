import React from "react";
import './project.css';
import Project1 from '../../assets/emeo.png';
import Project9 from '../../assets/lance.jpg';
import Project4 from '../../assets/nutriboost.jpg';
import Project2 from '../../assets/classroom.jpg';
import Project3 from '../../assets/data1.jpg';

 
const Project = () => {
    const projects = [
        { id: 1, image: Project1, title: 'EMEO', description: 'Event Management E-Office (EMEO) is a web application that serves as a one stop solution for all the event management needs of event managers. ', skills:'AngularJS, HTML, CSS, PHP, MySQL' },
        { id: 2, image: Project2, title: 'E-Classroom', description: 'E-classroom is a Learning Management System(LMS) developed to facilitate a virtual classroom for teachers to create, distribute and grade assignments.', skills: 'MYSQL, PHP' },
        { id: 3, image: Project3, title: 'Direct Marketing Optimization', description: 'Optimized the marketing campaign to strategically improve the user subscription. Used Logistic Regression, NCC, Random Forest models to predict the user subscription outcome. ' , skills: 'Python, sklearn, SciPy, matplotlib, seaborn'},
        { id: 4, image: Project4, title: 'Nutriboost', description: 'NutriBoost is a web-application designed to help users plan daily food intake as per health requirements.', skills: 'AngularJS, Java, SpringBoot, PostgreSQL' },

      ];
    return(
    <section id='project'>
         

    {/* <div className="projectsContainer"> */}
        <h2 className="projectsTitle"> My Projects </h2>
        <span className="projectsDesc"> 
            I take pride in paying attention to the details. I have worked on below projects.
        </span>
        <br/>
        <br/>
        <div className="projectCards">
            {projects.map((project) => (
            <div key={project.id} className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front" >
                         <img src={project.image} alt="" className="projectImg" /> 
                        <center><h1>{project.title}</h1></center>
                    </div>
                    <div className="flip-card-back">
                        {/* <h1>{project.title}</h1> */}
                        <h4>{project.description}</h4>
                        <br/>
                        <p classname='skilltext'>{project.skills}</p>
                    </div>
                </div>
            </div>
        ))}
        </div>
        
    {/* </div> */}
    </section>
    )
}

export default Project;