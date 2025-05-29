// 

import React, { createContext, useReducer } from 'react';
import { initialState as defaultInitialState } from '../../Utility/reducer';

export const DataContext = createContext();

export const DataProvider = ({ children, reducer, initialState = defaultInitialState }) => {
    return (
        <DataContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </DataContext.Provider>
    );
};
