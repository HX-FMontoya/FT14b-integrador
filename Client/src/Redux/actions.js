import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAV } from "./action-type";

// export const addFav =(payload) => {
//     return {
//         type:  ADD_FAV,
//         payload
//     }
// }
//ADD FAV CON ASYNC AWAIT
export const addFav = (character) => async (dispatch) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav";
    const { data } = await axios.post(endpoint, character);

    dispatch({
      type: ADD_FAV,
      payload: data,
    });
  } catch (error) {
    alert("Could not add the character selected");
  }
};
/* export const addFav = (character) => {
  return async (dispatch) => {
    try {
      const endpoint = "http://localhost:3001/rickandmorty/fav";
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}; */

// export const removeFav =(id) => {
//     return {
//         type:  REMOVE_FAV,
//         payload: id
//     }
// }
export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);

      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterFav = (gender) => {
  return {
    type: FILTER_FAV,
    payload: gender,
  };
};

export const orderFav = (order) => {
  return {
    type: ORDER_FAV,
    payload: order,
  };
};

/*
COMPONENTE CARD
import {addFav}
addFav(5)
ACTION ----> reducer --->  {type: ADD_FAV, payload: 5}
REDUCER--->  state{ favorite: [5]}


! 
getCharacterById(id)
fetch(localhost:3001/characters/${id})
  res => res.json()
  data => {
    return{
        type: GET_CHARACTER,
        payload: data
    }
  }

*/
