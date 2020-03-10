import {POLYGON_INTERSECT, POLYGONS_GET} from "@actions/types"


export const select = (polygon) => async (dispatch) => {
    try {
        const res = await fetch(`http://localhost:8051/api/v1/polygon/${polygon.id}/points`)
        const data = await res.json()
        if (data.error)
            dispatch({
                type: POLYGON_INTERSECT,
                payload: {
                    id: polygon.id,
                    points: null,
                    isLoading: false,
                    error: data
                }
            })
        else
            dispatch({
                type: POLYGON_INTERSECT,
                payload: {
                    id: polygon.id,
                    points: data.data,
                    isLoading: false,
                    error: null
                }
            })
    } catch (e) {
        dispatch({
            type: POLYGON_INTERSECT,
            payload: {
                points: null,
                id: polygon.id,
                isLoading: false,
                error: {
                    error: e.name,
                    message: e.message
                }
            }
        })
    }
}