import "./Card.scss"

export default function Card({ title , release_date,director,producer}) {

    return (
      <div className="movie">
        
        
          <p>{title}</p>
          <p>{release_date}</p>
          <p>{director}</p>
          <p>{producer}</p>
        
      </div>
    );
  }