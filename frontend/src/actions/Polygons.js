import {POLYGONS_GET} from "@actions/types"

class Polygon {
    constructor(id, coordinates) {
        this.coordinates = coordinates
        this.id = id
    }
}

export const get = () => async (dispatch) => {
    try {
        const res = await fetch("http://192.168.50.134:8051/api/v1/polygons/")
        const data = await res.json()
        if (data.error)
            dispatch({
                type: POLYGONS_GET,
                payload: {
                    polygons: {},
                    isLoading: false,
                    error: data
                }
            })
        else {
            const polygons = {}
            for (let polygon of data.data) {
                polygons[polygon.id] = new Polygon(polygon.id, polygon.coordinates)
            }
            dispatch({
                type: POLYGONS_GET,
                payload: {
                    polygons: polygons,
                    isLoading: false,
                    error: null
                }
            })
        }
    } catch (e) {
        dispatch({
            type: POLYGONS_GET,
            payload: {
                polygons: {},
                isLoading: false,
                error: {
                    error: e.name,
                    message: e.message
                }
            }
        })
    }
}