import React from 'react';
import '../styles/Coursesdetails.css';
import pythonimg from "../assets/pythonback1.jpg";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import BannerImage from "../assets/pythonback.jpg";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Python = () => {
  return (
    <>
    <div className='power-body' style={{ backgroundImage: `url(${BannerImage})` }}>
    <div className='python-content' >
      <div className='main-content'>
      <div className='content-details'>
      <h1>What is Python?</h1>
      <br/>
      <p>Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed.</p>
      </div>
      <div className='image'>
      <img  src={pythonimg} alt="image"/>
      <p>Image Credit: https://starship-knowledge.com/<br/>awesome-python-data-science-libraries</p>
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
      <h1>Description for the Full Stack Python</h1>
        <h3><AutoFixHighIcon/><u>Why full stack python is so popular</u></h3>
        <p>Welcome to the Python and Django Full Stack Web Developer V Cube! In this Course We Cover Everything you need to know to build a website using Python, Django, and many more Web technologies!<br/>

        <FiberManualRecordIcon/><strong>Python</strong>: It would be used to process the user request in background.<br/>

        <FiberManualRecordIcon/><strong>Django</strong>: It is the web framework which coordinates all these components to make a web application.<br/>

        <FiberManualRecordIcon/><strong>MySQL</strong>: It is the open-source database to store the data permanently for long time.<br/>

        <FiberManualRecordIcon/><strong>HTML CSS</strong>: It would be use to prepare beautiful webpages with numerous styles.<br/>

        <FiberManualRecordIcon/><strong>Java Script</strong>: It is a client -side scripting language, which would be used to perform client -side validations<br/>

        <FiberManualRecordIcon/><strong>GIT</strong>: It is the repository to maintain the versions of your source code.</p>
      </div>
      <div className='syllabus'>
        <h1>Curriculum for the Full stack python</h1>
        <hr/>
      <details >

        <summary>Pre workout</summary>
          <ol>
            <li>Introduction to programing</li>
          </ol>
    </details>
    <hr/>
    <details >
        <summary>Introduction</summary>
          <ol><li> Learn about the course</li></ol>
    </details>
    <hr/>
    <details >
        <summary>Course Set-Up and Installation</summary>
          <ol><li>Setup your computer for the course!</li></ol>
    </details>
    <hr/>
    <details >
        <summary>Python Basics</summary>
          <ol>
            <li>Tokens</li>
            <li>Formatted Strings</li>
            <li>Operators
              <ul>
                <li>Athematic</li>
                <li>Logical</li>
                <li>Comparison</li>
                <li>Identity</li>
                <li>Membership</li>
                <li>Bitwise</li>
                <li>Short-Circuit Evolution</li>
              </ul>
            </li>
            <li>Data types</li>
            <li>Conditional flow Statements</li>
            <li> Loops
              <ul>
                <li>While</li>
                <li>While – else</li>
                <li>For</li>
                <li>For – else</li>
                <li>Nested loops</li>
                <li>Iterables</li>
              </ul>
            </li>
            <li>Inbuilt Data Structures
              <ul>
                <li>List</li>
                <li>Tuple</li>
                <li>Set</li>
                <li>Dictionary</li>
                <li>List comprehension</li>
                <li>Dictionary Comprehension</li>
                <li>Unpacking Operator</li>
              </ul>
            </li>
            <li>Strings</li>
            <li>Functions
              <ul>
                <li>Defining functions</li>
                <li>Arguments</li>
                <li>Types of Functions</li>
                <li>Key word arguments</li>
                <li>Default Arguments</li>
                <li>Nested Functions</li>
                <li>List of args(*args)</li>
                <li>Dictionary of args(**kwargs)</li>
                <li>Lambda</li>
                <li>Generators</li>
                <li>Decorators</li>
                <li>Recursive</li>
                <li>Map</li>
                <li>Filter</li>
                <li>Zip</li>
                <li>Enumerate</li>
              </ul>
            </li>
            <li>File I/O</li>
            <li>Scope</li>
            <h3>OOP's</h3>
            <li>OOPs Vs Procedure Oriented programming</li>
            <li>Oops concepts
              <ul>
                <li>Class</li>
                <li>Object</li>
                <li>Inheritance</li>
                <li>Polymorphism</li>
                <li>Abstraction</li>
                <li>Encapsulation</li>
              </ul>
            </li>
            <li>Constructor</li>
            <li>Class Vs Instance attributes</li>
            <li>Class Vs Instance methods</li>
            <li>Static methods</li>
            <li>Magic methods</li>
            <li> Destructor</li>
            <li>Data hiding</li>
            <li>Operator Overloading</li>
            <li>Method Overriding</li>
            <li>Abstract Base Class</li>
            <li>MRO</li>
            <li>Exception Handling
              <ul>
                <li>Exceptions</li>
                <li>Handling Exceptions</li>
                <li>Custom Exceptions</li>
                <li>With Statement</li>
                <li>Raising Exceptions</li>
              </ul>
            </li>
            <li>Modules
              <ul>
                <li>Creating modules</li>
                <li>Compiled python files</li>
                <li>Packages</li>
                <li>Sub package</li>
                <li>Dir function</li>
              </ul>
            </li>
          </ol>
    </details>
    <hr/>
    <details >
      <hr/>
        <summary>Python Standard Library</summary>
        <hr/>
          <ol>
            <li>Regular expressions</li>
            <li>OS</li>
            <li>SYS</li>
            <li>MySql.Connector</li>
            <li>Threading</li>
            <li>PDB</li>
            <li>Random</li>
            <li>Logging</li>
            <li> Unittest</li>
          </ol>
    </details>
    <hr/>
    <details >
        <summary>External Libraries (optional):</summary>
          <ol>
            <li>NumPy</li>
            <li>Pandas</li>
            <li>Matplotlib</li>
            </ol>
    </details>
    <hr/>
    <details >
        <summary>Django Framework:</summary>
          <ol>
            <li> Introduction</li>
            <li>Setup development environment</li>
            <li>Getting started with Django</li>
            <li>Creating an application.</li>
            <li>Views layer</li>
            <li>URL mapping</li>
            <li>Template layer</li>
            <li>MVT Architecture</li>
            <li>Http methods</li>
            <li>Models
              <ul>
                <li>Creating migrations</li>
                <li>Running migrations</li>
              </ul>
            </li>
            <li>MySQL
              <ul>
                <li>Connecting to MySQL</li>
                <li>Using MySQL in Django</li>
                <li>Basic MySQL commands</li>
              </ul>
            </li>
            <li>Model Inheritance</li>
            <li>ORM
              <ul>
                <li>Django ORM</li>
                <li>QuerySets</li>
                <li>Retrieving objects</li>
                <li>Filtering Objects</li>
                <li>Q Objects</li>
                <li>F Objects</li>
                <li>Aggregating Objects</li>
                <li>Annotating Objects</li>
                <li>Grouping Data</li>
                <li>Creating Objects</li>
                <li>Updating Objects</li>
                <li>Deleting Objects</li>
                <li>Transactions</li>
                <li>Executing Raw SQL Queries</li>
              </ul>
            </li>
            <li>Debugging Toolbar</li>
            <li>Django Template Language (DTL)</li>
            <li>Template inheritance</li>
            <li>Form processing
              <ul>
                <li>Django forms</li>
                <li>Model forms</li>
              </ul>
            </li>
            <li>Cookies handling</li>
            <li>Image Processing</li>
            <li>Django Admin
              <ul>
                <li>Setting Up Admin Site</li>
                <li>Registering modules</li>
                <li>Customizing list page</li>
                <li>Adding filtering to the list page</li>
                
                </ul>
            </li>
            <li>Django REST Framework
              <ul>
                <li>Installing Rest Framework</li>
                <li>Creating API Views</li>
                <li>Creating Sterilizers</li>
                <li>Serializing objects</li>
                <li>Deserializing objects</li>
              </ul>
            </li>
            <li>Authentication & Authorization</li>
            <li>Static files</li>
            <li>Pagination</li>
            <li>Signals</li>
            <li>Dynamic URL’s</li>
            <li>Fuction Based Views vs Class Based Views
              <ul>
                <li>HTML</li>
                <li>Advanced HTML</li>
                <li>CSS</li>
                <li>Java Script</li>
                <li>Bootstrap</li>
                <li>GIT</li>
              </ul>
            </li>
          </ol>
    </details>
    <hr/>
    <details >
        <summary>What you will Learn?</summary>
          <ol>
            <li>Create a fully functional web site using the Full-Stack with Django</li>
            <li>Learn how to use HTML to create website content</li>
            <li>Use CSS to create beautifully styled sites</li>
            <li>Use JavaScript to interact with sites on the Front-End</li>
            <li>Learn how to take advantage of Bootstrap to quickly style sites</li>
            <li>Understand HTTP requests</li>
            <li>Learn the power of Python to code out your web application</li>
            <li> Implement a full Models-Views-Templates structure for your site </li>
            <li>Mainly interview Skills.</li>
          </ol>
    </details>
    <hr/>
    <details >
        <summary>Who is the course for?</summary>
          <ol>
            <li>Complete Beginners</li>
            <li>Professionals looking to bridge gaps in their knowledge</li>
          </ol>
    </details>
    <hr/>
    <details >
        <summary>MySQL Database</summary>
          <ol>
            <li>Importance of Database</li>
            <li>DDL
              <ul>
                <li>Create</li>
                <li>Alter</li>
                <li>Drop</li>
                <li>Truncate</li>
              </ul>
            </li>
            <li>DML
              <ul>
                <li>Insert</li>
                <li>Update</li>
                <li>Delete</li>
                </ul>
            </li>
            <li>TCL
              <ul>
              <li>Commit</li>
              <li> rollback</li>
              </ul>
            </li>
            <li>DCL
              <ul>
                <li>Grant</li>
                <li>Revoke</li>
              </ul>
            </li>
            <li>DQL
              <ul>
                <li>Select</li>
              </ul>
            </li>
            <li>Constraints
              <ul>
                <li>Primary key</li>
                <li>Unique</li>
                <li>Check</li>
                <li>Not null</li>
                <li>Foreign Key</li>
              </ul>
            </li>
            <li>Clauses</li>
            <li>Operators</li>
            <li>Single Row Functions</li>
            <li>Group Functions</li>
            <li>Joins</li>
            <li>Functions</li>
            <li>Stored Procedures</li>
            <li>Triggers</li>
          </ol>
    </details>
    <hr/>
    <details >
        <summary>Frontend Technologies(Basics)</summary>
          <ol>
            <li>HTML</li>
            <li>CSS</li>
            <li>Java Script</li>
            <li>Bootstrap Templates</li>
          </ol>
    </details>
    <hr/>
    <details >
        <summary>GIT Repository</summary>
          <ol>
            <li>Toggle Content</li>
          </ol>
    </details>
    <hr/>
    <details >
        <summary>Data Structures & Algorithms for some extent</summary>
          <ol><li>Toggle Content</li></ol>
    </details>
    <hr/>
    <details >
        <summary>Live Project</summary>
        <ol><li>Toggle Content</li></ol>
    </details>
    <hr/>
    <details >
        <summary>Project Deployment</summary>
        <ol><li>Toggle Content</li></ol>
    </details>
    <hr/>
    <details >
        <summary>Mock Interviews</summary>
        <ol><li>Toggle Content</li></ol>
    </details>
    <hr/>
    <details >
        <summary>Weekly Tests</summary>
        <ol><li>Toggle Content</li></ol>
    </details>
    </div>
      </div>
    </>
  )
}

export default Python
