import {POLYGON_INTERSECT} from "@actions/types"

const InitialState = {
    polygons: {},
    isLoading: true,
}

export default function (state = InitialState, action) {
    switch (action.type) {
        case POLYGON_INTERSECT:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}