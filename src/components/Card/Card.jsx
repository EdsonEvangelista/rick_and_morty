import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({id,name,species,gender,image,onClose}) {

   return (
      <div className={styles.container}>
         
         <div className={styles.buttonContainer}>
            <button onClick={onClose}>X</button>
         </div>
         <div className={styles.dataContainer}>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         </div>
         <img className={styles.image} src={image} alt={name} />
      </div>
   );
}
