import React from 'react';
import { useSelector } from 'react-redux';

const CantidadPokeFuncion = () => {
    const game_shop = useSelector((state) => state.game_shop);
    return (
        <React.Fragment>
            unidades : {game_shop.pokemon}
        </React.Fragment>
    )
};

export default CantidadPokeFuncion;