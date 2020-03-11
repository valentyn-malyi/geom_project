import {POLYGON_INTERSECT_WITH_POINTS, INIT_POLYGON_INTERSECT_WITH_POINTS} from "@actions/types"

export class Points {
    constructor(isLoading, error, points) {
        this.isLoading = isLoading
        this.error = error
        this.points = points
    }
}

export const get = (polygon) => async (dispatch) => {
    try {
        const res = await fetch(`http://localhost:8051/api/v1/polygon/${polygon.id}/points`)
        const data = await res.json()
        if (data.error) {
            const points = new Points(false, data, [])
            dispatch({
                type: POLYGON_INTERSECT_WITH_POINTS,
                payload: {
                    points: points,
                    id: polygon.id
                }
            })
        } else {
            const points = new Points(false, null, data.data)
            dispatch({
                type: POLYGON_INTERSECT_WITH_POINTS,
                payload: {
                    points: points,
                    id: polygon.id
                }
            })
        }
    } catch (e) {
        const points = new Points(false, {error: e.name, message: e.message}, [])
        dispatch({
            type: POLYGON_INTERSECT_WITH_POINTS,
            payload: {
                points: points,
                id: polygon.id
            }
        })
    }
}

export const setPoints = (polygon) => (dispatch) => {
    const points = new Points(true, null, [])
    dispatch({
        type: INIT_POLYGON_INTERSECT_WITH_POINTS,
        payload: {
            points: points,
            id: polygon.id
        }
    })
}