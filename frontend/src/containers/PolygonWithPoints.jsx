import React, {Component} from "react"
import {connect} from "react-redux"
import ComponentPolygon from "@components/Polygon"
import ErrorLoadingBoundary from "@components/ErrorLoadingBoundary"
import {get, setPoints} from "@actions/PolygonsWithPoints"
import Point from "@components/Point"

const mapStateToProps = state => {
    return {
        points: state.points.points,
        polygons: state.polygonsWithPoints,
    }
}

const mapDispatchToProps = {get, setPoints}

class PolygonWithPoints extends Component {

    componentDidMount() {
        const polygon = this.props.polygon
        if (this.props.polygons[polygon.id] === undefined) {
            this.props.get(polygon)
        }
    }

    render() {
        const polygon = this.props.polygon
        const pointsComponents = function (points, isInPolygon) {
            const components = []
            for (let point of Object.values(points)) {
                if (isInPolygon.includes(point.id))
                    components.push(<Point key={point.id} x={point.x} y={point.y} color="yellow"/>)
                else
                    components.push(<Point key={point.id} x={point.x} y={point.y} color="black"/>)
            }
            return components
        }

        const style = {fill: "purple", stroke: "purple", strokeWidth: 1}
        const points = this.props.polygons[this.props.polygon.id]
        if (points === undefined)
            return <ErrorLoadingBoundary isLoading={true} error={null}/>
        else
            return <ErrorLoadingBoundary isLoading={points.isLoading} error={points.error}>
                <svg width="1600" height="900">
                    <ComponentPolygon key={polygon.id} polygon={polygon} style={style}/>
                    {pointsComponents(this.props.points, points.points)}
                </svg>
            </ErrorLoadingBoundary>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PolygonWithPoints)
