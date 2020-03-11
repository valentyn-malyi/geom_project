import {combineReducers} from "redux"
import points from "@reducers/Points"
import polygons from "@reducers/Polygons"
import polygonSelect from "@reducers/PolygonSelect"
import polygonsWithPoints from "@reducers/PolygonsWithPoints"

export default combineReducers({
    points,
    polygons,
    polygonSelect,
    polygonsWithPoints
})