import { createContext, useState } from "react";

export const LinksContext = createContext();

export const Links = ({ children }) => {
    const [links, setLinks] = useState([]);

    return (
        <LinksContext.Provider value={[links, setLinks]}>
            {children}
        </LinksContext.Provider>
    );
};