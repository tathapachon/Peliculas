
import { useDispatch, useSelector } from 'react-redux';
import { fetchById } from '../../actions/index';
import { useEffect , useState} from 'react';


export default function Detalle(props) {
  const dispatch = useDispatch();
  const [per, setPer] =useState([])
  const videogame = useSelector((state) => state.videogameDetail);

  useEffect(() => {
    dispatch(fetchById(props.match.params.id));
  }, [dispatch]);



/*for(let i=0;i<videogame.characters?.length;i++){
  
    fetch(videogame.characters[i]).then(response => response.json())
    .then(data => setPer(data))
    .catch(error => console.log(error))
   }
console.log(per)*/
  return (
    <div>
      {
        
        <div className="VideogameDetail">
           <p>{videogame.title}</p>
          <p>{videogame.release_date}</p>
          <p>{videogame.director}</p>
          <p>{videogame.producer}</p>
          <p>{videogame.characters}</p>
       
        </div>
      }
    </div>
  );
}
