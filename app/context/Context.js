// context/MyContext.js

"use client"
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export function useMyContext() {
    return useContext(MyContext);
}

export function MyContextProvider({ children }) {
    const [data, setData] = useState({});

    return (
        <MyContext.Provider value={{ data, setData }}>
            {children}
        </MyContext.Provider>
    );
}
