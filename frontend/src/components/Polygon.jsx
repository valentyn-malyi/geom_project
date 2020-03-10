import React, {Component, Fragment} from "react"

class Polygon extends Component {
    render() {
        return <Fragment>
            <polygon points={this.props.polygon.coordinates} style={this.props.style}/>
        </Fragment>
    }
}

export default Polygon