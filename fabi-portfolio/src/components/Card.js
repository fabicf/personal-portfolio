// import NavBar from '../components/NavBar';
// https://tympanus.net/Development/HoverEffectIdeas/img/2.jpg

function Card({ imgSrc, title, subtitle, description, viewUrl }) {
    return (
      <div className="services-card col-sm-4 col-12 grid">
        {/* <figure className="effect-bubba">
          <img src={imgSrc}/>
          <figcaption>
            <h2>
              <span>{title}</span>
            </h2>
            <p>{description}</p>
            
            <a href={viewUrl}>View more</a>
          </figcaption>
        </figure> */}

        {/* <figure class="effect-oscar">
        <img src={imgSrc}/>
            <figcaption>
              <h2>Warm <span>{title}</span></h2>
              <p>{description}</p>
              <a href={viewUrl}>View more</a>
            </figcaption>     
          </figure> */}

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
  