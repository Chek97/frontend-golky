//IMPORTS
import { types } from '../types/types';

//make request to the api in node
export const startGetText = (search) => {
    return async(dispatch) => {

        //enviroment variable to make request
        const baseUrl = process.env.REACT_APP_API_URL;

        //api request
        const resp = await fetch(`${baseUrl}/iecho?text=${search}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        });
        //response
        const {text} = await resp.json();
        
        //if response is ok, call the reducer
        if(resp.ok){
            dispatch(getText(text));
        }else{
            
            console.error('Error: no se envio ningun texto');
        }
    }
}

//make the action to the reducer with the answer from api
export const getText = (text) => ({
    type: types.getText,
    payload: text
});