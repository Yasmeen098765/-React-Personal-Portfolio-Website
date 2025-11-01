import React, { createContext, useRef } from 'react';

export const refContext = createContext();

export default function Reference({ children }) {
    const homeRef = useRef(null);
    const contactRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);

    return (
        <refContext.Provider value={{homeRef, skillsRef, projectsRef,contactRef }}>
            {children}
        </refContext.Provider>
    );
}