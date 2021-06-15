import Card from "../components/Card";
import Icon from "../components/Icon";
import {useState} from "react";

function Home() {

  const  [showExperience, setShowExperience] = useState(false);

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
      description: "C#, asp.NET, Razor Pages, JS, APIs",
      viewUrl: "#",
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
      url: "#portfolio",
      iconClass: "fas fa-briefcase",
    },
  ];

  const onClickShowHide = () => {
    setShowExperience(!showExperience);
    console.log(showExperience);
  };

  return (
    <div>
      <div className="container">
        <div className="home container-fluid d-flex flex-column justify-content-center align-items-center">
          <div className="text-center mb-4">
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
            <h3>Web Developer</h3>
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

        <div className="row">
          <div className="text-center col-md-7">
            <p>
              I am a Software Developer looking for real world challenges. After
              a career changing, I had ten months of fully immersion on a
              intensive course which prepared me to to be in a company where I
              can contribute with a developers team, as well learn from it.{" "}
            </p>
            <p>I am open to Web, Front End and Full Stack Developer roles.</p>
            <div class="p-5">
              <form method="get" onclick="window.open('cv.pdf')">
                <button
                  type="submit"
                  className="btn btn-outline-secondary btn-download-cv"
                >
                  Download CV
                </button>
              </form>
            </div>
          </div>
          <div className="text-center col-md-5">
            <img
              className="img-profile"
              src="images/small-profile1.PNG"
              alt="profile-img"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 text-center">
            <h3>My Skills</h3>
            <p>
              Front-end: HTML, CSS, JavaScript, Bootstrap, React, jQuery
              Back-end: Java, Node JS, PHP, C# .NET Database: SQL, MySQL, SQL
              Server Miscellaneous: OOP, Git, Jira, Slack, Agile/Scrum
              Methodology, MS office
            </p>
            click to see my portfolio
          </div>
          <div className="col-md-6 text-center">
            <h3>Education</h3>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-md-6 text-center">
            <h3>Experience</h3>
            <button onClick={onClickShowHide}>Show/Hide</button><br />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nobis.</span>
          </div>
          <div className="col-md-6 text-center">
            <h3>Education</h3>
          </div>
        </div> */}

        

        <div className="row education-exp">
          <div class="row">
            <div class="education-board col-lg-6 col-md-12 col-sm-12">
              <div class="education-board-inside my-4">
                <div class="d-flex justify-content-between">
                  <h4>
                    <a href="https://www.johnabbott.qc.ca/" class="school-link">
                      John Abbott College
                    </a>
                  </h4>
                  <div>
                    <i class="education-icon fas fa-graduation-cap fa-2x"></i>
                  </div>
                </div>
                <div>
                  <h5>Internet Programming and Developement - IPD, 2021</h5>
                </div>
                {showExperience && (
                  <>
                    <p>
                      The IPD is consider a Full Stack Development Program that
                      encompasses the major frameworks and software architectures on
                      the Internet today! It is a full-time and intensive program
                      offered by one of the best CEGEP's in Montreal, QC. It last 10
                      months of intensive studies plus two months of internship.
                    </p>
                    <p>
                      Student Award: Dean's List - Fall 2020 Semester: Recognition
                      of the achievement of full-time students who have earned an
                      average of 80% or more for the semester.
                    </p>
                  </>
                )}
              </div>

              <div class="education-board-inside my-4">
                <div class="d-flex justify-content-between">
                  <h4>
                    <a href="http://utfpr.edu.br/" class="school-link">
                      Federal University of Technology
                    </a>
                  </h4>
                  <div>
                    <i class="education-icon fas fa-graduation-cap fa-2x"></i>
                  </div>
                </div>
                <div>
                  <h5>
                    Ms Non-thesis in Chemical and Biotechnological Processes,
                    2018
                  </h5>
                </div>
                <p>
                  Student Award: Canada Government ELAP - One of 400 students
                  selected from all over Latin America for a 6-Month project in
                  partnership with{" "}
                  <a href="https://www.concordia.ca/" class="school-link">
                    Concordia University
                  </a>
                  .{" "}
                </p>
              </div>
              <div class="education-board-inside my-4">
                <div class="d-flex justify-content-between">
                  <h4>
                    <a
                      href="https://www.unioeste.br/portal/"
                      class="school-link"
                    >
                      Western Parana State University
                    </a>
                  </h4>
                  <div>
                    <i class="education-icon fas fa-graduation-cap fa-2x"></i>
                  </div>
                </div>
                <div>
                  <h5> BSc./Teaching License in Chemistry, 2016</h5>
                </div>
              </div>
            </div>
            <div class="education-board col-lg-6 col-md-12 col-sm-12">
              <div class="education-board-inside my-4">
                <div class="d-flex justify-content-between">
                  <h4>Self Employed</h4>
                  <div>
                    <i class="education-icon fas fa-briefcase fa-2x"></i>
                  </div>
                </div>
                <div>
                  <h5>Web Developer</h5>
                </div>
                <p>
                  Development of websites using technologies as HTML, CSS,
                  Bootstrap, Javascript, Node.Js, React.
                </p>
              </div>
              <div class="education-board-inside my-4">
                <div class="d-flex justify-content-between">
                  <h4>
                    <a
                      href="https://www.alliedfittings.com/template.php?rpage=home&l=en"
                      class="school-link"
                    >
                      Allied International Pipes & Fittings
                    </a>
                  </h4>
                  <div>
                    <i class="education-icon fas fa-briefcase fa-2x"></i>
                  </div>
                </div>
                <div>
                  <h5>Shipping Coordinator - May to Oct 2020</h5>
                </div>
                <p>
                  Customer Service arranging pickups, order entry, processing of
                  inventory receipts for inbound stock. Issuing of product
                  certification, daily updating of inventory in the company WMS
                  and office related tasks.
                </p>
              </div>
              <div class="education-board-inside my-4">
                <div class="d-flex justify-content-between">
                  <h4>
                    <a href="http://www.tncliving.com" class="school-link">
                      Town and Country Living
                    </a>
                  </h4>
                  <div>
                    <i class="education-icon fas fa-briefcase fa-2x"></i>
                  </div>
                </div>
                <div>
                  <h5>Shipping Receiving Coordinator - Jun 2019 to Feb 2020</h5>
                </div>
                <p>
                  Responsible for cross-border shipping documents and
                  phone/email support for national and international customers
                  including the largest clothing retail company in the US.
                  Processing of orders and office related tasks.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="services-cards-container row" id="portfolio">
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
    </div>
  );
}

export default Home;
