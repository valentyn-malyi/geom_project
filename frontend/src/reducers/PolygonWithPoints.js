import {POLYGON_INTERSECT} from "@actions/types"

const InitialState = {
    polygons: {}
}

export default function (state = InitialState, action) {
    switch (action.type) {
        case POLYGON_INTERSECT:
            return {
                polygons: {
                    ...state.polygons,
                    [action.payload.id]: {
                        data: action.payload.points,
                        isLoading: action.payload.isLoading,
                        error: action.payload.error
                    }
                }
            }
        default:
            return state
    }
}