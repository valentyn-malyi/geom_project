import React, {Component} from "react"
import {connect} from "react-redux"
import {get} from "@actions/Polygons"
import Polygon from "@components/Polygon";

const mapStateToProps = state => {
    return {
        polygons: state.polygons.polygons,
        isLoading: state.polygons.isLoading,
        error: state.polygons.error,
    }
}

const mapDispatchToProps = {get}

class Polygons extends Component {
    componentDidMount() {
        this.props.get()
    }

    render() {
        return <svg width="1600" height="900">
            {this.props.polygons.map(p => {
                return <Polygon key={p.id} polygon={p}/>
            })}
        </svg>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Polygons)