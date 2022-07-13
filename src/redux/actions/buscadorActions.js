import  Axios  from "axios";



export const FETCH_POKEMON_REQUEST = "FETCH_POKEMON_REQUEST";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";

//actions

export const fetchPokemonRequest = () => {
  return {
    type: FETCH_POKEMON_REQUEST,
  };
};

export const fetchPokemonSuccess = (pokemon) => {
  return {
    type: FETCH_POKEMON_SUCCESS,
    payload: pokemon,
  };
};

export const fetchPokemonFailure = (error) => {
  return {
    type: FETCH_POKEMON_FAILURE,
    payload: error,
  };
};

const fetchPokemon = (valor) => {
  return (dispatch) => {
    dispatch(fetchPokemonRequest());
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
      .then(response => { console.log('funciona')
        dispatch(fetchPokemonSuccess([response.data]));
      })
      .catch(error => { console.log('error')
        dispatch(fetchPokemonFailure("no se encontro el pokemon"));
      });
  };
};

export default fetchPokemon;
