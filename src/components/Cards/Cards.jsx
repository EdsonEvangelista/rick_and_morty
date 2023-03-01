import Card from '../Card/Card';
import styles from './Cards.module.css'
// style={{justifyContent:'center' ,display:'flex' ,flexDirection:'row'}
function Cards({characters}) {

   return (
      <div className={styles.container}>
         {
            characters.map( ({id,name,species,gender,image}) => {
               return (
                  <Card key={id} 
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
                  onClose={() => window.alert('Emulamos que se cierra la card')}                     
                  />
               ) 
                                 
            })
         }
      </div>
   );
}

export default Cards;