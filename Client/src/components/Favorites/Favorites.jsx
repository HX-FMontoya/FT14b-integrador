import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderFav, filterFav } from "../../Redux/actions";

import Card from "../Card/Card";
import style from "./Favorite.module.css";

function Favorites() {
  const [aux, setAux] = React.useState(false);

  const optionsGender = ["All", "Male", "Female", "Genderless", "unknown"];

  const dispatch = useDispatch();

  const myFavorites = useSelector((state) => state.myFavorites);

  const handlerFilter = (event) => {
    dispatch(filterFav(event.target.value));
  };

  const handleOrder = (event) => {
    dispatch(orderFav(event.target.value));
    setAux(!aux);
  };

  return (
    <div>
      <select onChange={handleOrder}>
        <option value="Ascendente"> ASCENDENTE</option>
        <option value="Descendente">DESCENDENTE</option>
      </select>

      <select onChange={handlerFilter}>
        {optionsGender.map((option) => (
          <option key={option} value={option}>
            {" "}
            {option}{" "}
          </option>
        ))}
      </select>

      <div className={style.cardsConteiner}>
        {myFavorites?.map(
          ({ id, name, gender, species, image, status, origin }) => (
            <Card
              key={id}
              name={name}
              status={status}
              species={species}
              image={image}
            />
          )
        )}
      </div>
    </div>
  );
}

// export function mapStateToProps(state){
//     return{
//         myFavorites: state.myFavorites
//     }
// }

// export default connect(mapStateToProps)(Favorites)
export default Favorites;
