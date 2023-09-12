import {Button, CardContainer, Title, ButtonCont, Image, Label} from './styled'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {addFav, removeFav} from '../../Redux/actions'
import {connect} from 'react-redux'

function Card({name, status, species, gender, origin, image, onClose, id, addFav, removeFav, myFavorites}) {

   // let {id} = props
   
const [isFav, setIsFav] = useState(false)

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

const handleFavorite = () => {
   if(isFav){
      setIsFav(false)
      removeFav(id)
   } else {
      setIsFav(true)
      addFav({name, status, species, gender, origin, image, id})
   }
}

   return (
      <CardContainer>
         <ButtonCont> 
         {
   isFav ? (
      <Button onClick={handleFavorite}>💛</Button>
   ) : (
      <Button onClick={handleFavorite}>🤍</Button>
   )
}
  
         <Button close onClick={() => onClose(id)}>❌</Button>
         </ButtonCont>
        <Link to={`/detail/${id}`}> <Title> {name} | {id}</Title> </Link>  
         <Image src={image} alt = {`No se encuentra la imagen de ${name}`}/>
          <ButtonCont> 
         <Label>| {status} |</Label>
         <Label>| {species} |</Label>
         </ButtonCont>
       
      </CardContainer>
   );
}

export function mapStateToProps (state){
return {
   myFavorites: state.myFavorites
}
}

export function mapDispatchToProps (dispatch){
   return{
      addFav: function(character){
         dispatch(addFav(character))
      }, 
      removeFav: function(id){
         dispatch(removeFav(id))
      }
   }
}
export default connect (mapStateToProps, mapDispatchToProps)(Card)