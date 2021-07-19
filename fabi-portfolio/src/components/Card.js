// import NavBar from '../components/NavBar';
// https://tympanus.net/Development/HoverEffectIdeas/img/2.jpg

function Card({ imgSrc, title, subtitle, description, viewUrl }) {
    return (
      <div className="services-card col-lg-4 col-md-6 col-sm-12 grid d-flex justify-content-center my-1">    

        <figure className="effect-milo">
        <img src={imgSrc} alt={""}/>
            <figcaption>
              <h2>{title} <span>{subtitle}</span></h2>
              <p>{description}</p>
              <a href={viewUrl} target="_blank" rel="noreferrer">View</a>
            </figcaption>     
          </figure>
      </div>
    );
  }
  
  export default Card;
  