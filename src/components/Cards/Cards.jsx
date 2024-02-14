import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards({characters, onClose}) {
   
   return <div className={style.divCards}>
         {
         characters.map((character)=>
            <Card
             character={character}
             onClose={onClose}
              />

         )
         }   
         
         </div>
   
}
