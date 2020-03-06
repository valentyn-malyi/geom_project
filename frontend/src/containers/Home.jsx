import React, {Component} from "react"
import {connect} from "react-redux"
import {get as getPoints} from "@actions/Points"
import {get as getPolygons} from "@actions/Polygons"
import Point from "@components/Point"
import Polygon from "@components/Polygon"
import Loading from "@components/Loading"

const mapStateToProps = state => {
    return {
        points: state.points.points,
        isLoadingPoints: state.points.isLoading,
        polygons: state.polygons.polygons,
        isLoadingPolygons: state.polygons.isLoading
    }
}

const mapDispatchToProps = {getPoints, getPolygons}

class Home extends Component {
    componentDidMount() {
        this.props.getPoints()
        this.props.getPolygons()
    }

    render() {
        const isLoading = this.props.isLoadingPoints && this.props.isLoadingPolygons
        if (isLoading)
            return <svg width="1600" height="900">
                {this.props.points.map(p => {
                    return <Point key={p.id} x={p.x} y={p.y}/>
                })}
                {this.props.polygons.map(p => {
                    return <Polygon key={p.id} polygon={p}/>
                })}
            </svg>
        else
            return <Loading/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)