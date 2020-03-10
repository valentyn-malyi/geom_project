import React, {Component} from "react"
import {connect} from "react-redux"
import {get} from "@actions/Polygons"
import Polygon from "@components/Polygon";
import ErrorLoadingBoundary from "@components/ErrorLoadingBoundary"

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
        return <ErrorLoadingBoundary isLoading={this.props.isLoading} error={this.props.error}>
            <svg width="1600" height="900">
                {this.props.polygons.map(p => {
                    return <Polygon key={p.id} polygon={p}/>
                })}
            </svg>
        </ErrorLoadingBoundary>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Polygons)