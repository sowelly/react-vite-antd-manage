import React from 'react';
import { StoreContext } from './StoreContext';

export const useStore = () => {
    const store = React.useContext(StoreContext);
    if (!store) {
        throw new Error('useStore must be used within a StoreProvider');
    }
    return store;
};