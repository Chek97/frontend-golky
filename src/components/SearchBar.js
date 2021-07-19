//IMPORTS
import React from 'react';
import { useForm } from '../hooks/useForm';
import { WordList } from './WordList';
import { useDispatch } from 'react-redux';
import { startGetText } from '../actions/actions';

export const SearchBar = () => {    
    //dispatch
    const dispatch = useDispatch();
    
    //state form
    const [values, handleInputChange] = useForm({
        search: ''
    });
    //desestructuring form-values
    const {search} = values;

    //submit event
    const handleSubmit = async(e) => {
        e.preventDefault();
        //send the text word to make request
        dispatch(startGetText(search));        
    }

    return (
        <>
            <nav className="navbar custom-navbar">
                <form className="form-inline custom-form" onSubmit={handleSubmit}>
                    <input 
                        className="form-control mr-sm-2" 
                        type="text"
                        name="search"
                        value={search}
                        required
                        onChange={handleInputChange} 
                        placeholder="Ingresa una palabra" 
                        aria-label="Search" 
                    />
                    <button className="btn my-2 my-sm-0" type="submit">Buscar</button>
                </form>
            </nav>
            <WordList />
        </>
    )
}
