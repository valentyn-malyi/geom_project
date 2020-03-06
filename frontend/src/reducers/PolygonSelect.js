import {POLYGON_SELECT} from "@actions/types"

const InitialState = {
    polygon: null,
    isLoading: true,
}

export default function (state = InitialState, action) {
    switch (action.type) {
        case POLYGON_SELECT:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}