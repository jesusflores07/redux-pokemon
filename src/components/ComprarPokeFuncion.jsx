
import { useDispatch } from 'react-redux'
 import {buy_pokemon_action, return_pokemon_action,} from "../redux/actions/gameShopActions";
 
   const CantidadPokeFuncion = () => {
    const dispatch = useDispatch()
    
    return (
      <div>
         <button
        className="btn btn-primary btn-sm mb-2"
        onClick={() => {
          dispatch(buy_pokemon_action(1));
        }}
      >buy pokemon</button>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => {
          dispatch(return_pokemon_action(1));
        }}
      >return pokemon</button>
      </div>
    )
 }

 export default CantidadPokeFuncion