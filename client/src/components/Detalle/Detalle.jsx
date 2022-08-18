
import { useDispatch, useSelector } from 'react-redux';
import { fetchById } from '../../actions/index';
import { useEffect , useState} from 'react';
import axios from "axios"
import Characters from '../Characters/Characters';


export default function Detalle(props) {
  const dispatch = useDispatch();
  const [per, setPer] =useState([])
  const movie = useSelector((state) => state.movieDetail);

  useEffect(() => {
    dispatch(fetchById(props.match.params.id));
  }, [dispatch]);


let arrayPer = []
arrayPer=movie.characters
  setTimeout(()=>{
    arrayPer=movie.characters   
    /*const getPeople= async ()=>{
       for(let i =0;i< arrayPer.length;i++){
      const res= await axios.get(arrayPer[i]) 
      setPer(res.data)
    } }
       getPeople()*/
       Promise.all(arrayPer.map(axios.get))
.then(nuevo_arreglo => {
  nuevo_arreglo.forEach(result => {
    console.log(result.data);
    setPer(result.data)
  });
});
  },10000)
  





console.log("personaje",per.name)




  return (
    <div>
      {
        
        <div className="movie">
           <p>{movie.title}</p>
          <p>{movie.release_date}</p>
          <p>{movie.director}</p>
          <p>{movie.producer}</p>
          <p>{movie.characters}</p>
          
       
        </div>
      }

      { <Characters  name={per.name}/>}
    </div>
  );
}
