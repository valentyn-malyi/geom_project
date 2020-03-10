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
        this.props.getPoints()
        this.props.getPolygons()
    }

    render() {
        const isLoading = this.props.isLoadingPoints || this.props.isLoadingPolygons
        const error = this.props.errorPoints || this.props.errorPolygons
        const polygon = this.props.polygons.find(p => p.id === Number(this.props.match.params.id))
        if (polygon) {
            const style = {fill: "purple", stroke: "purple", strokeWidth: 1}
            return <ErrorLoadingBoundary isLoading={isLoading} error={error}>
                <svg width="1600" height="900">
                    <ComponentPolygon key={polygon.id} polygon={polygon} style={style}/>
                    {this.props.points.map(p => {
                        return <Point key={p.id} x={p.x} y={p.y}/>
                    })}
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
