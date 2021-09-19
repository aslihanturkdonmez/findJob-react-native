import React from 'react';
import Router from './Router';
import FavProvider from './context/FavProvider/FavProvider';

export default Wrapper = () =>{
    return (
        <FavProvider>
            <Router />
        </FavProvider>
    );
};