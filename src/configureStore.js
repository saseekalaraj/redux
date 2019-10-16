 import { createStore } from "redux"
import rootReducer from "./rootReducer"
import {devToolsEnhancer} from 'redux-devtools-extension'

export const configureStore = () =>{
    const store =createStore(rootReducer,devToolsEnhancer())

    return store
}