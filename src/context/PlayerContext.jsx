import { createContext, useRef } from "react";

// creating context
export const PlayerContext = createContext();

// creating context provider function
const PlayerContextProvider = (props) => {

    // create reference variable for audio
    const audioRef = useRef();

    const contextValue = {
        audioRef
    }

    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;