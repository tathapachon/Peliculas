
import { useDispatch, useSelector } from 'react-redux';
import { fetchById } from '../../actions/index';
import { useEffect , useState} from 'react';
import axios from "axios"


export default function Detalle(props) {
  const dispatch = useDispatch();
  const [per, setPer] =useState([])
  const videogame = useSelector((state) => state.videogameDetail);

  useEffect(() => {
    dispatch(fetchById(props.match.params.id));
  }, [dispatch]);


let arrayPer = []
arrayPer=videogame.characters
  setTimeout(()=>{
    arrayPer=videogame.characters   
    /*const getPeople= async ()=>{
       for(let i =0;i< arrayPer.length;i++){
      const res= await axios.get(arrayPer[i]) 
      setPer(res.data)
    } }
       getPeople()
       Promise.all(arrayPer.map(axios.get))
.then(nuevo_arreglo => {
  nuevo_arreglo.forEach(result => {
    console.log(result.data);
    setPer(result.data)
  });
});*/
  },10000)
  





console.log("personaje",per.name)




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
