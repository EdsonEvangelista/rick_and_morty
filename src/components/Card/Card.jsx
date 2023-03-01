import styles from "./Card.module.css";

export default function Card({name,species,gender,image,onClose}) {
   return (
      <div className={styles.container}>
         <div className={styles.}>
            <button onClick={onClose}>X</button>
         </div>

         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img className={styles.image} src={image} alt={name} />
      </div>
   );
}
