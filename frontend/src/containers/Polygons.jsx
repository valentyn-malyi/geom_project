import React, {Component, Fragment} from "react"
import {connect} from "react-redux"
import {PolygonsGet} from "@actions/Polygons"
import Polygon from "@components/Polygon";

const mapStateToProps = state => {
    return {
        polygons: state.polygons.polygons,
        isLoading: state.polygons.isLoading,
        error: state.polygons.error,
        status: state.polygons.status
    }
}

const mapDispatchToProps = {PolygonsGet}

class Polygons extends Component {
    componentDidMount() {
        this.props.PolygonsGet()
    }

    render() {
        return <svg width="1600" height="900">
                {this.props.polygons.map(p => {
                    return <Polygon key={p.id} coordinates={p.coordinates}/>
                })}
            </svg>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Polygons)