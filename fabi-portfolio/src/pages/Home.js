import Card from "../components/Card";
import Icon from "../components/Icon";
import { useState } from "react";

function Home() {
  const [showEd1, setShowEd1] = useState(false);
  const [showEd2, setShowEd2] = useState(false);
  const [showEd3, setShowEd3] = useState(false);
  const [showEd4, setShowEd4] = useState(false);
  const [showEx1, setShowEx1] = useState(false);
  const [showEx2, setShowEx2] = useState(false);
  const [showEx3, setShowEx3] = useState(false);
  const [showEx4, setShowEx4] = useState(false);

  const cards = [
    {
      imgSrc: "images/project-2.JPG",
      title: "Tea",
      subtitle: "Station",
      description: "My first html, css, js website",
      viewUrl: "https://fabicf-tea-station.vercel.app/",
    },
    {
      imgSrc: "images/project-1.JPG",
      title: "APP",
      subtitle: "Weather",
      description: "HTML, CSS, JS, ACCUWEATHER API, QUOTES API",
      viewUrl: "https://fabicf-weather.vercel.app/",
    },
    {
      imgSrc: "images/project-3.PNG",
      title: "FreshGoods",
      subtitle: "Ecommerce",
      description: "C#, asp.NET, Razor Pages, JS, API",
      viewUrl: "https://github.com/fabicf/freshgoods-ecommerce",
    },
    {
      imgSrc: "images/project-4.JPG",
      title: "BlueSky",
      subtitle: "Real Estate",
      description: "C#, asp.NET, Razor Pages, JS, API",
      viewUrl: "http://blueskyrealestate.ipd24.ca/",
    },
    {
      imgSrc: "images/project-5.JPG",
      title: "Hotel",
      subtitle: "CRM",
      description: "PHP Slim, MeekroDB, Twig, Monolog, AJAX, Google Maps API",
      viewUrl: "https://github.com/fabicf/Ominigold-HMS",
    },
    {
      imgSrc: "images/project-6.JPG",
      title: "Portfolio",
      subtitle: "Website",
      description: "React.js, Bootstrap React, Javascript",
      viewUrl: "https://github.com/fabicf/personal-portfolio",
    },
  ];

  const icons = [
    {
      url: "https://www.linkedin.com/in/ffabiola/",
      iconClass: "fab fa-linkedin-in",
      target: "_blank",
    },
    {
      url: "https://github.com/fabicf",
      iconClass: "fab fa-github",
      target: "_blank",
    },
    {
      url: "mailto:fabiolacezarfaria@gmail.com",
      iconClass: "far fa-envelope",
      target: "_blank",
    },
    {
      url: "#about",
      iconClass: "fas fa-user",
    },
    {
      url: "#portfolio",
      iconClass: "fas fa-images",
    },
    {
      url: "#experience",
      iconClass: "fas fa-briefcase",
    },
  ];

  const onClickShowHideEd1 = () => {
    setShowEd1(!showEd1);
  };

  const onClickShowHideEd2 = () => {
    setShowEd2(!showEd2);
  };

  const onClickShowHideEd3 = () => {
    setShowEd3(!showEd3);
  };

  const onClickShowHideEd4 = () => {
    setShowEd4(!showEd4);
  };
  const onClickShowHideEx1 = () => {
    setShowEx1(!showEx1);
  };

  const onClickShowHideEx2 = () => {
    setShowEx2(!showEx2);
  };

  const onClickShowHideEx3 = () => {
    setShowEx3(!showEx3);
  };

  const onClickShowHideEx4 = () => {
    setShowEx4(!showEx4);
  };

  return (
    <div>
      <div>
        <div className="home container-fluid d-flex flex-column justify-content-center align-items-center">
          <div className="text-center mb-4"></div>
          <div>
            <img
              className="img-profile"
              src="images/small-profile1.PNG"
              alt="profile-img"
            />
          </div>

          <div>
            <h1>Fabiola Faria</h1>
          </div>
          <div>
            <h2>Software Developer</h2>
          </div>
          <div className="icons d-flex">
            {icons.map((icon) => (
              <Icon
                key={icon.url}
                target={icon.target}
                url={icon.url}
                iconClass={icon.iconClass}
              />
            ))}
            <Icon />
          </div>
        </div>

        <div className="row about-me p-5" id="about">
          <div className="col-lg-6 col-md-12 text-center px-5 pt-5">
            <h3>About me</h3>
            <p>
              I am a Software Developer looking for real world challenges. After
              a career changing from Science to IT, I had ten months of fully
              immersion on a intensive program which prepared me to to be in a
              company where I can contribute with a developers team, as well to
              learn from it.
            </p>
            <div className="d-flex justify-content-center py-3">
              <a
                href="faria-fabi-cv.pdf"
                target="_blanket"
                className="btn btn-outline-light"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 text-center px-5 pt-5">
            <h3>My Skills</h3>
            <p className="text-left px-5 ">
              <span><b>Front-end:</b> HTML, CSS, JavaScript, Bootstrap, React, Ajax, jQuery{" "}
              <br /></span>
              <span><b>Back-end:</b> C# .NET, WPF, XAML, Java, NodeJS, REST API, PHP <br /></span>
              <span><b>Database:</b> SQL, MySQL, SQL Server <br /></span>
              <span><b>Tools:</b> Git, Jira, GitLab, Bitbucket, Balsamiq Wireframe, Trello <br /></span>
              <span><b>Miscellaneous:</b> OOP, Agile/Scrum Methodology, WMS, ImageJ <br /></span>
              <span><b>Basic:</b> MS Office - Word, Excel, Power Point, Outlook <br /></span>
            </p>
          </div>
        </div>

        <div className="text-center p-5 portfolio-session" id="portfolio">
          <h3 className="h3-dark">Portfolio</h3>
          <div className="services-cards-container row px-5 mx-5">
            {cards.map((card) => (
              <Card
                key={card.title}
                imgSrc={card.imgSrc}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                viewUrl={card.viewUrl}
              />
            ))}
          </div>
        </div>

        <div className="row educ-exp p-5" id="experience">
          <div className="education-board col-lg-6 col-md-12 col-sm-12">
            <div className="col-md-12 text-center">
              <h3>Education</h3>
            </div>
            <div className="education-board-inside my-4">
              <div className="d-flex justify-content-between">
                <h5>
                  <a
                    href="https://www.johnabbott.qc.ca/"
                    className="school-link"
                  >
                    John Abbott College
                  </a>
                </h5>
                <div>
                  <i
                    onClick={onClickShowHideEd1}
                    className="education-icon fas fa-plus education-icon-anim"
                  ></i>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <h6>AEC Internet Programming and Developement, 2021</h6>
              </div>
              {showEd1 && (
                <>
                  <p>
                    The IPD is a Full Stack Development Program that encompasses
                    the major frameworks and software architectures on the
                    Internet today! It is a full-time and intensive program
                    offered by one of the best CEGEP's in Montreal, QC. It last
                    10 months of intensive studies plus two months of
                    internship.
                  </p>
                  <p>
                    Student Award: Dean's List - Fall 2020 Semester: Recognition
                    of the achievement of full-time students who have earned an
                    average of 80% or more for the semester.
                  </p>
                </>
              )}
            </div>

            <div className="education-board-inside my-4">
              <div className="d-flex justify-content-between">
                <h5>
                  <a
                    href="https://www.coursera.org/specializations/ui-ux-design"
                    className="school-link"
                  >
                    California Institute of the Arts/Coursera
                  </a>
                </h5>
                <div>
                  <i
                    onClick={onClickShowHideEd2}
                    className="education-icon fas fa-plus"
                  ></i>
                </div>
              </div>
              <div>
                <h6>UI/UX Design Specialization - In Progress</h6>
              </div>
              {showEd2 && (
                <p>
                  After study all stages of a software development, I felt that
                  I needed to learn more about Front end to be able to
                  understand the the user requirements and experiences, as well
                  the UX/UI development process, which lead me to register on
                  this course that I am currently enrolled and in progress.
                </p>
              )}
            </div>

            <div className="education-board-inside my-4">
              <div className="d-flex justify-content-between">
                <h5>
                  <a href="http://utfpr.edu.br/" className="school-link">
                    Federal University of Technology
                  </a>
                </h5>
                <div>
                  <i
                    onClick={onClickShowHideEd3}
                    className="education-icon fas fa-plus"
                  ></i>
                </div>
              </div>
              <div>
                <h6>
                  Ms Non-thesis in Chemical and Biotechnological Processes, 2018
                </h6>
              </div>
              {showEd3 && (
                <p>
                  Student Award: Canada Government ELAP - One of 400 students
                  selected from all over Latin America for a 6-Month project in
                  partnership with{" "}
                  <a href="https://www.concordia.ca/" className="school-link">
                    Concordia University
                  </a>
                  .
                </p>
              )}
            </div>
            <div className="education-board-inside my-4">
              <div className="d-flex justify-content-between">
                <h5>
                  <a href="https://www.unioeste.br/portal/" className="school-link">
                    Western Parana State University
                  </a>
                </h5>
                <div>
                  <i
                    onClick={onClickShowHideEd4}
                    className="education-icon fas fa-plus"
                  ></i>
                </div>
              </div>
              <div>
                <h6> BSc./Teaching License in Chemistry, 2016</h6>
              </div>
              {showEd4 && (
                <p>
                  During my undergraduate I participated as volunteer tutor for
                  high school project as well for a elementary tutor project. I
                  also worked as a teaching and researcher assitant, developing
                  team work and leadership skills.
                </p>
              )}
            </div>
          </div>
          <div className="education-board col-lg-6 col-md-12 col-sm-12">
            <div className="col-md-12 text-center">
              <h3>Experience</h3>
            </div>
            <div className="education-board-inside my-4">
              <div className="d-flex justify-content-between">
                <h5>Freelancer</h5>
                <div>
                  <i
                    onClick={onClickShowHideEx1}
                    className="education-icon fas fa-plus"
                  ></i>
                </div>
              </div>
              <div>
                <h6>Web Developer</h6>
              </div>
              {showEx1 && (
                <p>
                  Development of websites using technologies as HTML, CSS,
                  Bootstrap, Javascript, Node.Js and React.Js.
                </p>
              )}
            </div>
            <div className="education-board-inside my-4">
              <div className="d-flex justify-content-between">
                <h5>
                  <a
                    href="https://www.alliedfittings.com/template.php?rpage=home&l=en"
                    className="school-link"
                  >
                    Allied International Pipes & Fittings
                  </a>
                </h5>
                <div>
                  <i
                    onClick={onClickShowHideEx2}
                    className="education-icon fas fa-plus"
                  ></i>
                </div>
              </div>
              <div>
                <h6>Shipping Coordinator - May to Oct 2020</h6>
              </div>
              {showEx2 && (
                <p>
                  Customer Service arranging pickups, order entry, processing of
                  inventory receipts for inbound stock. Issuing of product
                  certification, daily updating of inventory in the company WMS
                  and office related tasks.
                </p>
              )}
            </div>
            <div className="education-board-inside my-4">
              <div className="d-flex justify-content-between">
                <h5>
                  <a href="http://www.tncliving.com" className="school-link">
                    Town and Country Living
                  </a>
                </h5>
                <div>
                  <i
                    onClick={onClickShowHideEx3}
                    className="education-icon fas fa-plus"
                  ></i>
                </div>
              </div>
              <div>
                <h6>Shipping Receiving Coordinator - Jun 2019 to Feb 2020</h6>
              </div>
              {showEx3 && (
                <p>
                  Responsible for cross-border shipping documents and
                  phone/email support for national and international customers
                  including the largest clothing retail company in the US.
                  Processing of orders and office related tasks.
                </p>
              )}
            </div>
            <div className="education-board-inside my-4">
              <div className="d-flex justify-content-between">
                <h5>Previous Work Experiences</h5>
                <div>
                  <i
                    onClick={onClickShowHideEx4}
                    className="education-icon fas fa-plus"
                  ></i>
                </div>
              </div>
              <div>
                <h6>Chemist and High School Teacher - 2016 to 2019</h6>
              </div>
              {showEx4 && (
                <p>
                  After graduate in BSc. in Chemistrym worked as chemist
                  researcher and Quality Control Chemist, as well as High School
                  and College Teacher for the Government of Brazil.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <footer className="container-fluid">
        <div className="d-flex justify-content-center pt-3">
          <p>Website developed with <i className="fas fa-heart"></i> by Fabiola Faria &copy; 2021</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
