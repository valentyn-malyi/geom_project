import React, {Component} from "react"
import {connect} from "react-redux"
import {get} from "@actions/Polygons"
import ComponentPolygon from "@components/Polygon"
import ErrorLoadingBoundary from "@components/ErrorLoadingBoundary";

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
        const polygon = this.props.polygons.find(p => p.id === Number(this.props.match.params.id))
        if (polygon)
            return <ErrorLoadingBoundary isLoading={this.props.isLoading} error={this.props.error}>
                <svg width="1600" height="900">
                    <ComponentPolygon key={polygon.id} polygon={polygon}/>
                </svg>
            </ErrorLoadingBoundary>
        else {
            const error = {
                error: 404,
                message: "Page not found"
            }
            return <ErrorLoadingBoundary isLoading={this.props.isLoading} error={error}/>
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Polygon)
