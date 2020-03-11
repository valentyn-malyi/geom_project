import {POLYGON_INTERSECT_WITH_POINTS, INIT_POLYGON_INTERSECT_WITH_POINTS} from "@actions/types"

const InitialState = {}

export default function (state = InitialState, action) {
    switch (action.type) {
        case POLYGON_INTERSECT_WITH_POINTS:
        case INIT_POLYGON_INTERSECT_WITH_POINTS: {
            const newState = {...state}
            newState[action.payload.id] = action.payload.points
            return newState
        }
        default:
            return {...state}
    }
}