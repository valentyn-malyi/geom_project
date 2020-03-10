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
        this.props.getPoints()
        this.props.getPolygons()
    }


    render() {
        const isLoading = this.props.isLoadingPoints || this.props.isLoadingPolygons
        const error = this.props.errorPoints || this.props.errorPolygons
        const style = {fillOpacity: 0, stroke: "purple", strokeWidth: 1}
        return <ErrorLoadingBoundary isLoading={isLoading} error={error}>
            <svg width="1600" height="900">
                {this.props.points.map(p => {
                    return <Point key={p.id} x={p.x} y={p.y}/>
                })}
                {this.props.polygons.map(p => {
                    return <Polygon key={p.id} polygon={p} style={style}/>
                })}
            </svg>
        </ ErrorLoadingBoundary>

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)