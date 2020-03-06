import React, {Component, Fragment} from "react"
import {connect} from "react-redux"
import {get} from "@actions/Polygons"
import ComponentPolygon from "@components/Polygon";
import Error from "@components/Error";
import Loading from "@components/Loading";

const mapStateToProps = state => {
    return {
        polygons: state.polygons.polygons,
        isLoading: state.polygons.isLoading,
        error: state.polygons.error,
    }
}

const mapDispatchToProps = {get}

class Polygon extends Component {

    componentDidMount() {
        this.props.get()
    }

    render() {
        if (! this.props.isLoading) {
            const polygon = this.props.polygons.find(p => p.id === Number(this.props.match.params.id))
            if (polygon)
                return <svg width="1600" height="900">
                    <ComponentPolygon key={polygon.id} polygon={polygon}/>
                </svg>
            else
                return <Error/>
        } else
            return <Loading/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Polygon)
