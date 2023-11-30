import { createContext, useState } from "react"

export const ViewPositionContext = createContext();

const ViewPositionProvider = ({ children }) => {

    const [viewPosition, setViewPosition] = useState({
        mainPage: true,
        photographerPhoto: false,
        photoSection: false,
        contactForm: false,
    });
    
    return (
        <ViewPositionContext.Provider value={{ viewPosition, setViewPosition }}>
            {children}
        </ViewPositionContext.Provider>
    )
}

export default ViewPositionProvider