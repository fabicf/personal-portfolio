import NavBar from "../components/NavBar";
import Card from "../components/Card";

function Home() {
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
      imgSrc: "https://tympanus.net/Development/HoverEffectIdeas/img/2.jpg",
      title: "Bubba3",
      subtitle: "my app",
      description: "Bubba likes the sun",
      viewUrl: "#",
    },
  ];

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="services-cards-container row">
          {cards.map((card) => (
            <Card
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
