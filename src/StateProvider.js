//set up data layer
//we need this to track the basket
import React, {createContext,useContext,useReducer} from 'react'

//this the data layer
export const StateContext = createContext()

//Build a provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// this is how we use it inside other components
export const useStateValue = () =>  useContext(StateContext)
