import Card from './Card';

function Cards({characters}) {

   return (
      <div style={{justifyContent:'center' ,display:'flex' ,flexDirection:'row'}}>
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