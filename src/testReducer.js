import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstant"

const initialState = {
    data: 5
}
const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state.data, data: state.data + 1 }
        case DECREMENT_COUNTER:
            return { ...state.data, data: state.data - 1 }
        default:
            return state
    }
}
export default testReducer