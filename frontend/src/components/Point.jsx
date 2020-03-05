import React, {Component, Fragment} from "react"

class Point extends Component {
    render() {
        return <Fragment>
            <circle cx={this.props.x} cy={this.props.y} r="1" stroke="green" fill="green"/>
        </Fragment>
    }
}

export default Point