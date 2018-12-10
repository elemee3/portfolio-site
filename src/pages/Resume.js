import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <div className="page">
        <h4>Skills</h4>
        <p>JavaScript | ReactJS | Ruby on Rails | SQL | CLI | RESTful APIs | Agile Development</p>
        <h4>Experience</h4>
        <div className="resume">
          <div className="resume-left">
            <p><span className="bold">LEARN Academy</span>, San Diego, CA — Student</p>
            <p className="bold">OCT 2018 - JAN 2019</p>
            <ul>
              <li>Formalizing a self-instructed background and expanding programming skills over 500 coding hours, utilizing contemporary practices such as pair programming and test-driven development</li>
              <li>Designing and constructing decoupled full-stack web applications from conception to deployment, based primarily in JavaScript and Ruby on Rails</li>
              <li>Developing 10+ functional web apps of various complexity in 3 months, ranging from Tic-Tac-Toe to Cat Tinder (all available in <a href="https://github.com/elemee3">Github portfolio</a>)</li>
              <li>Teaching Assistant at HTML/CSS/JS Jumpstart weekend for new programmers</li>
            </ul>
          </div>

          <div className="resume-left">
            <p><span className="bold">Codecademy Intensive</span>, Remote — Student</p>
            <p className="bold">FEB 2018 - APR 2018</p>
            <ul>
              <li>Earned certification in Build Front-End Web Apps from Scratch 10-week course</li>
              <li>Rapidly learned ReactJS from a pure JavaScript/HTML/CSS background and developed two front-end apps including responsive design and calls to external APIs</li>
            </ul>
          </div>

          <div className="resume-left">
            <p><span className="bold">Dartmouth-Hitchcock Medical Center</span>, Lebanon, NH — Accounts Payable Specialist</p>
            <p className="bold">MAY 2017 - SEP 2018</p>
            <ul>
              <li>Utilized various software (ImageNow, Oracle PeopleSoft, Excel) to generate accurate, timely payments to vendors, ensuring continued delivery of goods and services</li>
              <li>Reimagined and documented multiple common procedures; designed and implemented a standardized training manual for the employee reimbursement software, Concur</li>
              <li>Earned Six Sigma Yellow Belt certification as a member of a team focused on improving the process of Electronic Data Interchange, which shifted manual processes spanning multiple departments to an automated system</li>
            </ul>
          </div>

          <div className="resume-left">
            <p><span className="bold">Various Small Businesses</span>, Grinnell, IA — Dining Room/Kitchen Manager</p>
            <p className="bold">SEP 2011 - FEB 2017</p>
            <ul>
              <li>Managed personal performance and inventory processes; developed relationships with employees, distributors, and key community players to collaborate and enhance the business</li>
              <li>Maintained a positive attitude during periods of stress; encouraged routine maintenance and regularly initiated process improvements</li>
            </ul>
          </div>
        </div>
        <h4>Education</h4>
        <div className="resume">
          <div className="resume-left">
            <p><span className="bold">Grinnell College</span>, Grinnell, IA — Bachelor’s Degree (German)</p>
            <p className="bold">SEP 2011 - MAY 2015</p>
            <ul>
              <li>Study Abroad in Berlin, Germany Fall Semester 2013; Spring Break 2015</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
