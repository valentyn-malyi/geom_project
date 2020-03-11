import React, {Component} from "react"
import {connect} from "react-redux"
import {get as getPoints} from "@actions/Points"
import {get as getPolygons} from "@actions/Polygons"
import ComponentPolygon from "@components/Polygon"
import ErrorLoadingBoundary from "@components/ErrorLoadingBoundary"
import Point from "@components/Point"

const mapStateToProps = state => {
    return {
        points: state.points.points,
        polygons: state.polygons.polygons,
        isLoadingPoints: state.points.isLoading,
        isLoadingPolygons: state.polygons.isLoading,
        errorPolygons: state.polygons.error,
        errorPoints: state.points.error,
    }
}
const mapDispatchToProps = {getPoints, getPolygons}

class Polygon extends Component {

    componentDidMount() {
        if (Object.keys(this.props.polygons).length === 0)
            this.props.getPolygons()
        if (Object.keys(this.props.points).length === 0)
            this.props.getPoints()
    }

    render() {
        const isLoading = this.props.isLoadingPoints || this.props.isLoadingPolygons
        const error = this.props.errorPoints || this.props.errorPolygons
        const polygon = this.props.polygons[Number(this.props.match.params.id)]

        const pointsComponents = function (points) {
            const components = []
            for (let point of Object.values(points)) {
                components.push(<Point key={point.id} x={point.x} y={point.y}/>)
            }
            return components
        }

        if (polygon) {
            const style = {fill: "purple", stroke: "purple", strokeWidth: 1}
            return <ErrorLoadingBoundary isLoading={isLoading} error={error}>
                <svg width="1600" height="900">
                    <ComponentPolygon key={polygon.id} polygon={polygon} style={style}/>
                    {pointsComponents(this.props.points)}
                </svg>
            </ErrorLoadingBoundary>
        } else {
            const error = {
                error: 404,
                message: "Page not found"
            }
            return <ErrorLoadingBoundary isLoading={this.props.isLoading} error={error}/>
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Polygon)
