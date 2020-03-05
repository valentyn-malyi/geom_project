import React, {Component} from "react"
import {connect} from "react-redux"
import {PointsGet} from "@actions/Points"
import Point from "@components/Point"

const mapStateToProps = state => {
    return {
        points: state.points.points,
        isLoading: state.points.isLoading,
        error: state.points.error,
        status: state.points.status
    }
}

const mapDispatchToProps = {PointsGet}

class Points extends Component {
    componentDidMount() {
        this.props.PointsGet()
    }

    render() {
        return <svg width="1600" height="900">
                {this.props.points.map(p => {
                    return <Point key={p.id} x={p.x} y={p.y}/>
                })}
            </svg>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Points)