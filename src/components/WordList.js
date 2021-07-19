//IMPORTS
import React from 'react';
import { useSelector } from 'react-redux';

export const WordList = () => {

    //get the word's list from redux state
    const { words } = useSelector(state => state.text);

    return (
        <div className="custom-list">
            <h2>Resultados: </h2>
            <div>
                {
                    /* list the words if they exists */
                    words.length > 0
                    &&
                    <ul className="custom-list-words">
                        {
                        /* List the words in the screen */
                            words.map(w => (
                                <li key={w}>{w}</li>
                            ))
                        }
                    </ul>
                }
            </div>
        </div>
    )
}
