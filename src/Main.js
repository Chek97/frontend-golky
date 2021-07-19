import React from 'react'
import { Provider } from 'react-redux';
import { SearchBar } from './components/SearchBar'
import { store } from './store/store';
import './style.css';

export const Main = () => {
    return (
        <Provider store={store}>
            <SearchBar />
        </Provider>
    )
}
