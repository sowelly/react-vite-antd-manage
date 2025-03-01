import React from 'react';
import counterStore from './counterStore';

const stores = {
    counterStore,
};

export const StoreContext = React.createContext(stores);

export const StoreProvider = ({ children }) => {
    return (
        <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>
    );
};