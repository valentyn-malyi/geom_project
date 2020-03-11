import React, {Component, Fragment} from "react"

class Point extends Component {
    render() {
        const color = this.props.color
        return <Fragment>
            <circle cx={this.props.x} cy={this.props.y} r="1" stroke={color} fill={color}/>
        </Fragment>
    }
}

export default Point