import {POLYGONS_GET} from "@actions/types"

const InitialState = {
    polygons: [],
    isLoading: true,
    error: null
}

export default function (state = InitialState, action) {
    switch (action.type) {
        case POLYGONS_GET:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}