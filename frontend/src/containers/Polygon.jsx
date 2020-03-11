import React, {Component} from "react"
import {connect} from "react-redux"
import {get as getPoints} from "@actions/Points"
import {get as getPolygons} from "@actions/Polygons"
import ErrorLoadingBoundary from "@components/ErrorLoadingBoundary"
import PolygonWithPoints from "@containers/PolygonWithPoints";

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
        const polygon = this.props.polygons[Number(this.props.match.params.id)]
        if (polygon) {
            const isLoading = this.props.isLoadingPoints || this.props.isLoadingPolygons
            const error = this.props.errorPoints || this.props.errorPolygons

            return <ErrorLoadingBoundary isLoading={isLoading} error={error}>
                <PolygonWithPoints key={polygon.id} polygon={polygon}/>
            </ErrorLoadingBoundary>
        } else {
            const error = {
                error: 404,
                message: "Page not found"
            }
            return <ErrorLoadingBoundary isLoading={false} error={error}/>
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Polygon)
