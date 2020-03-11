import React, {Component} from "react"
import {connect} from "react-redux"
import {get as getPoints} from "@actions/Points"
import {get as getPolygons} from "@actions/Polygons"
import Point from "@components/Point"
import Polygon from "@components/Polygon"
import ErrorLoadingBoundary from "@components/ErrorLoadingBoundary"

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

class Home extends Component {
    componentDidMount() {
        if (Object.keys(this.props.polygons).length === 0)
            this.props.getPolygons()
        if (Object.keys(this.props.points).length === 0)
            this.props.getPoints()
    }

    render() {
        const polygonsComponents = function (polygons, isShow) {
            const style = {fillOpacity: 0, stroke: "purple", strokeWidth: 1}
            if (!isShow)
                return []
            const components = []
            for (let polygon of Object.values(polygons)) {
                components.push(<Polygon key={polygon.id} polygon={polygon} style={style}/>)
            }
            return components
        }

        const pointsComponents = function (points, isShow) {
            if (!isShow)
                return []
            const components = []
            for (let point of Object.values(points)) {
                components.push(<Point key={point.id} x={point.x} y={point.y}/>)
            }
            return components
        }

        const isLoading = this.props.isLoadingPoints || this.props.isLoadingPolygons
        const error = this.props.errorPoints || this.props.errorPolygons

        return <ErrorLoadingBoundary isLoading={isLoading} error={error}>
            <svg width="1600" height="900">
                {
                    pointsComponents(this.props.points, this.props.showPoints)
                }
                {
                    polygonsComponents(this.props.polygons, this.props.showPolygons)
                }
            </svg>
        </ErrorLoadingBoundary>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

