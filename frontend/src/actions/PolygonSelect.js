import {POLYGON_SELECT} from "@actions/types";


export const select = (polygon) => (dispatch, getState) => {
    const storePolygon = getState().polygonSelect.polygon
    if (storePolygon === null)
        dispatch({
            type: POLYGON_SELECT,
            payload: {
                polygon: polygon,
                isLoading: false,
            }
        })
    else {
        if (storePolygon.id === polygon.id)
            dispatch({
                type: POLYGON_SELECT,
                payload: {
                    polygon: null,
                    isLoading: false,
                }
            })
        else
            dispatch({
                type: POLYGON_SELECT,
                payload: {
                    polygon: polygon,
                    isLoading: false,
                }
            })
    }
}