import {POLYGONS_GET} from "@actions/types"


export const get = () => async (dispatch, getState) => {
    if (getState().polygons.polygons.length === 0) {
        try {
            const res = await fetch("http://localhost:8051/api/v1/polygons/")
            const data = await res.json()
            if (data.error)
                dispatch({
                    type: POLYGONS_GET,
                    payload: {
                        polygons: [],
                        isLoading: false,
                        error: data
                    }
                })
            else
                dispatch({
                    type: POLYGONS_GET,
                    payload: {
                        polygons: data.data,
                        isLoading: false,
                        error: null
                    }
                })
        } catch (e) {
            dispatch({
                type: POLYGONS_GET,
                payload: {
                    polygons: [],
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