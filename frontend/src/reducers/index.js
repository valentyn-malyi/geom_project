import {combineReducers} from "redux"
import points from "@reducers/Points"
import polygons from "@reducers/Polygon"
import polygonSelect from "@reducers/PolygonSelect"
import polygonWithPoints from "@reducers/PolygonWithPoints"

export default combineReducers({
    points,
    polygons,
    polygonSelect,
    polygonWithPoints
})