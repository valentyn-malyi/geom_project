import {POINTS_GET} from "@actions/types"


class Point {
    constructor(id, x, y) {
        this.x = x
        this.y = y
        this.id = id
    }
}

export const get = () => async (dispatch) => {
    try {
        const res = await fetch("http://192.168.50.134:8051/api/v1/points/")
        const data = await res.json()
        if (data.error)
            dispatch({
                type: POINTS_GET,
                payload: {
                    points: {},
                    isLoading: false,
                    error: data
                }
            })
        else {
            const points = {}
            for (let point of data.data) {
                points[point.id] = new Point(point.id, point.x, point.y)
            }
            dispatch({
                type: POINTS_GET,
                payload: {
                    points: points,
                    isLoading: false,
                    error: null
                }
            })
        }
    } catch (e) {
        dispatch({
            type: POINTS_GET,
            payload: {
                points: {},
                isLoading: false,
                error: {
                    error: e.name,
                    message: e.message
                }
            }
        })
    }
}