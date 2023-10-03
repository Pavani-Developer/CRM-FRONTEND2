import React from 'react';
import '../styles/Coursesdetails.css';
import pythonimg from "../assets/DEVOPSfeatures.jpg";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import BannerImage from "../assets/pythonback.jpg";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Dev = () => {
  return (
    <>
    <div className='power-body' style={{ backgroundImage: `url(${BannerImage})` }}>
    <div className='python-content' >
      <div className='main-content'>
      <div className='content-details'>
      <h1>What is DEVOPS?</h1>
      <br/>
      <p>Devops  (development & operations) is an endeavor software development express used to mean a type of agile connection amongst development & IT . V Cube is one of the best institute for DevOps training in Hyderabad, We offers the comprehensive and in-depth training in Devops.Devops is an endeavor software development express used to mean a type of agile connection amongst development & IT operations.Join Devops Training in KPHB 
      Devops Training in kphb Duration:30 days</p>
      
      </div>
      <div className='image'>
      <img  src={pythonimg} alt="image"/>
      <p>Image Credit:<a> https://www.slideshare.net/ssuserfa1446/about-devops-in-simple-steps</a></p>
      </div>
  
      </div>
      </div>
      <div className='course-highlets'>
        <h1>Key Highlights</h1>
        <p>
        
          <CheckCircleOutlineIcon/> 100+ hours of learning <br/>

          <CheckCircleOutlineIcon/> Real-time industry professionals curate the course.<br/>

          <CheckCircleOutlineIcon/> Internships and live projects<br/>

          <CheckCircleOutlineIcon/> Dedicated staff of placement experts<br/>

          <CheckCircleOutlineIcon/> Placement is guaranteed 100 percent Assistance<br/>

          <CheckCircleOutlineIcon/> 28+ Skills That Are Useful in the Workplace<br/>

          <CheckCircleOutlineIcon/> Trainers with a minimum of 12 years of experience<br/>

          <CheckCircleOutlineIcon/> Videos and back-up classes<br/>

          <CheckCircleOutlineIcon/> Subject Matter Experts Deliver Guest Lectures<br/>
        </p>
      </div>
      <div className='course-discription'>
      <h1>Why Devops Training is so popluar?</h1>
        <p>Under a DevOps model, development and operations teams are no longer “siloed.” Sometimes, these two teams are merged into a single team where the engineers work across the entire application lifecycle, from development and test to deployment to operations, and develop a range of skills not limited to a single function.

        In some DevOps models, quality assurance and security teams may also become more tightly integrated with development and operations and throughout the application lifecycle. When security is the focus of everyone on a DevOps team, this is sometimes referred to as DevSecOps.

        These teams use practices to automate processes that historically have been manual and slow. They use a technology stack and tooling which help them operate and evolve applications quickly and reliably. These tools also help engineers independently accomplish tasks (for example, deploying code or provisioning infrastructure) that normally would have required help from other teams, and this further increases a team’s velocity to know more about the Devops get your Devops training in kukatpally </p>
      </div>
      <div className='syllabus'>
        <h1>Curriculum for the Devops</h1>
        <hr/>
      <details >
        <summary>Introduction to Dev-ops</summary>
          <ul>
            <li>Why Dev-ops?</li>
            <li>Evolution of Software Development Waterfall Model</li>
            <li>Agile Methodology What is Dev-ops?</li>
            <li>Dev-ops Lifecycle Phrases Continuous Development Continuous Testing Continuous Integration Continuous Deployment</li>
            <li>Configuration Management Tools Containerization Tools Continuous Monitoring</li>
            <li>Dev-ops Tools</li>
          </ul>
    </details>
    <hr/>
    <details >
        <summary>Introduction to Cloud Computing (AWS)</summary>
          <ul>
            <li>Why AWS cloud </li>
            <li>What is cloud</li>
            <li>Public, private, hybrid clouds IAAS, SAAS, </li>
            <li>PAAS cloud models AWS VPC</li>
            <li>EC2 Essentials</li>
            <li>AMI, Instance Types, EBS Volumes </li>
            <li>Snapshots Security groups</li>
            <li>Key pairs</li>
            <li>LAB: Launch and connect to an EC2 instance</li>
          </ul>
    </details>
    <hr/>
    <details >
        <summary>LINUX BASICS - LAB</summary>
        <ul>
          <li>Basic Linux/Unix commands</li>
          <li>Changing file permissions and ownership Types of links soft and hard link</li>
          <li>Filter commands</li>
          <li>Start and stop services</li>
          <li>Find and kill the process with id and name Package installation using RPM and yum</li>
        </ul>
    </details>
    <hr/>
    <details >
        <summary>Continuous Development</summary>
        <ul>
          <li>Introduction of version control systems Centralized Version Control System (CVCS)</li>
          <li>Distributed Version Control System (DVCS) What is GIT</li>
          <li>Features of GIT & Workflow</li>
          <li>How GIT plays a vital role in Devops? Commands and Operations in GIT Initialize</li>
          <li>Add Commit Pull Push</li>
          <li>Branching Merging Rebasing</li>
          <li>How to install GIT in windows Introduction to GitHub</li>
          <li>Git Vs GitHub</li>
          <li>LAB: Create Repository in GitHub</li>
          <li>Create Branches and perform Operations Cloning and Forking GitHub Repository</li>
          <li>GIT Commands and configuration Realtime scenario usage of Git & GitHub</li>
          </ul>  
    </details>
    <hr/>
    <details >
        <summary>BUILD Tool</summary>
          <ul>
            <li>Concept & LABDistributed Version Control System (DVCS) What is GIT</li>
            <li>Features of GIT & Workflow</li>
            <li>How GIT plays a vital role in Devops? Commands and Operations in GIT Initialize</li>
            <li>Add Commit Pull Push</li>
            <li>Branching Merging Rebasing</li>
            <li>How to install GIT in windows Introduction to GitHub</li>
            <li>Git Vs GitHub</li>
            <li>LAB:<ul>
              <li>Create Repository in GitHub</li>
              <li>Create Branches and perform Operations Cloning and Forking GitHub Repository</li>
              <li>GIT Commands and configuration Realtime scenario usage of Git & GitHub</li>
              <li>Install Apache Maven</li>
              <li>Understand Maven dependencies and control Maven classpath</li>
              <li>Concept & LABDistributed Version Control System (DVCS) What is GIT</li>
              <li>Features of GIT & Workflow</li>
              <li>How GIT plays a vital role in Devops? Commands and Operations in GIT Initialize</li>
              <li>Add Commit Pull Push</li>
              <li>Branching Merging Rebasing</li>
              <li>How to install GIT in windows Introduction to GitHub</li>
              </ul></li>
          </ul>
    </details>
    <hr/>
    <details >
        <summary>Continuous Integration</summary>
          <ul>
            <li>Introduction to Continuous Integration What is Jenkins and its History Advantages of Jenkins</li>
            <li>Install Java</li>
            <li>Jenkins Architecture Overview of Jenkins UI LAB:</li>
            <li>Jenkins Installation & Plugins Setup and configuration Security in Jenkins Notification system</li>
            <li>Create and Run our first Jenkins Job</li>

          </ul>
    </details>
    <hr/>
    <details >
        <summary>Continuous Deployment</summary>
          <ul>
            <li>Containerization</li>
            <li>What is Virtualization What is Containerization</li>
            <li>Advantages of Containerization over Virtualization Introduction to DockerBenefits of Docker</li>
            <li>Custom images Docker Files Docker Compose</li>
            <li>Terminology in Docker compose</li>
            <li>LAB:
              <ul>
                <li>Installation of Docker Downloading Docker images.</li>
                <li>Uploading the images in Docker Registry Understanding the Docker containers Running</li>
                <li>commands in Docker container. Running multiple Docker containers.</li>
                <li>Docker Image Creation Creating a custom image. Publishing the custom image. Accessing containers</li>
                <li>Writing a Docker File Installing the Docker compose</li>
                <li>Build a web app using Docker compose. Deploy Jenkins on docker container</li>
                <li>Configuration Management</li>
                <li>Ansible Introduction What is Ansible?</li>
                <li>Why do we need Ansible? Advantages of using Ansible What Ansible can do?</li>
                <li>Ansible Architecture & Terminology Ansible in DevOps</li>
                <li>Real-Life usage of Ansible</li>
                <li>Inventory Files(Host, Dynamic, Static) Playbooks</li>
                Modules in Ansible
              </ul>
            </li>
            <li>LAB:
              <ul>
                <li>Ansible Installation & Configuration Ansible client and server configuration</li>
                <li>Running commands in Ansible Management Node Writing playbooks using YAML</li>
                <li>Deploy web applications using Ansible Playbook Provisioning ec2 instance using Ansible Playbook</li>
                </ul>
            </li>
          </ul>
    </details>
    <hr/>
    <details >
        <summary>Continuous Monitoring</summary>
          <ol>
            <li>Why We Need Continuous Monitoring? What Is Continuous Monitoring?</li>
            <li>What Is Nagios? Nagios Components LAB:</li>
            <li>Install & Configure Nagios Core</li>
            <li>Create a binary out of Nagios source code</li>
            <li>Add A Remote Server Using NRPE (Nagios Remote Plugin Executor).</li>
          </ol>
    </details>
    <hr/>
    <details >
        <summary>Tomcat Web Server</summary>
          <ul>
            <li>Installation and configuration Tomcat Manager</li>
            <li>Application Management Application Deployment LAB:</li>
            <li>Install & configure Tomcat container Set Access & Roles</li>
            <li>Launch Tomcat on a browser</li>
          </ul>
    </details>
    <hr/>
    <details >
        <summary>HTTPD Web Service</summary>
          <ul><li>Installation of Apache Configuration of Apache Static Pages</li>
          <li>Dynamic Pages</li>
          <li>LAB:
            <li>Install httpd webserver</li>
          </li>
          </ul>
    </details>
    <hr/>
    <details >
        <summary>Mini Devops Project</summary>
        <ol><li>LAB:
        Create a customized CI/CD Devops pipeline which will automatically build & deploy to a container</li></ol>
    </details>
    <hr/>
    <details >
        <summary>What are the DevOps job opportunities in Hyderabad?</summary>
        <p>Hyderabad is one of India’s top IT cities. It is rightly known as the HITEC city because it is home to some of the world’s leading information technology companies. As a result, there are many excellent DevOps job opportunities in Hyderabad, making it a wise decision to pursue a career in DevOps. You can increase your chances of getting hired by obtaining a DevOps certification in Hyderabad. Get Devops Training in Hyderabad  now.</p>
    </details>
    <hr/>
    <details >
        <summary>Why should you learn online DevOps training in Hyderabad?</summary>
        <p>You’ll become an expert in automation, scripting, communication, coding, collaboration, and DevOps tools after earning your DevOps certification in Hyderabad. The DevOps course training prepares aspirants to develop both soft and technical skills, which are highly valued by employers when interviewing candidates.If your looking for devops training and placement in hyderabad enroll now.</p>
    </details>
    <hr/>
    <details >
        <summary>Will there be any real-time projects at V Cube?</summary>
        <p>We will Provide Real Time Projects and also Provide Assistance to for the completions Projects </p>
    </details>
    </div>
    <div className='extra'>
    <h1>Description of Devops Training </h1>
      <br/>
      <p>DevOps is an IT cultural revolution sweeping through today’s organisations that want to develop, design, test, and deploy software more quickly and effectively. DevOps training in Hyderabad will enable you to master key DevOps principles, tools, and technologies such as automated testing, Infrastructure as a Code, Continuous Integration/Delivery, and more.
      Software development (Dev) and IT operations (Ops) are combined in DevOps (Ops). Its goal is to shorten the systems development life cycle and provide high-quality software delivery on a continuous basis. DevOps is an add-on to Agile software development; in fact, several aspects of DevOps came from the Agile methodology.
      Academics and practitioners have not developed a universal definition for the term “DevOps” other than it being a cross-functional combination (and a portmanteau) of the terms and concepts for “development” and “operations.”  DevOps is typically defined by three key principles: shared ownership, workflow automation, and rapid feedback.
      DevOps is defined as “a set of practises intended to reduce the time between committing a change to a system and the change being placed into normal production, while ensuring high quality,” according to Len Bass, Ingo Weber, and Liming Zhu, three computer science researchers from the CSIRO and the Software Engineering Institute.The term is, however, used in a variety of contexts. DevOps is a combination of specific practises, culture change, and tools at its most successful. Enroll now in V cube if your looking for devops training institutes in hyderabad.</p>
      </div>
      </div>
    </>
  )
}

export default Dev
