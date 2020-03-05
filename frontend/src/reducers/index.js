import {combineReducers} from "redux"
import points from "@reducers/Points"
import polygons from "@reducers/Polygon"

export default combineReducers({
    points,
    polygons
})