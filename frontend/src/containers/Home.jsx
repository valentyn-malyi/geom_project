import React, {Component} from "react"
import {connect} from "react-redux"
import {PointsGet} from "@actions/Points"
import {PolygonsGet} from "@actions/Polygons"
import Point from "@components/Point"
import Polygon from "@components/Polygon"

const mapStateToProps = state => {
    return {
        points: state.points.points,
        isLoading: state.points.isLoading,
        error: state.points.error,
        status: state.points.status,
        polygons: state.polygons.polygons
    }
}

const mapDispatchToProps = {PointsGet, PolygonsGet}

class Home extends Component {
    componentDidMount() {
        this.props.PointsGet()
        this.props.PolygonsGet()
    }

    render() {
        return <svg width="1600" height="900">
            {this.props.points.map(p => {
                return <Point key={p.id} x={p.x} y={p.y}/>
            })}
            {this.props.polygons.map(p => {
                return <Polygon key={p.id} coordinates={p.coordinates}/>
            })}
        </svg>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)