import {POINTS_GET} from "@actions/types"

const InitialState = {
    points: {},
    isLoading: true,
    error: null
}

export default function (state = InitialState, action) {
    switch (action.type) {
        case POINTS_GET:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}