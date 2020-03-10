import {POINTS_GET} from "@actions/types"


export const get = () => async (dispatch, getState) => {
    if (getState().points.points.length === 0) {
        try {
            const res = await fetch("http://localhost:8051/api/v1/points/")
            const data = await res.json()
            if (data.error)
                dispatch({
                    type: POINTS_GET,
                    payload: {
                        points: [],
                        isLoading: false,
                        error: data
                    }
                })
            else
                dispatch({
                    type: POINTS_GET,
                    payload: {
                        points: data.data,
                        isLoading: false,
                        error: null
                    }
                })
        } catch (e) {
            console.log(e)
            dispatch({
                type: POINTS_GET,
                payload: {
                    points: [],
                    isLoading: false,
                    error: {
                        error: e.name,
                        message: e.message
                    }
                }
            })
        }
    }
}